"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold mb-8">
          Clique no Cursor!
        </h1>
        
        <div className="relative">
          <Image
            src="/image.png"
            alt="Cursor clicker image"
            width={400}
            height={400}
            className="cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={handleClick}
          />
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-xl text-gray-300">
            {clicks === 0 ? "Clique na imagem para começar!" : `Você clicou ${clicks} ${clicks === 1 ? 'vez' : 'vezes'}!`}
          </p>
        </div>
      </div>
    </div>
  );
}
