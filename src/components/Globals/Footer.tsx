import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import Navigation from './navigation/Navigation';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container flex items-center flex-col mx-auto gap-8 px-4 py-20">
        
        
        {/* Logo */}
        <Image src="/assets/images/logo.png" alt="Logo" width={100} height={50} />
        
        <Navigation />

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <Link href="#" className="bg-orange-200 text-orange-800 p-3 rounded-full hover:bg-orange-300">
            <Linkedin size={24} className="stroke-1" />
          </Link>
          <Link href="#" className="bg-orange-200 text-orange-800 p-3 rounded-full hover:bg-orange-300">
            <Instagram size={24} className="stroke-1" />
          </Link>
          <Link href="#" className="bg-orange-200 text-orange-800 p-3 rounded-full hover:bg-orange-300">
            <Facebook size={24} className="stroke-1" />
          </Link>
        </div>
      </div>

      {/* Legal Links */}
      <div className="flex justify-center space-x-8 mb-0 text-sm">
        <Link href="/mentions-legales" className="hover:text-peach-300">
          Mentions légales
        </Link>
        <Link href="/politique-confidentialite" className="hover:text-peach-300">
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  );
};

export default Footer;