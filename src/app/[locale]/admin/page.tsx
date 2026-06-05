import React from 'react'
import Card from '../../../components/Card'
import { Award, Users, GraduationCap, School } from 'lucide-react'
import DirectionsMap from '@/src/components/about/DirectionsMap'

export default function page() {
  return (
    <div className='flex flex-col space-y-4'>
      <div className="flex flex-wrap gap-2 justify-center w-full p-2">
        <Card
          icon={<Award size={26} className="text-emerald-600 dark:text-emerald-400" />}
          title="13"
          description="Сол Таҷриба"
        />
        <Card
          icon={<Users size={26} className="text-blue-600 dark:text-blue-400" />}
          title="1,200"
          description="Хонандагон"
        />
        <Card
          icon={<GraduationCap size={26} className="text-teal-600 dark:text-teal-400" />}
          title="85"
          description="Омӯзгорон"
        />
        <Card
          icon={<School size={26} className="text-amber-600 dark:text-amber-400" />}
          title="40"
          description="Синфхонаҳо"
        />
        <Card
          icon={<GraduationCap size={26} className="text-indigo-600 dark:text-indigo-400" />}
          title="85"
          description="Рейтинг"
        />
        <Card
          icon={<Users size={26} className="text-rose-600 dark:text-rose-400" />}
          title="100"
          description="Шогирдони Фаол"
        />
        <Card
          icon={<Award size={26} className="text-sky-600 dark:text-sky-400" />}
          title="13"
          description="Ҷашнҳои Қабулшуда"
        />
      </div>
      <div>
        <DirectionsMap />
      </div>
    </div>
  )
}
