import Image from "next/image";
import Navbar from "@/app/components/navBar"; 
import HomeSection from "@/app/components/home";
import Contact from "@/app/components/contact";; 
import Service from './components/service';


export default function Home() {
  const imagens = [
    '/assets/predios.jpg',
    '/assets/predios.jpg',
    '/assets/predios.jpg',
    '/assets/predios.jpg',
    '/assets/predios.jpg'
  ];

  return (
    <div>
      <Navbar />
      <HomeSection />
      <Contact />
      <Service imagens={imagens}/>
    </div>
  );
}
