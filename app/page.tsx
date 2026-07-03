import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import WhyKaizen from "../components/WhyKaizen";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <WhyKaizen />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
}