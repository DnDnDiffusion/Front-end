import React, { useState } from "react";

export default function PDFParser() {
  const [pdf, setPdf] = useState();
  const [pdfData, setPdfData] = useState();

  const handlePDFChange = (e) => {
    // console.log(e.target);
    if (!e.target.files) return;
    const file = e.target.files[0];
    // console.log("file: ", file);
    setPdf(file);
  };

  const handleUpload = async () => {
    // console.log("pdf: ", pdf);
    const body = new FormData();
    // body.append("file", pdf);
    body.set("file", pdf);
    // console.log("body: ", body.get("file"));

    const res = await fetch("/api/PDFParser", {
      method: "POST",
      // "content-type": "multipart/form-data",
      body: body,
    });
    const data = await res.json();
    console.log("data: ", data);
    setPdfData(data);
  };

  return (
    <div className="flex items-center gap-4 flex-col">
      <div className="flex flex-col w-fit gap-2">
        <input onChange={handlePDFChange} type="file" className="border-2 rounded-lg p-4 bg-yellow-500 bg-opacity-50" />
        <button className=" bg-emerald-800 text-emerald-200 p-4 rounded-lg" onClick={handleUpload}>
          Upload PDF
        </button>
      </div>
      <div className="flex gap-2 flex-wrap justify-center items-center max-w-xl h-28">
        {
          //if pdfData exists, loop through object and display key and value
          pdfData &&
            Object.entries(pdfData).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className=" bg-violet-800 bg-opacity-50 border-2 rounded-lg p-6 h-full flex flex-col justify-center items-center"
                >
                  <p>{key}</p>
                  <p>{value}</p>
                </div>
              );
            })
        }
      </div>
    </div>
  );
}
