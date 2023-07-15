import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    console.log(req.body);
    await sgMail.send({
      to: "ndw@castlecapital.vc", // Your email where you'll receive emails
      from: `${req.body.email}`, // your website email address here
      subject: `[CC - website Contact Form] - ${req.body.firstName} ${req.body.lastName} `,
      html: `
      <div> 
      First Name: ${req.body.firstName} <br>
      Last  Name: ${req.body.lastName} <br>
      Email     : ${req.body.email}<br>
      ------------<br>
      Message: <br>
        ${req.body.message}
      </div>
      `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
