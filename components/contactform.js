import { Component } from "react"
import { sendContactMail } from "../components/mail-api"

class ContactForm extends Component {
  state = {
    formButtonDisabled: false,
    responseMessage: "Get in touch:",
    name: "",
    mail: "",
    formContent: ""
  }

  render() {
    const { formButtonDisabled, responseMessage, name, mail, formContent } = this.state

    const btnClass = formButtonDisabled ? "disabled" : ""

    return (
      <form>
        <p>{responseMessage}</p>
        <fieldset>
          <input placeholder="Your name" type="text" tabIndex="1" value={name} name="fname" onChange={this.onNameChange} required autoFocus />
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="email" tabIndex="2" value={mail} name="femail" onChange={this.onMailChange} required />
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your Message Here...." tabIndex="3" value={formContent} name="ftext" onChange={this.onFormContentChange} required></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" className={btnClass}
            onClick={this.submitContactForm}
            disabled={formButtonDisabled} >Submit</button>
        </fieldset>
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

    console.log(formContent)

    const res = await sendContactMail(name, mail, formContent)

    if (res.status < 300) {
      this.setState({
        formButtonDisabled: true,
        responseMessage: "Thanks for your message. We will get back to you shortly."
      })

    } else {
      //console.log(res)
      this.setState({ responseMessage: "Please fill out all fields." })
    }

  }
}

export default ContactForm