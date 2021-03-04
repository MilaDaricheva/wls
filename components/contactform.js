import { Component } from "react"
import { useState, useEffect } from 'react'

import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"

import { sendContactMail } from "../components/mail-api"

const FormMessage = (props) => {
  const controls = useAnimation()

  const [note, setNote] = useState("Send us a message");
  const [noteKey, setNoteKey] = useState("intro");

  const messageVariants = {
    fadein: { opacity: 1 },
    fadeout: { opacity: 0 }
  }

  useEffect(() => {
    const sequence = async () => {
      //console.log("USE Effect")
      if (props.noteKey !== "intro") {
        await controls.start("fadeout")
        setNoteKey(props.noteKey)
        setNote(props.note)
        await controls.start("fadein")
      }

    };
    sequence();
  }, [props.note])

  return < motion.p
    className={noteKey}
    variants={messageVariants}
    animate={controls}
    transition={{ duration: 0.5 }}
  >
    {note}
  </motion.p>
}

class ContactForm extends Component {
  state = {
    formDisabled: false,
    responseMessage: "Send us a message",
    statusNoteKey: "intro",
    name: "",
    mail: "",
    formContent: "",
    namePl: "Your Name",
    mailPl: "Email Address",
    formContentPl: "Message..."
  }

  render() {
    const { formDisabled, responseMessage, statusNoteKey, name, mail, formContent, namePl, mailPl, formContentPl } = this.state

    const visibleForm = formDisabled ? "noShow" : ""

    return (
      <form className="form">

        <FormMessage note={responseMessage} noteKey={statusNoteKey} />

        <div className={`fieldWrap ${visibleForm}`}>
          <fieldset>
            <input placeholder={namePl} type="text" aria-label="Your name" value={name} name="fname" onChange={this.onNameChange} required autoFocus />
          </fieldset>
          <fieldset>
            <input placeholder={mailPl} type="email" aria-label="Your email" value={mail} name="femail" onChange={this.onMailChange} required />
          </fieldset>
          <fieldset>
            <textarea placeholder={formContentPl} value={formContent} aria-label="Your message" name="ftext" onChange={this.onFormContentChange} cols="30" rows="5" required></textarea>
          </fieldset>
          <fieldset>
            <div className="btn disableselect" >
              <motion.button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
                whileTap={{ scaleY: 1.2 }}
                onTapStart={this.onTapStart}
                onTapCancel={this.onTapCancel}
                onTap={this.onTap}
                onClick={this.submitContactForm}
                disabled={formDisabled} >Send</motion.button>
            </div>
          </fieldset>
        </div>
      </form>
    )
  }

  onTap(event, info) {
    //console.log("end", info.point.x, info.point.y)
    event.path[0].classList.remove("active");
  }
  onTapCancel(event, info) {
    //console.log("cancel", info.point.x, event.path[0])
    event.path[0].classList.remove("active");
  }
  onTapStart(event, info) {
    //console.log("start", info.point.x, event.path[0]);
    event.path[0].classList.add("active");
    //event.path[1].style.transform = "scale(2)";
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  onMailChange = (event) => {
    this.setState({ mail: event.target.value })
  }

  onFormContentChange = (event) => {
    this.setState({ formContent: event.target.value })
  }

  submitContactForm = async (event) => {
    event.preventDefault()

    const { name, mail, formContent } = this.state

    const fields = {
      name,
      mail,
      formContent
    }

    const yup = (await import('yup'))

    let schema = yup.object().shape({
      name: yup.string("name").required("name"),
      mail: yup.string("mail").required("mail").email("mail"),
      formContent: yup.string("formContent").required("formContent")
    });

    if (schema.isValidSync(fields)) {
      this.setState({
        formDisabled: true,
        statusNoteKey: "formsent",
        responseMessage: "Thank you. We will get back to you shortly."
      })
      //send data to nodemailer
      const res = await sendContactMail(fields)

      if (res.status >= 300) {
        //console.log(res)
        this.setState({
          responseMessage: "Something went really wrong.",
          statusNoteKey: "servererror",
        })

      }
    } else {
      //show not valid fields information

      this.setState({
        responseMessage: "All fields are required and must be valid.",
        statusNoteKey: "formnotvalid"
      })


    }
  }
}

export default ContactForm