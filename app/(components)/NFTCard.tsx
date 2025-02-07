'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const NFTComponent = dynamic(
  () => import('./OpenSeaNFTEmbed'),
  { ssr: false }
);

const OpenSeaNFTEmbed = () => {
  useEffect(() => {
    const loadScript = async () => {
      if (!customElements.get('nft-card')) {
        const { defineCustomElements } = await import('embeddable-nfts/loader');
        await defineCustomElements();
      }
    };

    loadScript();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <nft-card
        contractAddress="0x495f947276749Ce646f68AC0c585b2676A642790"
        tokenId="216"
        network="mainnet"
      ></nft-card>
    </div>
  );
};
