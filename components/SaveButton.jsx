const SaveButton = (imageResult) => {
    return (
        <>
            <a href={imageResult.imageResult.images[0]} download="character_image">SAVE BUTTON
            </a>

        </>
    )
}

export default SaveButton;