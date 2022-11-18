// import Head from "next/head";
// import Image from "next/image";
import { useState } from "react";
import { avatarNFTSTORAGE } from "../utils/web3utils";
import elfImage from "../public/elf-3600557344.png";

export default function Home() {
  const [data, setData] = useState({
    race: "",
    class: "",
  });
  const [imageProcessing, setImageProcessing] = useState(false); //processing state ie. loading...
  const [error, setError] = useState(null); //error msg
  const [imageResult, setImageResult] = useState(null); //url

  const setValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const send = async () => {
    setImageProcessing(true);
    console.log("data: ", data);
    //send req to backend with data to get the goods
    let result = await fetch("/api/getImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        data: data,
      }),
    }); //result is given as a URL in S3 bucket or smth
    result = await result.json();
    if (result.error) setError(result.error);
    console.log("result from image processing", result);
    setImageResult(result);
    setImageProcessing(false);
  };

  const storeImage = async () => {
    avatarNFTSTORAGE(elfImage);
  };

  return (
    <div>
      <h1>The Thing:</h1>
      {/* input takes in text for now, but eventually allows a .pdf upload */}
      {/* <form method="post"> */}
      <input
        onChange={(e) => setValue(e)}
        type="text"
        name="race"
        placeholder="Enter your race"
      />
      <input
        onChange={(e) => setValue(e)}
        type="text"
        name="class"
        placeholder="Enter your class"
      />
      <button onClick={send} type="submit" name="submit">
        {imageProcessing ? "Waiting for image..." : "Send"}
      </button>

      {imageResult && (
        <>
          <img src={imageResult.imageUrl} alt={"its your image!"} />
          <div onClick={storeImage}>NFT.Storage</div>
        </>
      )}
    </div>
  );
}
