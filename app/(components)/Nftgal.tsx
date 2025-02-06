"use client";

import NFTCard, { NFTItem } from './NFTCard';

interface NFTGalleryProps {
  nfts: NFTItem[];
}

const NFTGallery: React.FC<NFTGalleryProps> = ({ nfts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {nfts.map((nft, index) => (
        <NFTCard
          key={index}
          contractAddress={nft.contractAddress}
          tokenId={nft.tokenId}
        />
      ))}
    </div>
  );
};

export default NFTGallery;