// components/GalleryHeader.tsx
export const GalleryHeader = () => (
    <div className="relative mb-8 text-center">
      <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] opacity-50" />
      
      <h1 className="text-4xl inline-block font-pixel relative 
            px-4 py-2
            border-4 border-retro-cyan
            bg-retro-dark-blue
            animate-crt-flicker
            [box-shadow:_8px_8px_0_theme(colors.retro-magenta)]
            before:content-[''] before:absolute before:inset-0 before:bg-noise before:opacity-20
            after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(transparent_95%,#0008)]">
        <span className="relative z-10 block px-2 bg-retro-dark-blue/90">
          <span className="text-retro-cyan [text-shadow:_3px_3px_theme(colors.retro-magenta)]">
            THE INTERNATIONAL
          </span>
          <br />
          <span className="text-retro-magenta [text-shadow:_3px_3px_theme(colors.retro-cyan)]">
            GALLERY
          </span>
          <br />
          <span className="text-retro-green text-2xl inline-block mt-2 
                border-2 border-retro-cyan
                px-3 py-1
                [text-shadow:_2px_2px_theme(colors.black)]
                [box-shadow:_4px_4px_0_theme(colors.retro-dark-blue)]">
            NFT OF THE MONTH
          </span>
        </span>
        
        {/* Pixel corner decorations */}
        <div className="absolute -left-2 -top-2 w-4 h-4 bg-retro-magenta clip-pixel-corner" />
        <div className="absolute -right-2 -top-2 w-4 h-4 bg-retro-cyan clip-pixel-corner rotate-90" />
        <div className="absolute -left-2 -bottom-2 w-4 h-4 bg-retro-green clip-pixel-corner -rotate-90" />
        <div className="absolute -right-2 -bottom-2 w-4 h-4 bg-retro-yellow clip-pixel-corner rotate-180" />
      </h1>
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(transparent_0px,transparent_2px,#0005_3px,#0005_4px)] opacity-30" />
    </div>
  );
  
  