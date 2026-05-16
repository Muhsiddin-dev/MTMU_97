import Stats from "@/src/components/about/Stats";
import HeroSection from "@/src/components/Home/HeroSection";
import StudentsSelect from "@/src/components/Students/StudentsSelect";
import SwipperAboutSection from "@/src/components/Swipper/SwipperAbout/SwipperAboutSection";
import TeachersSection from "@/src/components/Teachers/TeachersSection";
import Image from "next/image";
import CelebrationSection from "@/src/components/celebration/CelebrationSection";
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
