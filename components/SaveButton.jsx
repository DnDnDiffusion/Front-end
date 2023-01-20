import Image from "next/image";

const SaveButton = (selectedImage) => {
  return (
    <>
      <a
        href={selectedImage.selectedImage}
        download="character_image"
        onClick={() => {
          console.log(
            "clicked on the save button",
            selectedImage.selectedImage
          );
        }}
        className="save-button flex flex-col text-black p-8"
      >
        SAVE
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
  );
};

export default SaveButton;
