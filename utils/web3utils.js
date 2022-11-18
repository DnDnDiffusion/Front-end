import { NFTStorage, File } from "nft.storage";

const token = process.env.NEXT_PUBLIC_NFT_STORAGE;

// takes in base64 binary image data
async function avatarNFTSTORAGE(someBinaryImageData) {
  debugger;
  console.log(someBinaryImageData);
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
  return cid;
}

module.exports = { avatarNFTSTORAGE };
