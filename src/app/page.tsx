import BtnFloat from "@app/components/BtnFloat";
import CTA from "@app/components/CTA";
import Features from "@app/components/Features";
import Hero from "@app/components/Hero";
import MoreFeatures from "@app/components/MoreFeatures";
import Stats from "@app/components/Stats";
import Testimonials from "@app/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <BtnFloat />
      <Testimonials />
      <Stats />
      <Features />
      <MoreFeatures />
      {/*<Testimonials />*/}
      <CTA />
    </div>
  );
}
