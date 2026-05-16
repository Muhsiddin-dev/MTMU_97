import { Config } from '@/config'
import React from 'react'

function Location() {
    return (
        <div className={`bg-gray-50 dark:bg-${Config.DarkColorProject} md:px-0 px-3 py-5 md:min-h-screen`}>
            <div className='max-w-7xl flex flex-col gap-5 w-full m-auto'>
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Макони Мо</h2>
                    <div className={`h-1 w-20 bg-${Config.ColorProject} mt-2`}></div>
                </div>
                <div className='border bg-gray-100 dark:bg-neutral-700 rounded-2xl w-full md:h-[75vh] h-[50vh]'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10971.77783904659!2d68.72798633788658!3d38.57714463472441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d328fc8d5673%3A0x6b38baed6f624afb!2z0JzQsNC60YLQsNCx0LggTjk3INCx0LAg0L3QvtC80Lgg0JDQsdC00YPQu9Kz0LDSmyDQntC10LI!5e0!3m2!1sru!2s!4v1778526209924!5m2!1sru!2s" width="600" height="450" style={{ border: 0, width: '100%', height: '100%', borderRadius: '1rem' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Location