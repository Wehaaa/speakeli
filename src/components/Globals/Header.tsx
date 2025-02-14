'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from './navigation/Navigation';
import Link from 'next/link';


interface HeaderProps {
  onToggle: () => void;
}

const FirstHeader: React.FC<HeaderProps> = ({ onToggle }) => {
  return (
    <header 
      className="relative z-30 max-w-6xl mx-auto z-20 left-0 top-0 right-0 py-8 flex justify-between items-center cursor-pointer"
      onClick={onToggle}
    >
      <Link href="/" onClick={(e) => e.stopPropagation()}>
        <h1 className="font-bebas flex gap-1 text-5xl">
          <span>Speak</span>
          <span className="text-orange-300/80">Eli</span>
        </h1>
      </Link>
      <div 
        className=""
        onClick={(e) => e.stopPropagation()}
      >
        <Navigation theme="light" />
      </div>
    </header>
  );
};

const SecondHeader: React.FC<HeaderProps> = ({ onToggle }) => {
  return (
    <header 
      className="relative h-48 flex lg:flex-col justify-center items-center cursor-pointer"
      onClick={onToggle}
    >
      <Image 
        src="/assets/images/bg-speakeli.jpg" 
        alt="Background"
        width={1920}
        height={1080}
        className="absolute w-full h-full object-cover"
        priority
        style={{ zIndex: -1 }} 
      />
      <Link href="/" onClick={(e) => e.stopPropagation()}>
        <h1 className="font-bebas flex gap-2 text-7xl">
          <span>Speak</span>
          <span className="text-white">Eli</span>
        </h1>
      </Link>
      <div 
        className="absolute z-30 -bottom-0 translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <Navigation />
      </div>
    </header>
  );
};

const Header = () => {
  const [isFirstVersion, setIsFirstVersion] = useState(true);

  const toggleVersion = () => {
    setIsFirstVersion(!isFirstVersion);
  };

  return isFirstVersion ? (
    <FirstHeader onToggle={toggleVersion} />
  ) : (
    <SecondHeader onToggle={toggleVersion} />
  );
};

export default Header;