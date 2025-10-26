import React from "react";
import Hero from "@/app/components/Home/Hero";
import AboutSection from "@/app/components/Home/About";
import Courses from "@/app/components/Home/Courses";
import CEO from "@/app/components/Home/CEO";

import Collective from "@/app/components/Home/Collective";
import QuantumGuild from "@/app/components/Home/QuantumGuild";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAUCO",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Courses />
      <CEO />
      <Collective />
      <QuantumGuild />
    </main>
  );
}
