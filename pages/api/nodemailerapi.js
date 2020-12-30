import nodemailer from "nodemailer"
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string("name").required("name"),
  mail: yup.string("mail").required("mail").email("mail"),
  formContent: yup.string("formContent").required("formContent")
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

export default async (req, res) => {

  const { name, mail, formContent } = req.body
  const fields = { name, mail, formContent }
  // Check if fields are all filled 
  //check for undefined
  if (schema.isValidSync(fields)) {
    const messageBody = `${name} ${mail} ${formContent}`;

    const mailerRes = await mailer(messageBody)
    res.send(mailerRes)
  } else {
    res.status(403).send("")
    return
  }

}

const mailer = (messageBody) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: 'Contact Form Submit',
    text: messageBody
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })

}