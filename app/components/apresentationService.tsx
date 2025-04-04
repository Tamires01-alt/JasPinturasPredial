'use client';
import Image from "next/image";

export default function ApresentationService() {
  return (
    <div className="bg-white py-12 px-6 flex flex-col md:flex-row items-center max-w-4xl mx-auto" id="servicos">
      <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center md:items-start">
        <Image
          src="/assets/restauracaoImagem1.jpg"
          alt="Imagem de Fundo"
          quality={100}
          width={300}
          height={300}
          className="mx-auto"
        />
        <Image
          src="/assets/RestaruracaoImagem2.jpg"
          alt="Imagem de Fundo"
          quality={100}
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>

      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#04426f]">Serviço de Restauração Predial</h2>
        <p className="mt-4 text-gray-600">
          Somos especializados na restauração de edifícios, oferecendo soluções completas para revitalização de fachadas, recuperação de estruturas e correção de infiltrações.
        </p>
        <p className="mt-4 text-gray-600">
          Utilizamos materiais de alta qualidade e técnicas avançadas, garantindo a durabilidade e a segurança das construções restauradas.
        </p>
        <p className="mt-4 text-gray-600">
          Nossa equipe altamente qualificada está pronta para atender suas necessidades. Entre em contato para saber como podemos transformar seu espaço.
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
