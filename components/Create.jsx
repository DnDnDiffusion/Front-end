import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { createPrompt, getSmartPrompt } from "../utils/promptGen";
import { CreateImageGrid } from "./CreateImageGrid";
import PDFParser from "./PDFParser";

export const Create = () => {
  const [pdfData, setPdfData] = useState(null); //url
  const [prompt, setPrompt] = useState(null); //url
  const [imageProcessing, setImageProcessing] = useState(false); //processing state ie. loading...
  const [error, setError] = useState(null); //error msg
  const [imageResult, setImageResult] = useState(null); //url
  const [isMinting, setIsMinting] = useState(false); //minting nft state ie. loading...
  const [apiOutput, setApiOutput] = useState("");
  const [isGPT, setIsGPT] = useState(false);

  const callGPTEndpoint = async () => {
    setIsGPT(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGPT(false);
  };

  //states: no data, pdf uploaded, images generated, nft minted

  useEffect(() => {
    if (pdfData) {
      console.log("pdfData: ", pdfData);
      //create text prompt using pdfData and other data
      const prompt = createPrompt(pdfData);
      console.log("prompt: ", prompt);
      setPrompt(prompt);
      setError(null);
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
    const result = await fetchResult.json();
    console.log("result: ", result);

    setImageProcessing(false);
    if (result.error) {
      return setError(result.error);
    }
    setImageResult(result);
  };

  return (
    <div>
      <div className="flex flex-wrap xl:flex-nowrap w-screen gap-2 justify-start items-start">
        {/* left column */}
        <div className="flex flex-col xl:w-2/5 w-full p-4 gap-4 justify-around">
          <div className="w-full h-full text-left">
            <h2 className=" text-4xl">Create</h2>
          </div>
          <PDFParser
            setPdfData={setPdfData}
            pdfData={pdfData}
            setError={setError}
          />
          <div className="bg-[#110402] text-left text-sm min-h-[150px] p-2">
            <h3>Character Stats:</h3>
            <p className="w-full break-words">{JSON.stringify(pdfData)}</p>
          </div>
          <div className="bg-[#110402] text-left text-sm min-h-[150px] p-2 h-full">
            <h3>
              Prompt:
              <button
                onClick={() => callGPTEndpoint()}
                // onClick={() => getSmartPrompt(prompt)}
                className="p-1 underline hover:bg-violet-600"
              >
                {isGPT ? "Communicating with OpenAI..." : "Activate GPT"}
              </button>
            </h3>
            <textarea
              placeholder="start typing your prompt here..."
              id="promptarea"
              onChange={(e) => setPrompt(e.target.value)}
              className="prompty w-full h-full bg-transparent"
              value={prompt || ""}
            />
            {apiOutput && (
              <div className="output">
                <div className="output-header-container">
                  <div className="output-header">
                    <h3>Output</h3>
                  </div>
                </div>
                <div className="output-content">
                  <p>{apiOutput}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* right column */}
        <div className="flex md:flex-nowrap flex-wrap xl:w-3/5 lg:w-full bg-[#110402] text-left h-full">
          {/* choosing column */}
          <div className="md:w-1/3 p-2">
            <div className="">
              <h2 className="text-2xl">Result Images</h2>
              <p>
                Press <span className=" italic">upload</span> to begin
                generating your avatar.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex flex-col">
                <img src="/images/CREATE/placeholder.png" alt="" />
                <p className="text-sm italic">Click to enlarge</p>
              </div>
              {isMinting ? (
                <p className="w-fit bg-[#D89A00] hover:bg-[#ab8933] py-1 px-6 rounded-full text-black cursor-not-allowed">
                  Minting...
                </p>
              ) : imageResult ? (
                <p
                  className="w-fit bg-[#D89A00] hover:bg-[#ab8933] py-1 px-6 rounded-full text-black cursor-pointer animate-pulse"
                  onClick={mintAvatar}
                >
                  Mint Avatar
                </p>
              ) : imageProcessing ? (
                <p className="w-fit bg-[#D89A00] hover:bg-[#ab8933] py-1 px-6 rounded-full text-black cursor-not-allowed">
                  images loading...
                </p>
              ) : pdfData ? (
                <p
                  className="w-fit bg-emerald-600 hover:bg-emerald-500 py-1 px-6 rounded-full text-black cursor-pointer animate-pulse"
                  onClick={generateImages}
                >
                  Generate Images
                </p>
              ) : (
                <p className="w-fit bg-[#D89A00] hover:bg-[#ab8933] py-1 px-6 rounded-full text-black cursor-not-allowed">
                  Upload first!
                </p>
              )}
            </div>
          </div>

          {/* images grid */}
          <div className="md:w-2/3 min-h-[660px]">
            {/* a grid of 9 images */}
            <CreateImageGrid
              imageResult={imageResult}
              imageProcessing={imageProcessing}
              error={error}
              pdfData={pdfData}
            />
          </div>
        </div>
      </div>
      {/* bottom box */}
      <div></div>
    </div>
  );
};
