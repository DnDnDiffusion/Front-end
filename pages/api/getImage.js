import axios from "axios";

export default function handler(req, res) {
  console.log("req", req.body.data); //this is your pdf to get sent
  const { data } = req.body;

  const stringData = JSON.stringify({ data: [data] });
  console.log("data being sent", stringData);

  let config = {
    method: "post",
    url: process.env.SD_API_ENDPOINT,
    headers: {
      "Content-Type": "application/json",
    },
    data: stringData,
  };

  axios(config)
    .then(function (response) {
      // console.log("RESPONSE DATA", response.data.data[0]);
      res.status(200).json(response.data.data[0]);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json({
        error: "Error generating image, try again or something, sheesh.",
      });
    });

  // res.status(200).json({
  //   imageUrl: "data:image/png;base64," + "test",
  // });
}

export const config = {
  api: {
    bodyParser: true,
  },
};
