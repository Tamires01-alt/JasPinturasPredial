'use client';

import Navbar from "@/app/components/navBar";
import HomeSection from "@/app/components/home";
import Contact from "@/app/components/contact";
import Service from './components/service';
import OptionService from './components/optionService'
import ApresentationService from './components/apresentationService'
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsAppButton";
import AboutService from "./components/aboutService"
import SecurityService from "./components/securityService"
import GaleriaFotos from "./components/galeriaFotos"
import Antes1 from "@/public/assets/antes1.jpg"
import Depois1 from "@/public/assets/depois1.jpg"
import Antes2 from "@/public/assets/antes2.jpg"
import Depois2 from "@/public/assets/depois2.jpg"
import PresenteNoDigital from './components/PresenteNoDigital';

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { useState, useEffect } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true }) as any
  );;

  const [currentSlide, setCurrentSlide] = useState(0)

  const galeria = [
    {
      before: Antes1,
      after: Depois1,
      alt: "Reforma da fachada principal",
    },

  ];

  const images = [
    "/assets/imagemCarrosel13.jpg",
    "/assets/imagemCarrosel.jpeg",
    "/assets/imagemCarrosel1.jpeg",
    "/assets/imagemCarrosel2.jpeg",
    "/assets/imagemCarrosel3.jpeg",
    "/assets/imagemCarrosel10.jpg",
    "/assets/imagemCarrosel4.jpeg",
    "/assets/imagemCarrosel5.jpeg",
    "/assets/imagemCarrosel8.jpg",
    "/assets/imagemCarrosel9.jpg",
    "/assets/imagemCarrosel20.jpeg",
    "/assets/imagemCarrosel21.jpeg",
    "/assets/imagemCarrosel22.jpeg",
    "/assets/imagemCarrosel23.jpeg",
    "/assets/imagemCarrosel24.jpeg",
    "/assets/imagemCarrosel25.jpeg",
    "/assets/imagemCarrosel26.jpeg",
    "/assets/imagemCarrosel27.jpeg",
    "/assets/imagemCarrosel28.jpeg",
    "/assets/imagemCarrossel6.jpeg",
    "/assets/imagemCarrosel12.jpg",
    "/assets/imagemCarrossel7.jpeg",

  ];

  return (
    <div>
      <Navbar />
      <HomeSection />
      <Contact />
      <AboutService />
      <Service />
      <OptionService />
      <ApresentationService />
      <div className="flex flex-col gap-10 p-10 items-center justify-center min-h-screen bg-[#04426f]" id="fotos">

        <div className="max-w-3xl text-center text-white space-y-4">
          <h2 className="text-3xl font-bold">Uma Jornada de Transformação</h2>
          <p className="text-lg">
            Cada prédio tem uma história. E cada restauração é um capítulo novo que escrevemos com dedicação, técnica e muito orgulho.
          </p>
          <p className="text-lg">
            Acompanhe abaixo o dia a dia da nossa equipe durante a obra e veja o impacto que um trabalho feito com paixão pode gerar.
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card className="bg-transparent shadow-none border-none">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img
                        src={src}
                        alt={`Funcionário trabalhando - Imagem ${index + 1}`}
                        className="object-cover rounded-2xl w-full h-full max-h-[600px] transition-transform cursor-pointer duration-500 hover:scale-125"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}

          </CarouselContent>
          <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 cursor-pointer">
            <CarouselPrevious className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10 cursor-pointer">
            <CarouselNext className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
          </div>
        </Carousel>

        <div className="max-w-3xl text-center text-white space-y-4 mt-4 sm:mt-10">
          <h3 className="text-2xl font-semibold">O Resultado Final</h3>
          <p className="text-lg">
            Depois de dias de trabalho intenso, o que antes era desgaste e abandono, hoje é beleza e segurança restauradas.
          </p>
          <p className="text-lg">
            Veja o antes e depois dessa transformação completa, a prova do cuidado e comprometimento em cada detalhe.
          </p>
        </div>

        <GaleriaFotos galeria={galeria} interval={4000} />
      </div>

      <SecurityService />
      <Footer />
      <WhatsAppButton />
      <PresenteNoDigital />
    </div>
  );
}
