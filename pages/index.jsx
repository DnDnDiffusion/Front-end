// import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { avatarNFTSTORAGE } from "../utils/web3utils";
import elfImage from "../public/elf-3600557344.png";
import PDFParser from "../components/PDFParser";
// import { createPrompt } from "../utils/promptGen";
import { Create } from "../components/Create";

export default function Home() {
  const [data, setData] = useState({
    race: "",
    class: "",
  });
  const [imageProcessing, setImageProcessing] = useState(false); //processing state ie. loading...
  const [error, setError] = useState(null); //error msg
  const [imageResult, setImageResult] = useState(null); //url
  const [nftStorageProcessing, setNftStorageProcessing] = useState(false); //processing state ie. loading...
  const [CID, setCID] = useState(null); //url
  // const [pdfData, setPdfData] = useState(null); //url
  // const [prompt, setPrompt] = useState(null); //url

  const setValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   if (pdfData) {
  //     console.log("pdfData: ", pdfData);
  //     //create text prompt using pdfData and other data
  //     const prompt = createPrompt(pdfData);
  //     console.log("prompt: ", prompt);
  //     setPrompt(prompt);
  //   }
  // }, [pdfData]);

  // const send = async () => {
  //   setImageProcessing(true);
  //   console.log("data: ", data);
  //   //send req to backend with data to get the goods
  //   let result = await fetch("/api/getImage", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       data: data,
  //     }),
  //   }); //result is given as a URL in S3 bucket or smth
  //   result = await result.json();
  //   if (result.error) setError(result.error);
  //   console.log("result from image processing", result);
  //   setImageResult(result);
  //   setImageProcessing(false);
  // };
  const send = async () => {
    setImageProcessing(true);
  };

  const toggleImageProcessing = async () => {
    setImageProcessing(false);
  };
  useEffect(() => {
    if (imageProcessing) {
      console.log(imageProcessing);
      setTimeout(toggleImageProcessing, 3000);
    }
  }, [imageProcessing]);

  const storeImage = async () => {
    setNftStorageProcessing(true);
    const cid = await avatarNFTSTORAGE(imageResult.imageUrl);
    setNftStorageProcessing(false);
    setCID(cid);
  };

  return (
    <div id="bodytype">
      <h1>D&D Diffusio</h1>
      {/* input takes in text for now, but eventually allows a .pdf upload */}
      {/* <form method="post"> */}
      <div id="inputs">
        <input onChange={(e) => setValue(e)} type="text" name="race" placeholder="Enter your race" />
        <input onChange={(e) => setValue(e)} type="text" name="class" placeholder="Enter your class" />
        <select id="gender" name="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
        </select>

        <button onClick={send} type="submit" name="submit">
          {imageProcessing ? "Waiting for image..." : "Send"}
        </button>
      </div>
      <br></br>
      <div id="imagegeneration">
        <Image
          src="https://media.tenor.com/43s33wGTNo0AAAAC/sweating-nervous.gif"
          alt="sweating-nervous"
          width={256}
          height={256}
        />
        {imageProcessing ? (
          <Image
            src="https://media.tenor.com/43s33wGTNo0AAAAC/sweating-nervous.gif"
            alt="sweating-nervous"
            width={256}
            height={256}
          />
        ) : (
          "image not loading"
        )}
        {imageResult && (
          <>
            <div class="div-child">
              <Image src={imageResult.imageUrl} alt={"its your image!"} />
            </div>
            <div class="div-child">
              {nftStorageProcessing ? (
                <p>Waiting for NFT Storage...</p>
              ) : (
                <button onClick={storeImage}>Store Image</button>
              )}
            </div>
          </>
        )}
      </div>
      {CID && <p>Image stored at CID: {CID}</p>}
      <div id="inputs">
        <button type="button">Enhance!</button>
        <button type="button">Save as NFT</button>
      </div>

      <hr className="p-8" />
      <div className="flex flex-col items-center">
        {/* {prompt && (
          <p className=" max-w-4xl text-sm p-4">
            <span className=" font-bold text-lg">PROMPT:</span> {prompt}
          </p>
        )} */}
        {/* <PDFParser setPdfData={setPdfData} pdfData={pdfData} /> */}
        <Create />
      </div>
    </div>
  );
}
