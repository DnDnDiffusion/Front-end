import React from "react";
import { useEffect } from "react";

export const CreateImageGrid = ({ imageProcessing, imageResult }) => {
  useEffect(() => {
    if (imageProcessing) console.log("imageProcessing: ", imageProcessing);
    console.log("imageProcessing: ", imageProcessing);
    console.log("imageResult: ", imageResult);
  }, [imageProcessing, imageResult]);

  if (imageProcessing) return <div>Processing images...SHOW TIPS</div>;
  if (imageResult)
    return (
      <div>
        Image result: <img src={imageResult} alt="" />
      </div>
    );
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="">
        <img src="/images/CREATE/placeholder.png" alt="" />
      </div>
      <div className="">
        <img src="/images/CREATE/placeholder.png" alt="" />
      </div>
      <div className="">
        <img src="/images/CREATE/placeholder.png" alt="" />
      </div>
      <div className="">
        <img src="/images/CREATE/placeholder.png" alt="" />
      </div>
      <div className="">
        <img src="/images/CREATE/placeholder.png" alt="" />
      </div>
      <div className="">
        <img src="/images/CREATE/placeholder.png" alt="" />
      </div>
      <div className="">
        <img src="/images/CREATE/placeholder.png" alt="" />
      </div>
      <div className="">
        <img src="/images/CREATE/placeholder.png" alt="" />
      </div>
      <div className="">
        <img src="/images/CREATE/placeholder.png" alt="" />
      </div>
    </div>
  );
};
