import Image from "next/image";
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const icons = [
    { src: "/assets/facebook.png", alt: "Facebook" },
    { src: "/assets/whatsapp.png", alt: "WhatsApp" },
    { src: "/assets/instagram.png", alt: "Instagram" },
  ];

  return (
    <div className="relative w-full h-96 md:h-64" id="contato">
      <Image
        src="/assets/predios.jpg"
        alt="Imagem de prédios"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-[#143b5e] "></div>
      <div className="absolute left-4 md:left-20 top-1/2 transform -translate-y-1/2 text-white max-w-full md:max-w-2xl flex flex-col md:flex-row justify-center md:justify-start left-20 md:items-start gap-4 md:gap-6 px-4 md:px-6">
        <div className="w-full md:w-60 flex flex-col gap">
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
          <div className="flex flex-row gap-2">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="relative bg-[#fff] h-10 w-10 rounded-full flex items-center justify-center cursor-pointer mt-5"
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
        <div className="flex flex-col gap-4">
          <div className="text-xl text-color-[#fff] font-bold">Contato</div>
          <div className="flex gap-2">
            <Phone color="red" size={20} />
            <div>+55 11 98509-2860</div>
          </div>
          <div className="flex gap-2">
            <Mail color="red" size={20} />
            <div>jas.mepinturas@gmail.com</div>
          </div>
          <div className="flex gap-2">
            <MapPin color="red" size={20} />
            <div>São Paulo, sp </div>
          </div>
        </div>
      </div>
    </div>
  );
}