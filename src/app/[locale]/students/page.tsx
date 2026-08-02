"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MoveLeft, Home,  WrenchIcon, Wrench } from 'lucide-react';
import { Config } from '@/config';


function Page() {
    const router = useRouter();
    return (
        <div className={`min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-${Config.DarkColorProject} px-4 transition-colors duration-300 w-full`}>
            <div className="text-center max-w-md w-full space-y-6">

                <div className="space-y-2  flex flex-col items-center justify-center">
                    <div className='text-center flex justify-center  w-full'>
                        <Wrench className='size-20 text-center  '/>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-neutral-200">
                        Дар холи Техники
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-neutral-400 max-w-xs mx-auto">
                        Мутаассифона, суроғаи воридшуда холо анчом наёфтаас, Корбарони мо кор карда истодаанд ва ба наздики ин сахифа ба анчом мерасад.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">

                    <button
                        onClick={() => router.back()}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 p-3 bg-white dark:bg-neutral-900 text-sm font-bold text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-neutral-800/50 hover:border-green-600 dark:hover:border-green-600 rounded-2xl transition-all duration-300 active:scale-98 shadow-sm"
                    >
                        <MoveLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                        <span>Баргаштан</span>
                    </button>

                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 text-sm font-bold text-white rounded-2xl transition-all duration-300 active:scale-98 shadow-md shadow-green-600/10"
                    >
                        <Home size={16} />
                        <span>Саҳифаи асосӣ</span>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Page