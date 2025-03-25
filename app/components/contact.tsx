'use client';

export default function Contact() {
  return (
    <div className="bg-white py-12 flex flex-col items-center px-6">
      <div className="w-full max-w-3xl text-center space-y-4">
        <h2 className="text-[#04426f] text-3xl md:text-4xl font-bold">
          Por que escolher nossos serviços?
        </h2>
        <p className="text-[#ac141e] text-lg md:text-xl font-semibold">
          Experiência e qualidade no setor de pintura predial. Oferecemos serviços profissionais com segurança e acabamento impecável.
        </p> 
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Com anos de experiência, garantimos resultados excepcionais, combinando tecnologia, materiais de alta qualidade e uma equipe altamente qualificada. 
          Nosso compromisso é transformar e valorizar seu imóvel com máxima eficiência.
        </p>
        <a
          href="tel:11998533004"
          className="bg-[#ac141e] text-white font-medium text-lg md:text-xl px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-[#900f17] inline-block"
        >
          📞 Contato: (11) 98583-3004
        </a>
      </div>
    </div>
  );
}
