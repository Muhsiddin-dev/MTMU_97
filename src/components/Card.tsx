import React, { ReactNode } from 'react'

interface CardProps {
    title: string | number
    description: string
    icon: ReactNode
}

function Card({ title, description, icon }: CardProps) {
    return (
        <div className='border flex items-center gap-3 rounded-xl  p-3  w-70 bg-white'>
            <div className="p-2.5 rounded-2xl bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h1 className='text-2xl font-bold'>{title || "0"}</h1>
                <p>{description || "No description available"}</p>
            </div>
        </div>
    )
}

export default Card