import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
// import TestimonialsStrip from "@/components/TestimonialsStrip";
import FreelanceCTA from "@/components/FreelanceCTA";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <About />
      {/* <TestimonialsStrip /> */}
      <FreelanceCTA />
    </>
  );
}
