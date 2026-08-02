'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { TypeStar } from '@/config/type'
import Card from '@/src/components/Card'
import { Input } from '@/src/components/ui/input'
import { Check, CircleQuestionMarkIcon, Square, SquareCheck, Star, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function Page() {
  const [IsOpenDialogInfo, setIsOpenDialogInfo] = useState<boolean>(false)
  const [DialogInfo, setDialogInfo] = useState<TypeStar>()
  const stars = [
    {
      id: 1,
      img: "/Teacher.png",
      name: "Muhsiddin Nazarov",
      comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунандБехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунандБехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
      star: 5,
      email: "muhsinazarov21@gmail.com",
      status: "pendding",
      phoneNumber: "+992907593994"
    },
    {
      id: 2,
      img: "/Teacher.png",
      name: "Muhsiddin Nazarov",
      comment: "Бехтарин мактаб ман",
      star: 5,
      email: "muhsinazarov21@gmail.com",
      status: "acept",
      phoneNumber: "+992907593994"
    },
    {
      id: 3,
      img: "/Teacher.png",
      name: "Muhsiddin Nazarov",
      comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
      star: 5,
      email: "muhsinazarov21@gmail.com",
      status: "cancele",
      phoneNumber: "+992907593994"
    },
    {
      id: 4,
      img: "/Teacher.png",
      name: "Muhsiddin Nazarov",
      comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
      star: 4,
      email: "muhsinazarov21@gmail.com",
      status: "onview",
      phoneNumber: "+992907593994"
    },
    {
      id: 5,
      img: "/Teacher.png",
      name: "Muhsiddin Nazarov",
      comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
      star: 3,
      email: "muhsinazarov21@gmail.com",
      status: "onview",
      phoneNumber: "+992907593994"
    },
    {
      id: 6,
      img: "/Teacher.png",
      name: "Muhsiddin Nazarov",
      comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
      star: 2,
      email: "muhsinazarov21@gmail.com",
      status: "onview",
      phoneNumber: "+992907593994"
    },
    {
      id: 7,
      img: "/Teacher.png",
      name: "Muhsiddin Nazarov",
      comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
      star: 1,
      email: "muhsinazarov21@gmail.com",
      status: "onview",
      phoneNumber: "+992907593994"
    },
  ]

  const handleInfo = (e: TypeStar) => {
    setDialogInfo(e)
    setIsOpenDialogInfo(true)
  }
  return (
    <section className='flex flex-col space-y-4'>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-1.5 sm:gap-2 lg:gap-3 2xl:gap-3.5 w-full ">
        <Card
          icon={<Star size={26} className="text-yellow-400 dark:text-yellow-400" />}
          title={13}
          description="Каментария"
        />
        <Card
          icon={<Star size={26} className="text-emerald-600 dark:text-emerald-400" />}
          title={13}
          description="Кабул шуда"
        />
        <Card
          icon={<Star size={26} className="text-amber-500 dark:text-amber-400" />}
          title={13}
          description="Интизор"
        />
        <Card
          icon={<Star size={26} className="text-red-600 dark:text-red-400" />}
          title={13}
          description="Рад Шуда"
        />
      </div>
      <Dialog open={IsOpenDialogInfo} onOpenChange={setIsOpenDialogInfo}>
        <DialogContent className='min-w-xl'>
          <DialogHeader>
            <DialogTitle className=' text-xl font-bold'>
              {DialogInfo?.name}
            </DialogTitle>
            <DialogDescription className='flex flex-col'>
              <span>Номер: {DialogInfo?.phoneNumber}</span>
              <span>Статус: {DialogInfo?.status == "pendding" ? "Нав" : DialogInfo?.status == "acept" ? "Кабул Шуда" : DialogInfo?.status == "cancele" ? "Рад Шуда" : "Дар намоиш"}</span>
            </DialogDescription>
          </DialogHeader>
          <div key={DialogInfo?.id} className='rounded-2xl group border p-3 hover:shadow duration-300'>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-between items-center '>
                <div className='flex items-center gap-2'>
                  <Image src={`${DialogInfo?.img}`} width={500} height={450} className='w-10 h-10 rounded-full object-cover' alt={"Корбар"} />
                  <div className='flex flex-col'>
                    <h1 className='font-semibold '>{DialogInfo?.name}</h1>
                    <p className='text-sm'>{DialogInfo?.email}</p>
                  </div>
                </div>
                <div>
                  {
                    DialogInfo?.star == 5 ? '⭐⭐⭐⭐⭐' : DialogInfo?.star == 4 ? '⭐⭐⭐⭐' : DialogInfo?.star == 3 ? '⭐⭐⭐' : DialogInfo?.star == 2 ? '⭐⭐⭐⭐' : '⭐'
                  }
                </div>
              </div>
              <div className='max-h-25 overflow-auto'>
                <p className=''>{DialogInfo?.comment}</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button className='bg-red-600 text-white hover:text-white/70 px-4 py-2 rounded-md transition-colors'><Trash2 /></Button>
            <Button type='button' className='text-white  hover:text-white/70 px-4 py-2 rounded-md transition-colors'><CircleQuestionMarkIcon /></Button>
            <Button className='text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition-colors' onClick={() => { }}><Check /></Button>
            <Button className='text-white bg-blue-600  hover:bg-blue-700 px-4 py-2 rounded-md transition-colors' onClick={() => { }}>{DialogInfo?.status == "onview" ? <SquareCheck /> : <Square />}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className='flex  items-start gap-3'>
        <Input className='w-120 h-10' placeholder='Чустучу...' type="text" />
        <select className='h-10  min-w-0 rounded-lg border  bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground  focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40' name="" id="">
          <option value="">Хама</option>
          <option value="">Дар интизор</option>
          <option value="">Кабул шуда</option>
          <option value="">Рад шуда</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {stars.map((e) => (
          <div onClick={() => handleInfo(e)} key={e.id} className='rounded-2xl group border p-3 hover:shadow duration-300'>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-between items-center hover:cursor-grab '>
                <div className='flex items-center gap-2'>
                  <Image src={`${e?.img}`} width={500} height={450} className='w-10 h-10 rounded-full object-cover' alt={e.name} />
                  <div className='flex flex-col'>
                    <h1 className='font-semibold '>{e.name}</h1>
                    <p className='text-sm'>{e.email}</p>
                  </div>
                </div>
                <div>
                  {
                    e.star == 5 ? '⭐⭐⭐⭐⭐' : e.star == 4 ? '⭐⭐⭐⭐' : e.star == 3 ? '⭐⭐⭐' : e.star == 2 ? '⭐⭐⭐⭐' : '⭐'
                  }
                </div>
              </div>
              <div>
                <p className='group-focus:line-clamp-none line-clamp-4 '>{e.comment}</p>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </section>
  )
}

export default Page