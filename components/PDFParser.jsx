import React, { useState } from "react";

export default function PDFParser({ setPdfData }) {
  const [pdf, setPdf] = useState();

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
    // console.log("raw res parse dpf: ", res);
    const data = await res.json();
    // console.log("data: ", data);
    setPdfData(data);
  };

  return (
    <div className="flex flex-col w-fit gap-4">
      <input onChange={handlePDFChange} type="file" className="" />
      <button
        className="w-fit bg-[#D89A00] hover:bg-[#ab8933] py-1 px-6 rounded-full text-black"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
}
