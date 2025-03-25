import Image from "next/image";

export default function HomeSection() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/assets/predios.jpg"
        alt="Imagem de prédios"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-[#04426f] opacity-70"></div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white max-w-2xl flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6">
      
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Transformamos Prédios com Qualidade e Precisão!
          </h1>
          <p className="mt-4 text-base md:text-lg">
            Somos especialistas em pintura predial, trazendo segurança, eficiência e acabamento impecável para cada projeto.
          </p>
          <p className="mt-2 text-base md:text-lg">
            Entre em contato e solicite um orçamento gratuito!
          </p>
        </div>
        <Image
          src="/assets/personagem1.png"
          alt="Pintor profissional"
          width={300}
          height={300}
          className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
