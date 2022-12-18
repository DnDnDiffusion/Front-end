import React, { useState } from "react";

export default function PDFParser({ pdfData, setPdfData }) {
  const [pdf, setPdf] = useState();
  // const [pdfData, setPdfData] = useState(); //can get pdfdata state from parent component instead of initializing here

  const handlePDFChange = (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setPdf(file);
  };

  const handleUpload = async () => {
    const body = new FormData();
    body.set("file", pdf);

    const res = await fetch("/api/PDFParser", {
      method: "POST",
      body: body,
    });
    const data = await res.json();
    // console.log("data: ", data);
    setPdfData(data);

    //make the getImageRquest here and set the image state or maybe use this as a callback from parent to use a diff component for image upload to cloud gpu
  };

  return (
    <div className="flex items-center gap-4 flex-col bg-black">
      <div className="flex flex-col w-fit gap-2">
        <input onChange={handlePDFChange} type="file" className="border-2 rounded-lg p-4 bg-yellow-500 bg-opacity-50" />
        <button className=" bg-emerald-800 text-emerald-200 p-4 rounded-lg" onClick={handleUpload}>
          Upload PDF
        </button>
      </div>
      <div className="flex gap-2 flex-wrap justify-center items-center max-w-4xl h-28">
        {
          //if pdfData exists, loop through object and display key and value
          pdfData &&
            Object.entries(pdfData).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className=" bg-violet-800 bg-opacity-50 border-2 rounded-lg p-6 h-full flex flex-col justify-center items-center min-w-[200px]"
                >
                  <p>{key}</p>
                  <p>{value instanceof Array ? `${value[0]} : ${value[1]}` : value}</p>
                </div>
              );
            })
        }
      </div>
    </div>
  );
}
