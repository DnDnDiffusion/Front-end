import axios from "axios";

export default  function handler(req, res) {
  console.log("req", req.body.data); //this is your pdf to get sent
  //fetch data via get request to SlyRacoon's GPU run pod (see endpoint documentation)

  //programmatically pass data
  // upload to nft.storage

  let data = JSON.stringify({
    "prompt": "Elf in a forest",
    "steps": 50,
    "sampler_index": "DDIM"
  });
  
  let config = {
    method: 'post',
    url: 'http://127.0.0.1:7860/sdapi/v1/txt2img',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
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
}
