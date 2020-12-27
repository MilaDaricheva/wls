import axios from "axios"

export const sendContactMail = async (name, senderMail, message) => {
  const data = {
    name,
    senderMail,
    message
  }

  console.log(data.message);

  try {
    const res = await axios({
      method: "post",
      url: "/api/nodemailerapi",
      headers: {
        "Content-Type": "application/json"
      },
      data
    })
    return res

  } catch (error) {
    return error
  }
}