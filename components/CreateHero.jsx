import React from "react"
import Image from "next/image"
import Link from "next/link"
// import Navbar from "./Navbar";
import hero1 from "../public/images/CREATE-hero/samplepic1.png"
import hero2 from "../public/images/CREATE-hero/samplepic2.png"
import hero3 from "../public/images/CREATE-hero/samplepic3.png"
import Trynow from "./Trynow"

export default function CreateHero() {
  return (
    <div>
      {/* Navbar */}
      {/* <Navbar /> */}
      <div className="pt-16 mt-10">
        {/* Hero Images */}
        <div className="flex justify-center">
          <div className="mx-3 relative z-0">
            {/* <a href="#create"> */}
            <Image src={hero1} alt="samplepic1" className="object-fit: cover w-full h-full" />
            {/* </a> */}
          </div>
          <div className="mx-3 relative z-0">
            {/* <a href="#create"> */}
            <Image src={hero2} alt="samplepic2" className="object-fit: cover w-full h-full" />
            {/* </a> */}
          </div>
          <div className="mx-3 relative z-0">
            {/* <a href="#create"> */}
            <Image src={hero3} alt="samplepic3" className="object-fit: cover w-full h-full" />
            {/* </a> */}
          </div>
        </div>

        <Trynow />
      </div>
    </div>
  )
}
