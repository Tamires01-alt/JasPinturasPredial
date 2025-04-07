'use client';
import Image from "next/image";

export default function SecurityService() {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/assets/predios.jpg"
        alt="Prédio com pintura profissional"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-[#ac141e] opacity-80" />
      <div className="container mx-auto py-12 relative z-10 cursor-pointer">
        <div className=" py-12 flex flex-col items-center px-6" id="servicos">
          <div className="w-full max-w-3xl text-center space-y-4">
            <div className=" text-left space-y-4">
              <h3 className="text-[#fff] text-2xl md:text-3xl font-bold">SEGURANÇA</h3>
              <p className="text-[#fff] text-sm md:text-base leading-relaxed">
                Nossos funcionários são treinados conforme <strong>NR-35</strong>.<br />
                Equipamentos de trabalho e segurança seguem os padrões da <strong>NR-18</strong>.
              </p>
              <p className="text-[#fff] text-base md:text-lg font-bold">EPIs usados em trabalhos em altura:</p>
              <ul className="list-decimal list-inside text-[#fff] text-sm md:text-base space-y-1">
                <li>Trava Quedas</li>
                <li>Cinto de Segurança tipo paraquedista</li>
                <li>Capacete com Jugular</li>
                <li>Talabartes Ajustáveis</li>
                <li>Talabartes Simples</li>
                <li>Talabarte Y</li>
                <li>Botinas de Segurança</li>
                <li>Óculos de Segurança</li>
                <li>Luvas de Segurança</li>
                <li>Cabos de Aço e Cabos de Fibra Sintética</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
