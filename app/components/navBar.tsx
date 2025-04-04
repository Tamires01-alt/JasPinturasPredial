'use client';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#fff] w-full h-20 flex justify-between items-center px-4 shadow-md">
     
      <Image
        src="/assets/iconeJas.png"
        alt="Logo da Empresa"
        quality={100}
        width={200}
        height={200}
      />
    
     
      {/* <a 
      href="https://wa.me/11985833004" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-3 bg-green-500 text-white rounded-full"
    >
      <Image 
        src="/assets/whatsAppLogo.jpg" 
        alt="WhatsApp Logo" 
        width={30} 
        height={30} 
         className="rounded-full hover:scale-110 transition-transform duration-300"
      />
      
    </a> */}
    </div>
      <nav className="bg-[#04426f] shadow-md  w-full top-10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

            <div className="hidden md:flex space-x-6  items-center justify-center w-full gap-10">
              <Link href="#home" className="text-[#fff] ">Home</Link>
              <Link href="#sobre" className="text-[#fff] ">Sobre</Link>
              <Link href="#servicos" className="text-[#fff] ">Serviços</Link>
              <Link href="#contato" className="text-[#fff] ">Contato</Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#fff] focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#fff] shadow-md p-4 space-y-2">
            <Link href="#home"className="block text-[#04426f] ">Home</Link>
            <Link href="#sobre" className="block text-[#04426f] ">Sobre</Link>
            <Link href="#servicos" className="block text-[#04426f] ">Serviços</Link>
            <Link href="#contato" className="block text-[#04426f] ">Contato</Link>
          </div>
        )}
      </nav>

    </div>
  );
}
