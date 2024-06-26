import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Hero2 from "@/components/Hero2";
import ServicesSection from '../../components/ServicesSection/index';
import OurCompanySection from "@/components/OurCompanySection";
import Hero3 from "@/components/Hero3";

export const metadata: Metadata = {
  title: "Fluid Power |  Create, Enhance & Sustain",
  description: "We are based out of UAE, we have the state-of-the-art technology and years of expertise necessary to Repair & maintain all kinds of hydraulic equipment, and Fabrication work mainly focused on A/V companies.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <Hero2/>
      {/* <Hero3/> */}
      {/* <Brands /> */}
      {/* <Feature /> */}
      <OurCompanySection/>
      <ServicesSection/>
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
