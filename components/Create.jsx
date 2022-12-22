import React from "react";
import { useEffect, useState } from "react";
import { createPrompt } from "../utils/promptGen";
import { CreateImageGrid } from "./CreateImageGrid";
import PDFParser from "./PDFParser";

export const Create = () => {
  const [pdfData, setPdfData] = useState(null); //url
  const [prompt, setPrompt] = useState(null); //url
  const [imageProcessing, setImageProcessing] = useState(false); //processing state ie. loading...
  const [error, setError] = useState(null); //error msg
  const [imageResult, setImageResult] = useState(null); //url
  const [isMinting, setIsMinting] = useState(false); //minting nft state ie. loading...

  //states: no data, pdf uploaded, images generated, nft minted

  useEffect(() => {
    if (pdfData) {
      console.log("pdfData: ", pdfData);
      //create text prompt using pdfData and other data
      const prompt = createPrompt(pdfData);
      console.log("prompt: ", prompt);
      setPrompt(prompt);
    }
  }, [pdfData]);

  const mintAvatar = async () => {
    setIsMinting(true);
    console.log("Minting avatar...");
    // upload image to ipfs
    //create standard metadata object
    //add cid to metadata object
    //upload metadata to ipfs
    //mint nft
  };

  const generateImages = async () => {
    console.log("Generating images...");
    setImageProcessing(true);
    const fetchResult = await fetch("/api/getImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        data: prompt,
      }),
    }); //result is given as base64 encoded images
    result = await fetchResult.json();
    if (result.error) setError(result.error);
    setImageResult(result);
    setImageProcessing(false);
  };

  return (
    <div className="flex w-full gap-2 justify-start items-start">
      {/* left column */}
      <div className="flex flex-col w-2/5 p-4 gap-4 justify-around">
        <div className="w-full h-full text-left">
          <h2 className=" text-4xl">Create</h2>
        </div>
        <PDFParser setPdfData={setPdfData} />
        <div className="bg-[#110402] text-left text-sm min-h-[150px] p-2">
          <h3>Character Stats:</h3>
          <p className="w-full">{JSON.stringify(pdfData)}</p>
        </div>
        <div className="bg-[#110402] text-left text-sm min-h-[150px] p-2">
          <h3>Prompt:</h3>
          <p className="">{prompt}</p>
        </div>
      </div>

      {/* right column */}
      <div className="flex w-3/5 bg-[#110402] text-left h-full">
        {/* choosing column */}
        <div className="w-1/3 p-2">
          <div className="">
            <h2 className="text-2xl">Result Images</h2>
            <p>Press "upload" to begin generating your avatar.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col">
              <img src="/images/CREATE/placeholder.png" alt="" />
              <p className="text-sm italic">Click to enlarge</p>
            </div>
            {isMinting ? (
              <p className="w-fit bg-[#D89A00] hover:bg-[#ab8933] py-1 px-6 rounded-full text-black">Minting...</p>
            ) : imageResult ? (
              <p
                className="w-fit bg-[#D89A00] hover:bg-[#ab8933] py-1 px-6 rounded-full text-black"
                onClick={mintAvatar}
              >
                Mint Avatar
              </p>
            ) : imageProcessing ? (
              <p
                className="w-fit bg-[#D89A00] hover:bg-[#ab8933] py-1 px-6 rounded-full text-black"
                // onClick={mintAvatar}
              >
                images loading...
              </p>
            ) : pdfData ? (
              <p
                className="w-fit bg-[#D89A00] hover:bg-[#ab8933] py-1 px-6 rounded-full text-black"
                onClick={generateImages}
              >
                Generate Images
              </p>
            ) : (
              <p className="w-fit bg-[#D89A00] hover:bg-[#ab8933] py-1 px-6 rounded-full text-black">Upload</p>
            )}
          </div>
        </div>

        {/* images grid */}
        <div className="w-2/3">
          {/* a grid of 9 images */}
          <CreateImageGrid imageResult={imageResult} imageProcessing={imageProcessing} />
        </div>
      </div>

      {/* bottom box */}
      <div></div>
    </div>
  );
};
