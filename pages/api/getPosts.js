import axios from "axios";
export default async function handler(req, res) {
  try {
    const options = {
      method: "GET",
      url: `https://api.beehiiv.com/v2/publications/${process.env.publication_id}/posts`,
      params: { limit: "50" },
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.beehiivapi,
      },
    };

    let response = await axios.request(options);
    let data = response.data;
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
}
