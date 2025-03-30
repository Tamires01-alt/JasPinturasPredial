import Navbar from "@/app/components/navBar";
import HomeSection from "@/app/components/home";
import Contact from "@/app/components/contact";;
import Service from './components/service';
import OptionService from './components/optionService'
import ApresentationService from './components/apresentationService'
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsAppButton";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection  />
      <Contact />
      <Service  />
      <OptionService />
      <ApresentationService />
      <Footer />
      <WhatsAppButton /> 
    </div>
  );
}
