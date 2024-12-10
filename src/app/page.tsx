"use client"

import { Hero5 } from "@/components/heroes";
import { CTA2 } from "@/components/cta";
import { FAQ2 } from "@/components/faq";
import { Stats2 } from "@/components/stats";
import { Footer1 } from "@/components/footer";

const LandingPage = () => {
  return (
    <div>
      <Hero5 />
      <CTA2 />
      <Stats2 />
      <FAQ2 />
    </div>
  );
};

export default LandingPage;
