import { Input } from '@/src/components/ui/input'
import { routes } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <section className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex items-center justify-center p-3 pb-0 transition-colors duration-300">
            <div className="bg-white dark:bg-[#0f0f0f] border border-gray-100 dark:border-neutral-800 rounded-[2rem] shadow-2xl shadow-gray-200/50 dark:shadow-none p-8 md:p-11 max-w-md w-full transition-all">

                <div className="flex flex-col items-center mb-5">
                    <div className='bg-${Config.ColorProject} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg shadow-green-100 dark:shadow-none'>
                        <Image
                            src="/mtmu_97.png"
                            alt="Logo"
                            width={50}
                            height={50}
                            className='w-full h-full rounded-xl '
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Хуш омадед</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-center">
                        Барои ба қайд гирифтан маълумотро пур кунед
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Почтаи электронӣ</label>
                        <Input
                            type="email"
                            placeholder="example@gmail.com"
                            className="h-12 rounded-xl border-gray-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white focus:ring-green-500 transition-all"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Рамз</label>
                        <Input
                            type="password"
                            placeholder="••••••••"
                            className="h-12 rounded-xl border-gray-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white focus:ring-green-500 transition-all"
                        />
                    </div>
                </div>

                <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200/50 dark:shadow-none transition-all active:scale-[0.98] cursor-pointer">
                    Бақайдгирӣ
                </button>

                <p className="text-center mt-5 text-gray-600 dark:text-gray-400 text-sm">
                    Аккаунт дорам?{' '}
                    <Link href={routes.Login} className="text-green-600 dark:text-green-500 font-bold cursor-pointer hover:underline">
                        Ворид шудан
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default page