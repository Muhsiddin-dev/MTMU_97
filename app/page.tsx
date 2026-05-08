import IMAGES from "@/components/about/IMAGES";
import Stats from "@/components/about/Stats";
import HeroSection from "@/components/Home/HeroSection";
import PartiSection from "@/components/Parti/PartiSection";
import StudentsSelect from "@/components/Students/StudentsSelect";
import TeachersSection from "@/components/Teachers/TeachersSection";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <HeroSection />
      <Stats />
      <IMAGES />
      <PartiSection />
      <TeachersSection />
      <StudentsSelect />
    </>
  );
}
