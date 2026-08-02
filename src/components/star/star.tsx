'use client'
import { Config } from '@/config'
import SwipperStarSection from '../Swipper/SwipperStar/SwipperStarSection'
import DialogPostStar from './DialogPostStar'
import { useState } from 'react'

function Star() {
    const [DialogOpenPostStar, setDialogOpenPostStar] = useState(false)

    return (
        <section className={` md:px-0 px-4  bg-gray-50 dark:bg-${Config.DarkColorProject}`}>
            <div className="max-w-350  mx-auto ">
                <div className='flex justify-between items-start'>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Моро тавсия медиханд</h2>
                        <div className={`h-1 w-20 bg-${Config.ColorProject} mt-2`}></div>
                    </div>
                    <DialogPostStar open={DialogOpenPostStar} onOpenChange={setDialogOpenPostStar} data={{}} >
                        <p onClick={() => setDialogOpenPostStar(true)} className={`${Config.TextColor} font-semibold hover:underline`}>Манхам тавсия донан мехохам →</p>
                    </DialogPostStar>
                </div>

                <SwipperStarSection />
            </div>
        </section>
    )

}

export default Star