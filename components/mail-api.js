import axios from "axios"

export const sendContactMail = async (fields) => {

  const data = fields;

  //console.log(fields);

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