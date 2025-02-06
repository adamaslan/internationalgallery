import NFTGallery from './(components)/Nftgal';
import { NFTItem } from './(components)/Nftcard';

const NFT_LIST: NFTItem[] = [
  {
    contractAddress: '0x31Fb4083B0A3617ca645041FF4F33Ab8F3298cDB',
    tokenId: '10',
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