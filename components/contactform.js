import { Component } from "react"
import { sendContactMail } from "../components/mail-api"
import styles from '../styles/form.module.css'
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string("name").required("name"),
  mail: yup.string("mail").required("mail").email("mail"),
  formContent: yup.string("formContent").required("formContent")
});
/*
let schemaOptions = {
  strict: false,
  abortEarly: false
}
*/
class ContactForm extends Component {
  state = {
    formButtonDisabled: false,
    responseMessage: "",
    name: "",
    mail: "",
    formContent: "",
    namePl: "Your Name",
    mailPl: "Email Address",
    formContentPl: "Message..."
  }

  render() {
    const { formButtonDisabled, responseMessage, name, mail, formContent, namePl, mailPl, formContentPl } = this.state

    const btnClass = formButtonDisabled ? styles.disabled : ""

    return (
      <form className={styles.form}>
        <p>{responseMessage}</p>
        <div className={styles.fieldWrap}>
          <fieldset>
            <input placeholder={namePl} type="text" tabIndex="1" value={name} name="fname" onChange={this.onNameChange} required autoFocus />
          </fieldset>
          <fieldset>
            <input placeholder={mailPl} type="email" tabIndex="2" value={mail} name="femail" onChange={this.onMailChange} required />
          </fieldset>
          <fieldset>
            <textarea placeholder={formContentPl} tabIndex="3" value={formContent} name="ftext" onChange={this.onFormContentChange} cols="30" rows="5" required></textarea>
          </fieldset>
          <fieldset>
            <div className={styles.btn}>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" className={btnClass}
                onClick={this.submitContactForm}
                disabled={formButtonDisabled} >Submit</button>
            </div>
          </fieldset>
        </div>
      </form>
    )
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

    console.log("isValidSync", schema.isValidSync(fields));

    if (schema.isValidSync(fields)) {
      //send data to nodemailer
      const res = await sendContactMail(fields)

      if (res.status < 300) {
        this.setState({
          formButtonDisabled: true,
          responseMessage: "Message was sent. We will get back to you shortly."
        })

      } else {
        //console.log(res)
        this.setState({ responseMessage: "Something went really wrong." })
      }
    } else {
      //show not valid fields information

      this.setState({ responseMessage: "All fields are required and must be valid." })

      /*
      schema.validate(fields, schemaOptions).catch(function (err) {
        console.log("ERRORS", err.errors);
        console.log("VALUE", err.value);
        console.log("PATH", err.path);
      });
      */
    }
  }
}

export default ContactForm