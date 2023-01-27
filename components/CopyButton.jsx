import Image from "next/image";

const CopyButton = ({ selectedImage }) => {
    return (
        <>
            <a
                href={selectedImage}
                download="character_image"
                onClick={() => {
                    try {
                        navigator.clipboard.write([
                            new ClipboardItem({
                                selectedImage: pngImageBlob
                            })
                        ]);
                    } catch (error) {
                        console.error(error);
                    }
                }}
                className="save-button flex flex-col text-black p-8 text-4xl"
            >
                COPY
                <div className="flex justify-center content-center">
                    <div className="flex justify-center align-center mr-2">
                        <Image
                            src="/images/SaveButton/download.svg"
                            alt="button-image"
                            width={20}
                            height={20}
                        />
                    </div>
                    <p className="text-xl">TO CLIPBOARD</p>
                </div>
            </a>
        </>
    );
};

export default CopyButton;