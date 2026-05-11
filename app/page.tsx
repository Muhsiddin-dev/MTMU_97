import Stats from "@/components/about/Stats";
import HeroSection from "@/components/Home/HeroSection";
import PartiSection from "@/components/Parti/PartiSection";
import StudentsSelect from "@/components/Students/StudentsSelect";
import SwipperAboutSection from "@/components/Swipper/SwipperAbout/SwipperAboutSection";
import TeachersSection from "@/components/Teachers/TeachersSection";
import Image from "next/image";
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Home() {
  await delay(5000);
  
  return (
    <>
      <HeroSection />
      <Stats />
      <SwipperAboutSection />
      <PartiSection />
      <TeachersSection />
      <StudentsSelect />
    </>
  );
}
