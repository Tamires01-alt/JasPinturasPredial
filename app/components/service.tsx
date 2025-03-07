import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomeSection() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/assets/predios.jpg"
        alt="Imagem de Fundo"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-[#f3222b] opacity-90"></div>
      <div className="absolute left-1/2 top-10 transform -translate-x-1/2 text-white max-w-[90%] sm:max-w-lg text-center flex flex-col items-center justify-start p-4">
        <h1 className="text-2xl sm:text-4xl font-bold">Bem-vindo ao Nosso Site</h1>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg">
          Aqui você encontra as melhores soluções para o seu negócio. Explore agora!
        </p>
        <div className=" bg-[#fff] p-3 borde w-50">
          <Image
            src="/assets/predios.jpg"
            alt="Imagem de Fundo"
            layout="intrinsic"   // Ajusta a imagem de acordo com o tamanho original
            width={130}          // Largura desejada
            height={200}         // Altura desejada
            objectFit="cover"    // A imagem vai cobrir a div mantendo a proporção
          />
          <div className="text-black">jhjjkhkj</div>
          <div className="text-black">Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão.  texto modelo da indústria tipográfica e de impressão </div>
        </div>

      </div>

      <div className="absolute left-1/2 top-10 transform -translate-x-1/2 w-full px-4">
        {/* Outros conteúdos, se necessário */}
      </div>
    </div>
  );
}
