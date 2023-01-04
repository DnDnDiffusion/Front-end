import React from "react";
import Image from "next/image";
import Link from "next/link";
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
      <Link href="#create">
        <div className="flex mx-7 my-1.5">
          <div className="mx-3 relative z-0">
            <Image src={hero1} alt="samplepic1" className="w-full h-full" />
          </div>
          <div className="mr-3 relative z-0">
            <Image src={hero2} alt="samplepic2" className="w-full h-full" />
          </div>
          {/* make a button that is fixed in position until the browser scrolls to the #create section */}
          <button
            href="#create"
            onClick={(e) => (e.target.className = "hidden")}
            className="
                        fixed bottom-20 right-40 left-40 z-10
                        rounded-full bg-[#EF4444] text-black font-bold p-4
                        border-2 border-black text-2xl hover:bg-[#F87171] hover:text-white transition-all duration-500"
          >
            TRY NOW
          </button>
          <div className="mr-3 relative z-0">
            <Image src={hero3} alt="samplepic3" className="w-full h-full" />
          </div>
        </div>
      </Link>
    </div>
  );
}
