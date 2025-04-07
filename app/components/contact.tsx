'use client';
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-white py-12 flex flex-col items-center px-6" id="sobre">
      <div className="w-full max-w-3xl text-center space-y-4">
        <h2 className="text-[#04426f] text-3xl md:text-4xl font-bold">
          Por que escolher nossos serviços?
        </h2>
        <p className="text-[#000] text-lg md:text-xl font-bold">
          Experiência e qualidade no setor de pintura predial. Oferecemos serviços profissionais com segurança e acabamento impecável.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        Com ampla experiência no setor, oferecemos resultados de excelência, unindo materiais de qualidade e uma equipe técnica altamente capacitada. Nosso compromisso é transformar e valorizar seu imóvel com eficiência, precisao e responsabilidade.
        </p>
        <div className="w-full flex justify-center mt-8">
          <a
            href="https://wa.me/5511985092860"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-green-500 text-white rounded-full"
          >
            <Image
              src="/assets/whatsAppLogo.jpg"
              alt="WhatsApp Logo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span>Entre em contato via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
