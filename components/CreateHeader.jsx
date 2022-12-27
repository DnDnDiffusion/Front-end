import React from "react";
import Image from "next/image";

export default function CreateHeader() {
    return (
        <header>
            {/* Navbar */}
            <nav className="flex justify-start p-6">
                <img src="/images/CREATE-header/logo.png" alt="logo" width="100px" className="object-contain"></img>
                <ul className="flex text-center p-9">
                    <li className="text-yellow-500 mx-3"><a href="#create">CREATE</a></li>
                    <li className="mx-7"><a href="#explore">EXPLORE</a></li>
                    <li className="mx-7"><a href="#gmdice">GM DICE</a></li>
                    <li className="mx-7"><a href="#about">ABOUT</a></li>
                    <li className="mx-7"><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>

            {/* Cover Images */}
            <div className="flex mx-7 my-1.5">
                <img src="/images/CREATE-header/samplepic1.png" alt="samplepic1" className="w-1/3 mr-3"></img>
                <div className="mr-3 relative">
                    <img src="/images/HEADER/samplepic2.png" alt="samplepic2" className="w-full h-full"></img>
                    <button className="
                        absolute bottom-20 right-40 left-40 mr-2 mb-2
                        rounded-full bg-[#EF4444] text-black font-bold py-4 px-4
                        border-2 border-black text-2xl">
                        TRY NOW</button>
                </div>
                <img src="/images/CREATE-header/samplepic3.png" alt="samplepic3" className="w-1/3"></img>
            </div>
        </header>
    )
}