import React, { ReactNode } from 'react'
import { NumberTicker } from './ui/number-ticker'

interface CardProps {
    title:  number
    description: string
    icon: ReactNode
}

function Card({ title, description, icon }: CardProps) {
    return (
        <div className='border flex items-center md:gap-3 gap-2 rounded-xl  md:p-3 p-2  md:w-70 bg-white'>
            <div className="p-2.5 rounded-2xl bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <NumberTicker
                    value={title || 0}
                    className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100"
                />
                <p>{description || "No description available"}</p>
            </div>
        </div>
    )
}

export default Card