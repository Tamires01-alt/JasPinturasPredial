'use client';
import Image from "next/image";

export default function PresenteNoDigital() {
  return (
    <footer className="bg-[#fff] flex items-center justify-center gap-2  border-t border-gray-200">
      <span className="text-sm text-gray-700">
        Desenvolvido pelo coletivo
      </span>
      <div className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
        <Image
          src="/assets/logoPresenteNoDigital.png"
          alt="Logo do coletivo Presente no Digital"
          width={70}
          height={40}
          className="object-contain"
          priority
        />
      </div>
    </footer>
  );
}
