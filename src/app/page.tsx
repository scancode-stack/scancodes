import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HowItWorks from "./components/howitworks";
import QRCardSection from "./components/qrsection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <HowItWorks/>
    <QRCardSection/>
    <Footer/>
    </>
  );
}
