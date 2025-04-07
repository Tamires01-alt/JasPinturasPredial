'use client';
import Image from "next/image";

export default function AboutService() {
  return (
    <div className="bg-[#04426f] py-12 flex flex-col items-center px-6" id="sobre">
      <div className="w-full max-w-3xl text-center space-y-8">
        <h2 className="text-[#fff] text-3xl md:text-4xl font-bold">
        Entenda por que somos a escolha certa
        </h2>

        <div className="text-left space-y-6 text-[#fff]">
          <div>
            <h3 className="text-[#ac141e] text-2xl font-bold">Missão</h3>
            <p>
              A J.A.S. é uma empresa especializada em serviços de restauração e pintura de edifícios, com o compromisso de oferecer soluções de alta qualidade, durabilidade e eficiência. Nosso objetivo é entregar resultados excepcionais que atendam às necessidades de nossos clientes, garantindo sua total satisfação. Trabalhamos com tecnologias e práticas inovadoras, priorizando a excelência em cada etapa do processo, desde a análise até a execução dos projetos.
            </p>
          </div>

          <div>
            <h3 className="text-[#ac141e] text-2xl font-bold">Visão</h3>
            <p>
              A J.A.S. é uma das principais referências no setor de restauração e pintura predial, reconhecida pela qualidade superior de nossos serviços e pela inovação constante. Buscamos expandir nossa atuação no mercado, sempre com o propósito de oferecer soluções que promovam a preservação e valorização de imóveis, assegurando a confiança e lealdade de nossos clientes.
            </p>
          </div>

          <div>
            <h3 className="text-[#ac141e] text-2xl font-bold">Valores</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Responsabilidade:</strong> Honramos nossos compromissos, entregando serviços dentro dos prazos e padrões acordados.
              </li>
              <li>
                <strong>Ética e Transparência:</strong> Atuamos com a máxima honestidade e respeito em todas as nossas relações comerciais, seja com clientes, fornecedores ou colaboradores.
              </li>
              <li>
                <strong>Qualidade e Excelência:</strong> Nosso foco é garantir qualidade em todos os aspectos do nosso trabalho, buscando sempre superar as expectativas de nossos contratantes.
              </li>
              <li>
                <strong>Inovação e Sustentabilidade:</strong> Investimos em tecnologias de ponta e práticas sustentáveis para oferecer soluções modernas e ecologicamente responsáveis.
              </li>
              <li>
                <strong>Respeito e Valorização das Pessoas:</strong> Reconhecemos nossos colaboradores, incentivando um ambiente de trabalho saudável e respeitoso, o que reflete diretamente na qualidade do nosso atendimento e serviço.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
