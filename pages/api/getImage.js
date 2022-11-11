export default function handler(req, res) {
  console.log("req", req.body.data); //this is your pdf to get sent
  //fetch data via get request to SlyRacoon's GPU run pod (see endpoint documentation)

  //programmatically pass data

  res.status(200).json({
    imageUrl:
      "https://dwrcsi0lsmew9.cloudfront.net/ifnf_0x7a1a0cc98a5c20310b0cc4706f308346a152607e_7__width_750.png",
  });
}
