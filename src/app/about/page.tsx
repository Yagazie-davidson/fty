import BtnFloat from "@app/components/BtnFloat";
import CTAAbout from "@app/components/CTAAbout";
import FAQs from "@app/components/FAQs";
import Gallery from "@app/components/Gallery";
import HeroAbout from "@app/components/HeroAbout";
import Stats from "@app/components/Stats";
import Values from "@app/components/Values";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <HeroAbout />
      <BtnFloat />
      <Stats />
      {/* <Story /> */}
      <Values />
      <Gallery />
      <CTAAbout />
      <FAQs />
    </div>
  );
};

export default page;
