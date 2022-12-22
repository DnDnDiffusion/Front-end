import axios from "axios";

export default function handler(req, res) {
  console.log("req", req.body.data); //this is your pdf to get sent
  const { data } = req.body;

  const stringData = JSON.stringify({ data: [data] });
  console.log("data being sent", stringData);

  let config = {
    method: "post",
    url: "https://f567fe8f-ca76-4c39.gradio.live/run/predict",
    headers: {
      "Content-Type": "application/json",
    },
    data: stringData,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.status(200).json({
        imageUrl: "data:image/png;base64," + response.data["images"][0],
      });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json({
        error: "Error generating image",
      });
    });

  // res.status(200).json({
  //   imageUrl: "data:image/png;base64," + "test",
  // });
}
