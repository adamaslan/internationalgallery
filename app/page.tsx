"use client";
import { useEffect, useState } from 'react';

interface NFT {
  identifier: string;
  name: string;
  description: string;
  image_url: string;
  collection: string;
  contract: string;
  token_standard: string;
  creator: string;
  owners: Array<{
    address: string;
    quantity: number;
  }>;
  traits: Array<{
    trait_type: string;
    value: string;
    display_type: string | null;
    percentile: number | null;
  }>;
}

export default function NFTDisplay() {
  const [nft, setNft] = useState<NFT | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const response = await fetch(
          'https://api.opensea.io/api/v2/chain/ethereum/contract/0x31fb4083b0a3617ca645041ff4f33ab8f3298cdb/nfts/10',
          {
            headers: {
              'x-api-key': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
            },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`API Error ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        
        if (!data.nft) {
          throw new Error('Invalid NFT data structure in response');
        }

        setNft(data.nft);
        setError(null);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error fetching NFT:', message);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchNFT();
  }, []);

  // Loading and error states remain the same...

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl text-center mb-8 font-pixel text-retro-pink">
        The International Gallery NFT of the Month
      </h1>
      
      <div className="bg-retro-beige border-4 border-black p-4 shadow-retro">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* NFT Image */}
          <div className="aspect-square border-4 border-black bg-retro-blue overflow-hidden pixel-art">
            <img
              src={nft?.image_url}
              alt={nft?.name}
              className="w-full h-full object-cover pixelated"
            />
          </div>

          {/* NFT Details */}
          <div className="space-y-4">
            <div className="border-4 border-black bg-retro-yellow p-2">
              <h1 className="text-2xl font-pixel text-black">{nft?.name}</h1>
            </div>
            
            <div className="border-4 border-black bg-retro-green p-2">
              <p className="font-pixel text-sm text-black">{nft?.description}</p>
            </div>

            {/* Additional Details */}
            <div className="space-y-2">
              <div className="border-4 border-black bg-retro-red p-2">
                <h2 className="text-xl font-pixel text-black">DETAILS</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="border-4 border-black bg-retro-purple p-2">
                  <div className="text-md font-pixel text-retro-pink">Collection</div>
                  <div className="text-sm font-pixel text-white">{nft?.collection}</div>
                </div>
                <div className="border-4 border-black bg-retro-purple p-2">
                  <div className="text-md font-pixel text-retro-pink">Contract</div>
                  <div className="text-sm font-pixel text-white break-all">{nft?.contract}</div>
                </div>
                <div className="border-4 border-black bg-retro-purple p-2">
                  <div className="text-md font-pixel text-retro-pink">Standard</div>
                  <div className="text-sm font-pixel text-white">{nft?.token_standard}</div>
                </div>
                <div className="border-4 border-black bg-retro-purple p-2">
                  <div className="text-md font-pixel text-retro-pink">Creator</div>
                  <div className="text-sm font-pixel text-white break-all">{nft?.creator}</div>
                </div>
                <div className="border-4 border-black bg-retro-purple p-2">
                  <div className="text-md font-pixel text-retro-pink">Owner</div>
                  <div className="text-sm font-pixel text-white break-all">
                    {nft?.owners[0]?.address}
                  </div>
                </div>
                <div className="border-4 border-black bg-retro-purple p-2">
                  <div className="text-md font-pixel text-retro-pink">Token ID</div>
                  <div className="text-sm font-pixel text-white">{nft?.identifier}</div>
                </div>
              </div>
            </div>

            {/* Traits */}
            <div className="space-y-2">
              <div className="border-4 border-black bg-retro-red p-2">
                <h2 className="text-xl font-pixel text-black">PROPERTIES</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {nft?.traits.map((trait, index) => (
                  <div
                    key={index}
                    className="border-4 border-black bg-retro-purple p-2"
                  >
                    <div className="text-md font-pixel text-retro-pink">{trait.trait_type}</div>
                    <div className="text-sm font-pixel text-white">{trait.value}</div>
                    {trait.percentile && (
                      <div className="text-xxs font-pixel text-retro-green mt-1">
                        TOP {trait.percentile.toFixed(1)}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}