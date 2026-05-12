
import Location from '@/components/about/Location'
import Stats from '@/components/about/Stats'
import HeroSectionAbout from '@/components/about/HeroSectionAbout'
import React from 'react'
import SwipperAboutSection from '@/components/Swipper/SwipperAbout/SwipperAboutSection'


async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function page() {
  await delay(2000);
  return (
    <>
      <HeroSectionAbout />
      <Stats />
      <SwipperAboutSection />
      <Location />
    </>
  )
}

export default page