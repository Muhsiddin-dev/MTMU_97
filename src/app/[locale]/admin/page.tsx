import React from 'react'
import Card from '../../../components/Card'
import { Award, Users, GraduationCap, School, Star, Verified } from 'lucide-react'
import DirectionsMap from '@/src/components/about/DirectionsMap'

export default function page() {
  return (
    <div className='flex flex-col space-y-4'>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-1.5 sm:gap-2 lg:gap-3 2xl:gap-3.5 w-full md:p-2">
        <Card
          icon={<Award size={26} className="text-emerald-600 dark:text-emerald-400" />}
          title={13}
          description="Соли Таҷрибадори"
        />
        <Card
          icon={<GraduationCap size={26} className="text-blue-600 dark:text-blue-400" />}
          title={1200}
          description="Хонандагон"
        />
        <Card
          icon={<Users size={26} className="text-teal-600 dark:text-teal-400" />}
          title={85}
          description="Омӯзгорон"
        />
        <Card
          icon={<School size={26} className="text-amber-600 dark:text-amber-400" />}
          title={40}
          description="Синфхона"
        />
        <Card
          icon={<Star size={26} className="text-yellow-600 dark:text-yellow-400" />}
          title={85}
          description="Каментария"
        />
        <Card
          icon={<Star size={26} className="text-red-600 dark:text-red-400" />}
          title={10}
          description="Каментария Рад шуда"
        />
        <Card
          icon={<Users size={26} className="text-rose-600 dark:text-rose-400" />}
          title={100}
          description="Шогирдони Фаол"
        />
        <Card
          icon={<Verified size={26} className="text-sky-600 dark:text-sky-400" />}
          title={13}
          description="Ҷашнҳои Қабулшуда"
        />
      </div>
      <div>
        <DirectionsMap />
      </div>
    </div>
  )
}
