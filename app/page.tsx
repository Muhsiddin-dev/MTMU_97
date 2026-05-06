import Stats from "@/components/about/Stats";
import HeroSection from "@/components/Home/HeroSection";
import PartiSection from "@/components/Parti/PartiSection";
import TeachersSection from "@/components/Teachers/TeachersSection";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <HeroSection />
      <Stats />
      <PartiSection />
      <TeachersSection />
    </>
  );
}
