
import { Hero } from "@/components/sections/Hero";
// import { Mission } from "@/components/sections/MissionAndVisionBoard";

import { HowItWorks } from "@/components/sections/HowItWorks";
import { CustomerStory } from "@/components/sections/CustomerStory";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";
import { Mission } from "@/components/sections/Mission";
import Technologies from "@/components/sections/Technologies";
import Values from "@/components/sections/Values";

const Index = () => {
  return (
    <div className="min-h-screen bg-[rgba(13,13,13,1)] text-white">
      <Hero />
      <Mission />
      <Values />
      <HowItWorks />
      <CustomerStory />
      <Testimonials />
      <CallToAction />
      <Technologies />
    </div>
  );
};

export default Index;
