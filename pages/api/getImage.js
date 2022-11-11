export default function handler(req, res) {
  console.log("req", req.body.data);

  res.status(200).json({
    imageUrl:
      "https://dwrcsi0lsmew9.cloudfront.net/ifnf_0x7a1a0cc98a5c20310b0cc4706f308346a152607e_7__width_750.png",
  });
}

//programmatically pass data
