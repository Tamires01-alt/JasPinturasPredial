'use client';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='bg-[#fff] w-full h-20 '>
        <Image
          src="/assets/iconeJas.png"
          alt="Imagem de Fundo"
          quality={100}
          width={200}
          height={200}
        />
      </div>
      <nav className="bg-[#04426f] shadow-md  w-full top-10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

            <div className="hidden md:flex space-x-6  items-center justify-center w-full gap-10">
              <Link href="/" className="text-[#fff] ">Home</Link>
              <Link href="/about" className="text-[#fff] ">Sobre</Link>
              <Link href="/services" className="text-[#fff] ">Serviços</Link>
              <Link href="/contact" className="text-[#fff] ">Contato</Link>
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
            <Link href="/" className="block text-[#04426f] ">Home</Link>
            <Link href="/about" className="block text-[#04426f] ">Sobre</Link>
            <Link href="/services" className="block text-[#04426f] ">Serviços</Link>
            <Link href="/contact" className="block text-[#04426f] ">Contato</Link>
          </div>
        )}
      </nav>

    </div>
  );
}
