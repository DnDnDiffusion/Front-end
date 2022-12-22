import Image from "next/image";
import React from "react";
import { useEffect } from "react";

export const CreateImageGrid = ({ imageProcessing, imageResult }) => {
  useEffect(() => {
    if (imageProcessing) console.log("imageProcessing: ", imageProcessing);
    // console.log("imageProcessing: ", imageProcessing);
    // console.log("imageResult: ", imageResult);
  }, [imageProcessing, imageResult]);

  if (imageProcessing)
    return (
      <div className="flex justify-center items-center">
        <Image
          src="https://media.tenor.com/43s33wGTNo0AAAAC/sweating-nervous.gif"
          alt="sweating-nervous"
          width={256}
          height={256}
        />
      </div>
    );
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
