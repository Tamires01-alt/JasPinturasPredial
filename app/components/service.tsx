import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicosSection() {
  const servicos = [
    {
      id: 1,
      titulo: "Pintura Predial",
      descricao: "Serviço profissional de pintura para prédios comerciais e residenciais",
      icone: "/assets/service3.jpeg"
    },
    {
      id: 2,
      titulo: "Reformas",
      descricao: "Reformas completas com acabamento em pintura",
      icone: "/assets/service7.jpeg"
    },
    {
      id: 3,
      titulo: "Pintura e acabamento",
      descricao: "Pintura profissional com acabamento de alta qualidade.",
     
      icone: "/assets/imagemCarrosel13.jpg"
    },
    {
      id: 4,
      titulo: "Manutenção Preventiva",
      descricao: "Serviços de manutenção preventiva e corretiva",
      icone: "/assets/service6.jpeg"

    }
  ];

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
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">
          Especialistas em restauração de fachadas
          </h2>
          <p className="text-gray-200 text-lg">
          Serviços de pintura e manutenção com qualidade, segurança e compromisso com o seu patrimônio.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {servicos.map((servico) => (
            <Card 
              key={servico.id}
              className="bg-[#fff] backdrop-blur-sm border-none transition-all duration-300 w-60 rounded-sm"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src={servico.icone}
                    alt={servico.titulo}
                    width={164}
                    height={164}
                    objectFit="contain"
                  />
                  <h3 className="text-xl font-semibold text-[#04426f] text-center  ">{servico.titulo}</h3>
                  <p className="text-black text-center">{servico.descricao}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
