'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface NFTMetadata {
  title?: string;
  description?: string;
  media?: Array<{
    gateway: string;
  }>;
}

export interface NFTItem {
  contractAddress: string;
  tokenId: string;
}

interface NFTCardProps extends NFTItem {}

const NFTCard = ({ contractAddress, tokenId }: NFTCardProps) => {
  const [nft, setNft] = useState<NFTMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const openSeaUrl = `https://opensea.io/assets/ethereum/${contractAddress}/${tokenId}`;

  const fetchNFT = async () => {
    try {
      // Using environment variable validation
      const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
      if (!apiKey) {
        throw new Error('Alchemy API key is not configured');
      }

      const response = await fetch(
        `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`,
        {
          // Adding Next.js recommended fetch options
          next: {
            revalidate: 3600 // Revalidate data every hour
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: NFTMetadata = await response.json();
      setNft(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch NFT');
      console.error('Error fetching NFT:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFT();
  }, [contractAddress, tokenId]);

  if (loading) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded mb-4" />
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="text-red-500 flex items-center gap-2">
          <span className="font-medium">Error:</span>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <Link 
      href={openSeaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
        <div className="relative h-64 w-full">
          <Image
            src={nft?.media?.[0]?.gateway || '/fallback-image.png'}
            alt={nft?.title || 'NFT'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
            quality={75}
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">
            {nft?.title || 'Untitled'}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {nft?.description || 'No description'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;