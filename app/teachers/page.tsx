import AdministrationPage from '@/components/Teachers/AdministrationPage'
import TeachersSection from '@/components/Teachers/TeachersSection'
import React from 'react'

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function page() {
  await delay(2000);
  return (
    <section>
      <AdministrationPage />
      <TeachersSection />
    </section>
  )
}

export default page