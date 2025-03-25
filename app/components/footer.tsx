import Image from "next/image";

export default function Footer() {
  const icons = [
    { src: "/assets/facebook.png", alt: "Facebook" },
    { src: "/assets/whatsapp.png", alt: "WhatsApp" },
    { src: "/assets/instagram.png", alt: "Instagram" },
  ];

  return (
    <div className="relative w-full h-64">
      <Image
        src="/assets/predios.jpg"
        alt="Imagem de prédios"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-[#04426f] opacity-83"></div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white max-w-2xl flex flex-col md:flex-row items-start gap-4 md:gap-6 px-6">
        <div className="w-60">
          <Image
            src="/assets/iconeJas.png"
            alt="Imagem de Fundo"
            quality={100}
            width={200}
            height={200}
          />
          <p className="text-sm">
            Somos especializados na restauração de edifícios, oferecendo soluções completas.
          </p>
          <div className="flex flex-row gap-2"> {/* Altere para flex-row e gap-2 para espaçamento horizontal */}
            {icons.map((icon, index) => (
              <div
                key={index}
                className="relative bg-[#ac141e] h-10 w-10 rounded-full flex items-center justify-center cursor-pointer" 
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}