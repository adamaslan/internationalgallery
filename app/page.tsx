import NFTGallery from './(components)/Nftgal';
import { NFTItem } from './(components)/Nftcard';

const NFT_LIST: NFTItem[] = [
  {
    contractAddress: '0x31fb4083b0a3617ca645041ff4f33ab8f3298cdb',
    tokenId: '130',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">My NFT Gallery</h1>
        </div>
      </header>
      <NFTGallery nfts={NFT_LIST} />
    </div>
  );
}