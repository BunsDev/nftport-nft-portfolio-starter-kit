# NFTPort NFT Portfolio Starter Kit

<img src="public/og.jpg">

This is a starter kit project for creating an NFT portfolio using [NFTPort](https://www.nftport.xyz/), Next.js's [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and [Tailwind](https://tailwindui.com/); additionally, it is deployable on [Vercel](https://vercel.com/).

## Getting Started

1. [Sign-up](https://dashboard.nftport.xyz/sign-up) and create an NFTPort account
2. After signing-up, copy and save your accounts [API Key](https://dashboard.nftport.xyz/api-key) for later use
3. Clone this repository
4. Rename `.env.sample` to `.env`
5. Update your environment variables file (`.env`) using your NFTPort API Key and other information about your NFT project
6. Run `npm run dev`
7. View your landing page on `localhost:3000`

Alternatively, you can deploy this starter kit using Vercel's [Deploy Now](https://vercel.com/docs/deploy-button) button:

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsurgieboi%2Fnftport-nft-portfolio-starter-kit&env=NEXT_PUBLIC_NFTPORT_API_KEY,NEXT_PUBLIC_NFTPORT_CONTRACT_ADDRESS,NEXT_PUBLIC_NFTPORT_CHAIN,NEXT_PUBLIC_NFTPORT_DISPLAY_QUANTITY"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

Note, deploying to Vercel does not require any knowledge of Javascript, Next.js or software development.

To successfully deploy to Vercel, you will need the following environment variables:

| Variable        | Description           | Example  |
| ------------- |-------------| -------------|
| NEXT_PUBLIC_NFTPORT_API_KEY      | Your NFTPort API Key      |   4806f51a-f91f-456d-8cb6-b471b909c2b6 |
| NEXT_PUBLIC_NFTPORT_CONTRACT_ADDRESS      | A public address to retrieve contract NFTs      |   0x6C9343CA5c2Ef3a35a83438344Bb3cbE3c249f65 |
| NEXT_PUBLIC_NFTPORT_CHAIN     | The blockchain we will retreive NFTs from      |   ethereum |
| NEXT_PUBLIC_NFTPORT_DISPLAY_QUANTITY     | The number of NFTs to retreive      |   50 |
| NEXT_PUBLIC_NFTPORT_INCLUDE     | The type of data to return from NFTPort's API      |   `all`, but others include: `default`, `metadata`, and `Not Set` |

## Updating Content

### Logo

To update the logo, replace the `logo.png` file found within the repositories `/public` directory.

### Project Information

To update information such as as the landing page's project title (ex. `Bored Ape Yacht Club`), update the `retreive.js` file within the `components/nfts` directory.

## Roadmap

This repository is just a starter kit, but I will be expanding it to include:

- [ ] Implement Web3 wallet connections (ex. [web3.js](https://web3js.readthedocs.io/en/v1.8.0/))
- [ ] Allow connected wallet holders to create NFT project profiles

## Contributing

Feel free to fork this repository and submit pull requests, or build an application of your own. 

## Questions

If you have any questions, feel free to email me at: [sergio.m.villasenor@gmail.com](mailto:sergio.m.villasenor@gmail.com).