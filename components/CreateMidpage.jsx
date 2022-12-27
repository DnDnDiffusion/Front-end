import React from "react";
import Image from "next/image";

export default function CreateMidpage() {
    return (
        <div>
            {/* Content in the center */}
            <div className="flex md:flex-nowrap flex-wrap bg-[#110402] h-full flex-col m-12 p-8">
                <h1 className="pb-2">Operation Dragonborn</h1>
                <h3>Pabst gochujang PBR&B bushwick ennui pour-over. Hot chicken activated charcoal photo booth selvage chartreuse. Narwhal scenester schlitz craft beer raw denim DIY. 
                    Art party af fam mumblecore ugh selfies hell of. Single-origin coffee kitsch humblebrag ascot hexagon gluten-free cold-pressed prism copper mug.</h3>
            </div>

            {/* Intruction Cards */}
            <div className="flex flex-row mb-10 mr-12 ml-12">
                <div className="flex flex-col justify-center align-center items-center bg-[#110402] mr-7 p-6 w-1/3">
                    <p>Upload standard</p>
                    <p>Character sheet PDF</p>
                    <img src="/images/CREATE-midpage/icon1.png" alt="icon1" className="w-40 h-40 object-contain pt-5" />
                </div>
                <div className="flex flex-col justify-center align-center items-center bg-[#110402] mr-7 p-6 w-1/3">
                    <p>Fine Tuned AI Models and parsing</p>
                    <p>algorithms generate data</p>
                    <img src="/images/CREATE-midpage/icon2.png" alt="icon2" className="w-40 h-40 object-contain pt-5" />
                </div>
                <div className="flex flex-col justify-center align-center items-center bg-[#110402] p-6 w-1/3">
                    <p>Reveive 3, 4 or 9 avatar images</p>
                    <p>based on your character sheet</p>
                    <img src="/images/CREATE-midpage/icon3.png" alt="icon3" className="w-40 h-40 object-contain pt-5" />
                </div>
            </div>

            {/* Explore Button */}
            <div className="flex justify-center">
                <button className="  
                    rounded-full bg-[#0D9488] text-black pr-10 pl-10 pt-2 pb-2
                    border-2 border-black text-2xl">
                EXPLORE</button>
            </div>
            
            {/* Intruction Cards */}
            <div className="flex flex-row mt-8 mr-12 ml-12">
                <div className="flex flex-col justify-center align-center items-center bg-[#110402] mr-7 p-6 w-1/3">
                    <p>Mint an ERC721</p>
                    <p>CNFT Avatar</p>
                    <img src="/images/CREATE-midpage/icon4.png" alt="icon4" className="w-40 h-40 object-contain pt-5" />
                </div>
                <div className="flex flex-col justify-center align-center items-center bg-[#110402] mr-7 p-6 w-1/3">
                    <p>Join the community</p>
                    <img src="/images/CREATE-midpage/icon5.png" alt="icon5" className="w-40 h-40 object-contain pt-5" />
                </div>
                <div className="flex flex-col justify-center align-center items-center bg-[#110402] p-6 w-1/3">
                    <p>Buy interactive</p>
                    <p>dice to get gold</p>
                    <img src="/images/CREATE-midpage/icon6.png" alt="icon6" className="w-40 h-40 object-contain pt-5" />
                </div>
            </div>

            {/* Go Premium Button */}
            <div className="flex justify-center mt-8 mb-8">
                <button className="  
                    rounded-full bg-[#CA8A04] text-black pr-10 pl-10 pt-2 pb-2
                    border-2 border-black text-2xl">
                GO PREMIUM</button>
            </div>
                        
        </div>
    )
}


        
 