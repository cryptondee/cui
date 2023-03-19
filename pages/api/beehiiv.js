import axios from "axios";
export default function handler(req, res) {
  const email = req.query.email;
  if (!email) {
    return res.status(400).json({ error: "email is required" });
  }

  try {
    const options = {
      method: "POST",
      url: `https://api.beehiiv.com/v2/publications/${process.env.publication_id}/subscriptions`,
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.beehiivapi,
      },
      data: {
        publication_id: process.env.publication_id,
        email: email,
        reactivate_existing: false,
        send_welcome_email: false,
        utm_source: "Website",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    res.status(200).json({ message: `subscribed ${email} to newsletter` });
  } catch (error) {
    console.log(error);
  }
}
