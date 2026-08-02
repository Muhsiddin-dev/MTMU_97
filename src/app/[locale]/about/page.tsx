
import Location from '@/src/components/about/Location'
import Stats from '@/src/components/about/Stats'
import HeroSectionAbout from '@/src/components/about/HeroSectionAbout'
import React from 'react'
import SwipperAboutSection from '@/src/components/Swipper/SwipperAbout/SwipperAboutSection'
import SectionAboutSchool from '@/src/components/about/SectionAboutSchool'
import Star from '@/src/components/star/star'


async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function page() {
  await delay(2000);
  return (
    <>
      <HeroSectionAbout />
      <Stats />
      <SectionAboutSchool />
      <SwipperAboutSection />
      <Star />
      <Location />
    </>
  )
}

export default page