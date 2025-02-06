import { useEffect, useState } from 'react';

// Define all types directly in the component file
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

  const fetchNFT = async () => {
    try {
      const response = await fetch(
        `https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`
      );
      const data: NFTMetadata = await response.json();
      setNft(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch NFT');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFT();
  }, [contractAddress, tokenId]);

  if (loading) return <div className="p-4 text-gray-500">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={nft?.media?.[0]?.gateway || '/fallback-image.png'}
        alt={nft?.title || 'NFT'}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">
          {nft?.title || 'Untitled'}
        </h3>
        <p className="text-gray-600 text-sm">
          {nft?.description || 'No description'}
        </p>
      </div>
    </div>
  );
};

export default NFTCard;