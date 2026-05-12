import CelebrationSection from '@/components/celebration/CelebrationSection'
import { Config } from '@/config'
import React from 'react'

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function page() {
    await delay(2000);

    return (
        <section className={`pt-20 bg-gray-50 dark:bg-${Config.DarkColorProject}`}>
            <CelebrationSection />
        </section>
    )
}

export default page