
import { FeatureGrid } from "@/components/services/FeatureGrid";
import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#141414]">
      <main className="py-10">
        <section className="">
          <div className="text-center">
            <h2 className="text-[#BDFF02] text-5xl font-bold mb-3 max-md:text-4xl max-sm:text-3xl">
              Our Smart Home Products
            </h2>
            <p className="text-[#7A7A7A] text-xl max-w-2xl mx-auto px-5">
              Explore our range of cutting-edge smart home products designed to make your life more convenient and your home more efficient.
            </p>
          </div>
          <FeatureGrid />
        </section>
      </main>
    </div>
  );
};

export default Services;