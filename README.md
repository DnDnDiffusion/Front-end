# D&D Diffusion

![image](https://user-images.githubusercontent.com/62179036/202823898-aaecbe73-7080-492d-8c74-12aab810636c.png)

> Imagine, creating a new D&D Character and having a custom AI generated avatar in under a minute! Download for free or save your character as NFT with a (Chainlink) random secret/public mission. Are we having fun yet?

# Chainlink & IPFS

- We used Chainlink in our Smart Contract to provide VRF randomness. [Link](https://goerli.etherscan.io/address/0xa41a00db6c90b969252b38580e36b5241c16de85) In the future we want to expand this random seed into unique image prompts, gameplay missions and DM/GM approved mission complete access control.  [See Our Github Repo for mo](https://github.com/DnDnDiffusion/scaffold-dnd)
- We used IPFS/NFT.Storage to provide decentralized, permanent and immutable storage for the image saved to NFT. [link to code](https://github.com/DnDnDiffusion/Front-end/blob/dc6991215ef71ab79a74560192502026a70196d6/pages/index.js#L89) and [more code](https://github.com/DnDnDiffusion/Front-end/blob/main/utils/web3utils.js).

# Getting Started (for judges)

0. Watch our demo video to see the full version (with Cloud GPU Stable Diffusion) or follow these steps to run on your local machine.
1. Git clone this front-end `git clone git@github.com:DnDnDiffusion/Front-end.git`
2. git clone this stable-diffusion-webui `git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git`
3. Set up your stable-diffusion-webui setup as per the instructions in their README.md
4. Download our [.ckpt checkpoints trained on DnD Dragonborn race and the classes of Artificer and Cleric](https://drive.google.com/drive/folders/1dvFfvZtBywAVWTwxPInv26ZjTadEiabT) and put them in the models folder 
5. Make sure you have an [NFT.Storage](https://nft.storage/docs/#using-the-javascript-api) API Key in your .env.local and run npm install nft.storage
6. run `python webui.py --api` in the stable-diffusion-webui directory
7. run `npm install` in the Front-end directory
> see Front-end setup below
8. Open your browser to `http://localhost:3000/` and enjoy!

## Front-end setup

> `npm install` or `yarn` from the front-end directory

First, run the development server from the front-end directory:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# What to build:

- A frontend that:

  [] Has a "download .png" button so users that don't know about right clicking or screenshotting can easily get their picture.

  [] Has a "Save as NFT" for permanant decentralized file storage

  [] Has a "Connect Wallet" button to enable Save as NFT.

  [] Displays form to send to backend for image processing ie. /getImage

  [] Scrapes a PDF / sends a pdf to the flask

  [] Displays response of image choices for characters

  [] Serverside API call to backend / back-up to nft.storage

  [] After character selection, send and save chosen character with character sheet

## endpoint documentation

[] stuff about the endpoint

### roadmaps

[] using next/Image instead of img

[] collect emails and save to db

> make sure it sends to api like the other fields
> then, save the email to the db
> in the db you can have something like
> {

    email: <email>,
    useCount: <incrementing number>,
    ...etc

}

> then every time they run the app, you increment the number
> dataaa

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Common errors

![image](https://user-images.githubusercontent.com/62179036/202824247-ffea9d68-344e-4369-87aa-01421d547cd7.png)
Tippi had trouble connecting his local stable diffusion to the front-end and we couldn't integrate with the flask pdf uploader.
