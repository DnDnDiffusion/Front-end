import Image from "next/image"

const SaveButton = (imageResult) => {
    return (
        <>
            <a href={imageResult.imageResult.images[0]} download="character_image" className="save-button flex flex-col text-black p-12">
                <p className="flex justify-center text-xl mb-2">SAVE</p>
                <div className="flex justify-center content-center">
                    <div className="flex justify-center align-center mr-2">
                        <Image
                            src="/images/SaveButton/download.svg"
                            alt="button-image"
                            width={20}
                            height={20}
                        />
                    </div>
                    <p className="text-md">PNG</p>
                </div>

            </a>

        </>
    )
}

export default SaveButton;