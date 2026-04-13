import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import GalleryStrip from "@/components/sections/GalleryStrip";
import Sectors from "@/components/sections/Sectors";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <BrandsMarquee />
      <GalleryStrip />
      <Sectors />
      <Process />
      <WhyUs />
      <FAQ />
      <CTA />
    </>
  );
}
