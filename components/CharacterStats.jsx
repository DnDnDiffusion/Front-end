import React from "react";
import { useEffect, useState } from "react";

const CharacterStats = (pdfData) => {
    const [race, setRace] = useState();
    const [level, setLevel] = useState();
    const [armor, setArmor] = useState();
    const [background, setBackground] = useState();
    const [alignment, setAlignment] = useState();
    const [feature, setFeature] = useState();


    useEffect(() => {
        if (pdfData.pdfData == null) {
            console.log("pdf NOT available")
            console.log(pdfData)
        } else {
            setRace(pdfData.pdfData.race)
            setLevel(pdfData.pdfData.class)
            setArmor(pdfData.pdfData.armorWorn)
            setBackground(pdfData.pdfData.background)
            setAlignment(pdfData.pdfData.alignment)
            setFeature(pdfData.pdfData.feature)
        }
    });

    return (
        <>
            {pdfData.pdfData ? (
                <>
                    <div>
                        <div className="stats text-white h-[600px] w-[500px] pt-20">
                            <h3>Your Stats</h3>

                            <h4 className="text-center">From your Character Sheet</h4>

                            <p className="mx-[48px] mb-2 mt-6">ON</p>
                            <div>
                                <div className="flex items-center mx-[48px] mt-2 mb-6">
                                    <input type="checkbox" checked="checked" className="checkbox-stats"></input>
                                    <p className="mx-4">RACE: Dragonborn (LOCKED)</p>
                                </div>
                                <div className="flex items-center mx-[48px] mt-2 mb-6">
                                    <input type="checkbox" className="checkbox-stats"></input>
                                    <p className="mx-4">CLASS: </p>
                                    <textarea placeholder={level} className="bg-transparent resize-none h-6"></textarea>
                                </div>
                                <div className="flex items-center mx-[48px] mt-2 mb-6">
                                    <input type="checkbox" className="checkbox-stats"></input>
                                    <p className="mx-4">ARMOR: </p>
                                    <textarea placeholder={armor} className="bg-transparent resize-none h-6 overflow-hidden"></textarea>
                                </div>
                                <div className="flex items-center mx-[48px] mt-2 mb-6">
                                    <input type="checkbox" className="checkbox-stats"></input>
                                    <p className="mx-4">BACKGROUND: </p>
                                    <textarea placeholder={background} className="bg-transparent resize-none h-6"></textarea>
                                </div>
                                <div className="flex items-center mx-[48px] mt-2 mb-6">
                                    <input type="checkbox" className="checkbox-stats"></input>
                                    <p className="mx-4">ALIGNMENT: </p>
                                    <textarea placeholder={alignment} className="bg-transparent resize-none h-6"></textarea>
                                </div>
                                <div className="flex items-center ml-[48px] mt-2 mb-6">
                                    <input type="checkbox" className="checkbox-stats"></input>
                                    <p className="mx-4">FEATURE: </p>
                                    <textarea placeholder={feature} className="bg-transparent resize-none h-6 overflow-hidden"></textarea>
                                </div>
                                <div className="flex items-center mx-[48px] mt-2 mb-6">
                                    <input type="checkbox" className="checkbox-stats"></input>
                                    <p className="mx-4">GENDER : </p>
                                    <textarea placeholder="Gender" className="bg-transparent resize-none h-6"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="stats text-white h-[600px] w-[500px] pt-20">
                    <h1 className="text-2xl">Upload a Character Sheet to See Stats</h1>
                    <div>
                        <p className="mx-[48px] mb-2 mt-6">ON</p>
                        <div className="flex items-center mx-[48px] mt-2 mb-6">
                            <input type="checkbox" className="checkbox-stats"></input>
                            <p className="mx-4">RACE: Dragonborn (LOCKED)</p>
                        </div>
                        <div className="flex items-center mx-[48px] my-6">
                            <input type="checkbox" className="checkbox-stats"></input>
                            <p className="mx-4">CLASS: </p>
                        </div>
                        <div className="flex items-center mx-[48px] my-6">
                            <input type="checkbox" className="checkbox-stats"></input>
                            <p className="mx-4">ARMOR: </p>
                        </div>
                        <div className="flex items-center mx-[48px] my-6">
                            <input type="checkbox" className="checkbox-stats"></input>
                            <p className="mx-4">BACKGROUND: </p>
                        </div>
                        <div className="flex items-center mx-[48px] my-6">
                            <input type="checkbox" className="checkbox-stats"></input>
                            <p className="mx-4">ALIGNMENT: </p>
                        </div>
                        <div className="flex items-center mx-[48px] my-6">
                            <input type="checkbox" className="checkbox-stats"></input>
                            <p className="mx-4">FEATURE: </p>
                        </div>
                        <div className="flex items-center mx-[48px] my-6">
                            <input type="checkbox" className="checkbox-stats"></input>
                            <p className="mx-4">GENDER: </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CharacterStats;