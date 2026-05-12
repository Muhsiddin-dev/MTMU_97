import Stats from "@/components/about/Stats";
import HeroSection from "@/components/Home/HeroSection";
import StudentsSelect from "@/components/Students/StudentsSelect";
import SwipperAboutSection from "@/components/Swipper/SwipperAbout/SwipperAboutSection";
import TeachersSection from "@/components/Teachers/TeachersSection";
import Image from "next/image";
import CelebrationSection from "@/components/celebration/CelebrationSection";
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Home() {
  await delay(2000);

  return (
    <>
      <HeroSection />
      <Stats />
      <SwipperAboutSection />
      <CelebrationSection />
      <TeachersSection />
      <StudentsSelect />
    </>
  );
}
