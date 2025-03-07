import Image from "next/image";

export default function HomeSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Imagem de Fundo */}
      <Image
        src="/assets/predios.jpg" 
        alt="Imagem de Fundo"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-[#1F4569] opacity-80"></div>
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white max-w-lg">
        <h1 className="text-4xl font-bold">Bem-vindo ao Nosso Site</h1>
        <p className="mt-4 text-lg">
          Aqui você encontra as melhores soluções para o seu negócio. Explore agora!
        </p>
      </div>
      
    </div>
  );
}
