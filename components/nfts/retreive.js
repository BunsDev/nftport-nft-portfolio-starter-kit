import Link from 'next/link';
import { useState, useEffect } from "react"

const RetreiveNFTS = () => {
    const apiKey = process.env.NEXT_PUBLIC_NFTPORT_API_KEY
    const nftsAddress = process.env.NEXT_PUBLIC_NFTPORT_NFTS_ADDRESS
    const nftChain = process.env.NEXT_PUBLIC_NFTPORT_CHAIN
    const nftQuantity = process.env.NEXT_PUBLIC_NFTPORT_DISPLAY_QUANTITY
    const nftInclude = process.env.NEXT_PUBLIC_NFTPORT_INCLUDE
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: apiKey
        }
    };
    useEffect(() => {
        setLoading(true)

        if (nftChain === "solana") {
            fetch(`https://api.nftport.xyz/v0/solana/accounts/creators/${nftsAddress}?chain=${nftChain}&page_size=${nftQuantity}&include=${nftInclude}`, options)
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                });
        } else {
            fetch(`https://api.nftport.xyz/v0/nfts/${nftsAddress}?chain=${nftChain}&page_size=${nftQuantity}&include=${nftInclude}`, options)
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                });
        }
    }, []);

    if (isLoading) return <p className='flex h-[200px] md:h-screen justify-center items-center p-8 text-2xl text-center font-medium'>Loading NFTs...</p>;
    if (!data) return <p className='flex h-[200px] md:h-screen justify-center items-center p-8 text-2xl text-center font-medium'>No availble NFTs</p>;

    return (
        <>
            <div className='pt-6 px-3 md:px-6'>
                <h1 className='text-2xl font-medium leading-7 text-slate-900'>
                    Available NFTs
                </h1>
            </div>
            <div className='divide-y pt-6 divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:px-6 auto-cols-auto'>
                    {data.nfts.map(nft =>
                        <div key={nftChain === "solana" ? nft.mint_address : nft.token_id} className='border-solid border-2 border-slate-200 rounded-lg drop-shadow-xl bg-gradient-to-r from-slate-50 via-gray-50 to-zinc-50'>
                            <img className='rounded-t-lg hover:grayscale' src={nft.metadata.image} alt={nft.metadata.name}></img>
                            <div className='p-4 divide-y divide-slate-200'>
                                <h3 className='font-bold text-xl pb-2'>{nft.metadata.name}</h3>
                                <div className='flex py-2'>
                                    <p className='basis-1/2 text-base font-bold'>Chain:</p>
                                    {nftChain === "solana" ? (
                                        <>
                                            <p className='basis-1/2 text-base text-right truncate'>solana</p>
                                        </>
                                    ) : (
                                        <>
                                            <p className='basis-1/2 text-base text-right truncate'>{nft.chain}</p>
                                        </>
                                    )}
                                </div>
                                <div className='flex py-2'>
                                    <p className='basis-1/2 text-base font-bold'>Token:</p>
                                    {nftChain === "solana" ? (
                                        <>
                                            <Link href={`https://solscan.io/token/${nft.mint_address}`} passHref>
                                                <a target="_blank" className='basis-1/2 text-base text-right underline truncate'>{nft.mint_address}</a>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <p className='basis-1/2 text-base text-right truncate'>{nft.token_id}</p>
                                        </>
                                    )}
                                </div>
                                <div className='flex py-2'>
                                    <p className='basis-1/2 text-base font-bold'>Address:</p>
                                    {nftChain === "solana" ? (
                                        <>
                                            <Link href={`https://solscan.io/token/${nft.metadata.properties.creators[0].address}`} passHref>
                                                <a target="_blank" className='basis-1/2 text-base text-right underline truncate'>{nft.metadata.properties.creators[0].address}</a>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link href={`https://etherscan.io/address/${nft.contract_address}`} passHref>
                                                <a target="_blank" className='basis-1/2 text-base text-right underline truncate'>{nft.contract_address}</a>
                                            </Link>
                                        </>
                                    )}
                                </div>
                                {nftChain === "solana" ? (
                                    <></>
                                ) : (
                                    <>
                                        <div className='flex py-2'>
                                            <p className='basis-1/2 text-base font-bold'>Owner:</p>
                                            <Link href={`https://etherscan.io/address/${nft.owner}`} passHref>
                                                <a target="_blank" className='basis-1/2 text-base text-right underline truncate'>{nft.owner}</a>
                                            </Link>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default RetreiveNFTS;