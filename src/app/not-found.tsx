"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MoveLeft, Home } from 'lucide-react';
import "././[locale]/globals.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617] px-4 transition-colors duration-300 w-full">
      <div className="text-center max-w-md w-full space-y-6">
        
        <div className="space-y-2 select-none pointer-events-none">
          <h1 className="text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-400 dark:from-white dark:to-neutral-800 leading-none">
            404
          </h1>
          <h2 className="text-xl font-bold text-slate-800 dark:text-neutral-200">
            Саҳифа ёфт нашуд
          </h2>
          <p className="text-sm text-slate-500 dark:text-neutral-400 max-w-xs mx-auto">
            Мутаассифона, суроғаи воридшуда нодуруст аст ё ин саҳифа нест карда шудааст.
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
  );
}