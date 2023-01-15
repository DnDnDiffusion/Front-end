import { NFTStorage, File } from "nft.storage";

const token = process.env.NEXT_PUBLIC_NFT_STORAGE;

// takes in base64 binary image data
async function imageNFTSTORAGE(someBinaryImageData) {
  console.log("binary image data correctly passed in ", someBinaryImageData);
  const client = new NFTStorage({ token: token });

  console.log(client);
  const someData = new Blob([someBinaryImageData]);
  // const imageFile = new File([someBinaryImageData], "nft.png", {
  //   type: "image/png",
  // });
  // const cid = await client.storeDirectory([imageFile]);
  // console.log(imageFile, cid);
  const cid = await client.storeBlob(someData);
  // const metadata = await client.store({
  //   name: "D&D Diffusion Avatar",
  //   description: "Just try to funge it. You can't do it.",
  //   image: imageFile,
  // });
  console.log("cid: ", cid, " ... now creating metadata");
  // const metadata = await client.store({
  return cid;
}

//function takes structuredMetadata and returns a ipfs uri
async function metadataNFTSTORAGE(structuredMetadata) {
  console.log("structuredMetadata correctly passed in ", structuredMetadata);
  const client = new NFTStorage({ token: token });

  const metadata = await client.store({
    // use destructuring to complete the metadata
    ...structuredMetadata,
  });
  const clickableMetadata = `ipfs://${metadata}`;
  console.log("metadata: ", clickableMetadata);
  return clickableMetadata;
}

module.exports = { imageNFTSTORAGE, metadataNFTSTORAGE };
