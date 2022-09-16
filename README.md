# NFTPort NFT Portfolio Starter Kit

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

Note, deploying to Vercel does not require any knowledge of Javascript, Next.js or software development.

To successfully deploy to Vercel, you will need the following environment variables:

| Variable        | Description           | Example  |
| ------------- |-------------| -------------|
| NEXT_PUBLIC_SITE_NAME      | Your website's SEO Name | NFTPort |
| NEXT_PUBLIC_SITE_TITLE      | Your website's SEO Title      |   NFT Portfolio Starter Kit |
| NEXT_PUBLIC_SITE_DESCRIPTION      | Your website's SEO Description      |   NFTPort API starter kit using Next.js, Tailwind and Vercel. |
| NEXT_PUBLIC_NFTPORT_API_KEY      | Your NFTPort API Key      |   4806f51a-f91f-456d-8cb6-b471b909c2b6 |
| NEXT_PUBLIC_NFTPORT_CONTRACT_ADDRESS      | A public address to retrieve contract NFTs      |   0x6C9343CA5c2Ef3a35a83438344Bb3cbE3c249f65 |
| NEXT_PUBLIC_NFTPORT_CHAIN     | The blockchain we will retreive NFTs from      |   ethereum |
| NEXT_PUBLIC_NFTPORT_DISPLAY_QUANTITY     | The number of NFTs to retreive      |   50 |
| NEXT_PUBLIC_NFTPORT_INCLUDE     | The type of data to return from NFTPort's API      |   `all`, but others include: `default`, `metadata`, and `Not Set` |
| NEXT_PUBLIC_CREATOR_NAME     | The creator of the NFT or NFT's project      |   Yuga Labs |
| NEXT_PUBLIC_CREATOR_WEBSITE     | The NFT or NFT's creator website     |   yuga.com |
| NEXT_PUBLIC_CREATOR_PROJECT_NAME     | The NFT or NFT's project name     |   Bored Ape Yacht Club |
| NEXT_PUBLIC_CREATOR_PROJECT_TAGLINE     | The NFT or NFT's project tagline     |   A collection of 10000 unique Bored Ape NFTs |
| NEXT_PUBLIC_CREATOR_PROJECT_BIO     | The NFT or NFT's bio or long description     |   Bored Ape Yacht Club is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits. Future areas and perks can be unlocked by the community through roadmap activation. |
| NEXT_PUBLIC_CREATOR_LEARN_MORE_LINK     | An external link to learn more about the NFT or NFT's project     |   https://opensea.io/collection/boredapeyachtclub |
| NEXT_PUBLIC_CREATOR_INSTAGRAM_LINK     | The NFT or NFT's Instagram profile     |   https://www.instagram.com/boredapeyachtclub/ |
| NEXT_PUBLIC_CREATOR_TWITTER_LINK     | The NFT or NFT's Twitter profile     |   https://twitter.com/BoredApeYC |

## Roadmap

This repository is just a starter kit, but I will be expanding it to include:

- [ ] Implement Web3 wallet connections (ex. [web3.js](https://web3js.readthedocs.io/en/v1.8.0/))
- [ ] Allow connected wallet holders to create NFT project profiles

## Contributing

Feel free to fork this repository and submit pull requests, or build an application of your own. 

## Questions

If you have any questions, feel free to email me at: [sergio.m.villasenor@gmail.com](mailto:sergio.m.villasenor@gmail.com).