import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicosSection() {
  const styles = {
    tituloServicos: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      color: 'white',
      '@media(min-width: 768px)': {
        fontSize: '3rem'
      }
    },
    subtitulo: {
      fontSize: '1rem',
      color: '#94a3b8',
      '@media(min-width: 768px)': {
        fontSize: '1.25rem'
      }
    }
  };
  const servicos = [
    {
      id: 1,
      titulo: "Pintura Predial",
      descricao: "Serviço profissional de pintura para prédios comerciais e residenciais",
      icone: "/assets/predios.jpg"
    },
    {
      id: 2,
      titulo: "Reformas",
      descricao: "Reformas completas com acabamento em pintura",
      icone: "/assets/predios.jpg"
    },
    {
      id: 3,
      titulo: "Manutenção Preventiva",
      descricao: "Serviços de manutenção preventiva e corretiva",
      icone: "/assets/predios.jpg"
    }
   
  ];

  return (
    <section className="relative w-full min-h-screen">
      {/* Imagem de fundo */}
      <Image
        src="/assets/predios.jpg"
        alt="Prédio com pintura profissional"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-[#ac141e] opacity-90" />

      {/* Conteúdo principal */}
      <div className="container mx-auto py-12 relative z-10 cursor-pointer">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h2 className="titulo-servicos text-white text-4xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="subtitulo text-gray-200 text-lg">
            Descubra como podemos ajudar sua empresa
          </p>
        </div>

        {/* Grid de cartões de serviço */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ">
          {servicos.map((servico) => (
            <Card 
              key={servico.id}
              className="bg-[#fff] backdrop-blur-sm border-none transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src={servico.icone}
                    alt={servico.titulo}
                    width={164}
                    height={164}
                    objectFit="contain"
                  />
                  <h3 className="text-xl font-semibold text-black">{servico.titulo}</h3>
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