import React from "react";
import Hero from "@/app/components/Home/Hero";
import Companies from "@/app/components/Home/Companies";
import Courses from "@/app/components/Home/Courses";
import CEO from "@/app/components/Home/CEO";
import Mentor from "@/app/components/Home/Mentor";
import Testimonial from "@/app/components/Home/Testimonials";
import ContactForm from "@/app/components/ContactForm";
import Newsletter from "@/app/components/Home/Newsletter";
import Collective from "@/app/components/Home/Collective";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAUCO",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Courses />
      <CEO />
      <Collective />
    </main>
  );
}
