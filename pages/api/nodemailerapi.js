import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

export default async (req, res) => {
  const { senderMail, name, message } = req.body

  // Check if fields are all filled
  if (senderMail === "" || name === "" || message === "") {
    res.status(403).send("")
    return
  }

  const messageBody = `${name} ${senderMail} ${message}`;

  const mailerRes = await mailer(messageBody)
  res.send(mailerRes)

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