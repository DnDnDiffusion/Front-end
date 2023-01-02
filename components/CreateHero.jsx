import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import hero1 from "../public/images/CREATE-hero/samplepic1.png";
import hero2 from "../public/images/CREATE-hero/samplepic2.png";
import hero3 from "../public/images/CREATE-hero/samplepic3.png";

export default function CreateHero() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Images */}
      <div className="flex mx-7 my-1.5">
        <div className="mx-3 relative">
          <Image src={hero1} alt="samplepic1" className="w-full h-full" />
        </div>
        <div className="mr-3 relative">
          <Image src={hero2} alt="samplepic2" className="w-full h-full" />
          <button
            className="
                        absolute bottom-20 right-40 left-40 mr-2 mb-2
                        rounded-full bg-[#EF4444] text-black font-bold py-4 px-4
                        border-2 border-black text-2xl"
          >
            TRY NOW
          </button>
        </div>
        <div className="mr-3 relative">
          <Image src={hero3} alt="samplepic3" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
