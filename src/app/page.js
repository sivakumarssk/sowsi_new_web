import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import DeliveryDna from "@/components/DeliveryDNA";
import OurWork from "@/components/OurWork";
import ReadyToBuild from "@/components/ReadyToBuild";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
       <AboutUs />
      <WhyChooseUs />
      <DeliveryDna/>
      <OurWork/>
      <ReadyToBuild/>
      <Testimonials/>
      <FAQSection/>
      <Footer/>
    </>
  );
}