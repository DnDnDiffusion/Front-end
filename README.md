# D&D Diffusion

> Imagine, creating a new D&D Character and having a custom AI generated avatar in under a minute! Download for free or save your character as NFT with a (Chainlink) random secret/public mission. Are we having fun yet?

# Chainlink & IPFS

- We used Chainlink in our Smart Contract to provide VRF randomness. [Link](www.etherscan.com) In the future we want to expand this random seed into unique image prompts, gameplay missions and DM/GM approved mission complete access control.
- We used IPFS/NFT.Storage to provide decentralized, permanent and immutable storage for the image saved to NFT.

# Getting Started (for judges)

0. Watch our demo video to see the full version (with Cloud GPU Stable Diffusion) or follow these steps to run on your local machine.
1. Git clone this front-end `git clone git@github.com:DnDnDiffusion/Front-end.git`
2. Make sure you have an [NFT.Storage](https://nft.storage/docs/#using-the-javascript-api) API Key in your .env.local and run npm install nft.storage
3. Set up the flask server (pdfExtract)
4. Download automatic1111's stable diffusion webui
5. Download our checkpoints trained on DnD Characters and Classes and put them in the models folder
6. Make sure everything is connected correctly

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
