import React from 'react'
import Card from '../../../components/Card'
import { Award, Users, GraduationCap, School } from 'lucide-react'

export default function page() {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex gap-2 justify-between '>
        <Card icon={<Award size={28} />} title="13" description="Сол Тачриба" />
        <Card icon={<Users size={28} />} title="1,200" description="Хонандагон" />
        <Card icon={<GraduationCap size={28} />} title="85" description="Омӯзгорон" />
        <Card icon={<School size={28} />} title="40" description="Синфхонаҳо" />
      </div>
      <div className='flex gap-2 justify-center '>
        <Card icon={<GraduationCap size={28} />} title="85" description="Рейтинг" />
        <Card icon={<Users size={28} />} title="100" description="Шогирдони Фаол" />
        <Card icon={<Award size={28} />} title="13" description="Чанхои Кабул шуда" />
      </div>
    </div>
  )
}
