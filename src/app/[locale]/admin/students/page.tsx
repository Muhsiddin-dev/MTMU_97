"use client"

import React, { useEffect, useState } from 'react'
import {  Plus, Image as ImageIcon, Pencil, Info, Users, Trash } from 'lucide-react'
import { Config } from '@/config'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Student, useStudentsStore } from '@/src/store/useStudentsStore'
import { DeleteStudent } from '@/src/api/students'

function Page() {
  const { students, GetDataStudents, isLoading } = useStudentsStore()

  //Add Student
  const [IsOpenDialogAdd, setIsOpenDialogAdd] = useState(false)
  const [IsFullNameAdd, setIsFullNameAdd] = useState("")
  const [IsRankAdd, setIsRankAdd] = useState("")
  const [IsMottoAdd, setIsMottoAdd] = useState("")
  const [IsCompetitionAdd, setIsCompetitionAdd] = useState("")
  const [IsDescriptionAdd, setIsDescriptionAdd] = useState("")

  //Edit Student
  const [IsOpenDialogEdit, setIsOpenDialogEdit] = useState(false)
  const [IsFullNameEdit, setIsFullNameEdit] = useState("")
  const [IsCompetitionEdit, setIsCompetitionEdit] = useState("")
  const [IsRankEdit, setIsRankEdit] = useState("")
  const [IsMottoEdit, setIsMottoEdit] = useState("")
  const [IsDescriptionEdit, setIsDescriptionEdit] = useState("")
  const [preview, setPreview] = useState<string | null>(null);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    GetDataStudents()
  }, [GetDataStudents])

  const handleAddStudent = () => {
    const newStudent = {
      fullName: IsFullNameAdd,
      photoUrl: preview,
      competition: IsCompetitionAdd,
      rank: IsRankAdd,
      motto: IsMottoAdd,
      description: IsDescriptionAdd
    }

    // addStudent(newStudent)
    setIsOpenDialogAdd(false)
    // setIsFullNameAdd("")
    // setIsSpecialtyAdd("")
    // setIsBirthDateAdd("")
    // setIsExperienceAdd("")
    // setIsMottoAdd("")
    // setIsDescriptionAdd("")
    // setPreview(null)
  }

  const handleSaveData = (item: Student) => {
    setIsFullNameEdit(item.fullName)
    setIsCompetitionEdit(item.competition)
    setIsRankEdit(item.rank)
    setIsMottoEdit(item.motto)
    setIsDescriptionEdit(item.description)
    setIsOpenDialogEdit(true)
  }

  const handleEditStudent = () => {
    setIsOpenDialogEdit(false)
    const EditStudent = {
      fullName: IsFullNameEdit,
      photoUrl: preview,
      rank: IsRankEdit,
      competition: IsCompetitionEdit,
      motto: IsMottoEdit,
      description: IsDescriptionEdit
    }



  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-slate-200 dark:border-neutral-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="text-green-600" size={28} />
            Идоракунии Шогирдон
          </h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Шогирдони мактабро илова ё таҳрир кунед</p>
        </div>

        <Dialog open={IsOpenDialogAdd} onOpenChange={setIsOpenDialogAdd}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 h-12 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-green-600/20 active:scale-95">
              <Plus size={20} /> Иловаи Шогирдон
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-4xl max-h-[90vh] w-full overflow-y-auto rounded-2xl p-4 dark:bg-zinc-900">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-800 dark:text-white">
                Илова кардани Шогирдони нав
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
                Барои илова кардан лутфан тамоми майдонҳоро пур кунед!
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col space-y-4 my-2">
              <label className="border-2 border-dashed border-green-400 rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer hover:bg-green-50/30 dark:hover:bg-green-950/10 transition-all duration-300 overflow-hidden relative group">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-6">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300 group-hover:text-green-600 transition-colors">
                      Акси Хонанда
                    </h1>
                    <p className="text-xs text-gray-400 mt-1">
                      Суратро инҷо бор кунед
                    </p>
                  </div>
                )}
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Номи пурра</label>
                  <Input value={IsFullNameAdd} onChange={(e) => setIsFullNameAdd(e.target.value)} type="text" placeholder="Ному Hacaб" className="rounded-xl border-gray-200 dark:border-zinc-800 focus-visible:ring-green-500" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Шиор</label>
                  <Input value={IsMottoAdd} onChange={(e) => setIsMottoAdd(e.target.value)} type="text" placeholder="Шиори ҳаётии омӯзгор" className="rounded-xl border-gray-200 dark:border-zinc-800 focus-visible:ring-green-500" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Номи Озмун</label>
                <Input value={IsCompetitionAdd} onChange={(e) => setIsCompetitionAdd(e.target.value)} type="text" placeholder="хонанда Физика" className="rounded-xl border-gray-200 dark:border-zinc-800 focus-visible:ring-green-500" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Сазовори Чой </label>
                <Input value={IsRankAdd} onChange={(e) => setIsRankAdd(e.target.value)} type="number" placeholder="Чои 1" className="rounded-xl border-gray-200 dark:border-zinc-800 focus-visible:ring-green-500" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Тавсиф</label>
                <textarea value={IsDescriptionAdd} onChange={(e) => setIsDescriptionAdd(e.target.value)} placeholder="Маълумоти муфассал дар бораи хонанда..." className="flex min-h-20 w-full rounded-xl border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:text-white" />
              </div>
            </div>

            <DialogFooter className="gap-2 sm:gap-0 border-t pt-4 dark:border-zinc-800">
              <Button
                type="button"
                variant="outline"
                className="rounded-xl px-5 border-gray-200 dark:border-zinc-800 dark:text-gray-300"
                onClick={() => setIsOpenDialogAdd(false)}
              >
                Қафо
              </Button>
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 font-semibold"
                onClick={handleAddStudent}
                disabled={isLoading}
              >
                Сабт кардан
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ?
          (
            <div className="bg-white animate-pulse w-full h-full dark:bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-neutral-800">

            </div>
          ) : (students?.map((item) => (
            <div key={item.id} className="bg-white dark:bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 dark:border-neutral-800">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item?.photoUrl || '/placeholder.jpg'}
                  alt={item.fullName}
                  width={500}
                  height={256}
                  className="w-full h-full border-b object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className='absolute top-4 left-4 right-4 flex justify-between items-center z-10'>
                  <span className="bg-white/90 dark:bg-[#0f0f0f] dark:border-neutral-800 backdrop-blur-sm text-green-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm border border-green-100">
                    {item.createdAt ? new Date(item.createdAt).toLocaleDateString('ru-RU', {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit',
                    }) : 'Сана нест'}
                  </span>
                  <span className={`bg-${Config.ColorProject} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md`}>
                    {item.rank || "Рутба нест"} 🎖️
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold text-gray-800 dark:text-white group-hover:${Config.TextColor} transition-colors duration-300`}>
                  {item.fullName}
                </h3>
                <p className={`${Config.TextColor} italic mt-1`}>
                  <span className='text-black dark:text-white'>Озмуни:</span> "{item.competition || "Нест"}"
                </p>

                <p className={`${Config.TextColor} italic text-xs font-medium mt-1`}>
                  <span className='text-black dark:text-white'>Шиор:</span> "{item.motto}"
                </p>

                <div className="h-px w-full bg-gray-100 dark:bg-neutral-800 my-4" />

                <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className='px-6 pb-4 flex items-center justify-between'>
                <Dialog>
                  <DialogTrigger asChild>
                    <input className='size-4 text-red-600 hover:cursor-pointer hover:scale-90 transition-all duration-300' type="checkbox" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className='line-clamp-2 text-xl font-bold'>
                        {item.fullName}
                      </DialogTitle>
                      <DialogDescription>
                        Оё шумо мехоҳед ки {item.fullName}-ро дар бозор нишон диҳед?
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogTrigger asChild>
                        <Button type='button' className='text-white hover:text-white/70 px-4 py-2 rounded-md transition-colors'>Ба қафо</Button>
                      </DialogTrigger>
                      <Button className='text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition-colors' onClick={() => { }}>Бале</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog open={IsOpenDialogEdit} onOpenChange={setIsOpenDialogAdd}>
                  <DialogTrigger asChild>
                    <Pencil onClick={() => handleSaveData(item)} className='text-green-600 hover:cursor-pointer hover:scale-90 transition-all duration-300' />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className='line-clamp-2 text-xl font-bold'>
                        {item.fullName}
                      </DialogTitle>
                      <DialogDescription>
                        Оё шумо мехоҳед ки маълумоти {item.fullName}-ро иваз кунед?
                      </DialogDescription>
                    </DialogHeader>
                    <div className='flex flex-col space-y-3'>
                      <label className="border-2 border-dashed border-green-400 rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer hover:bg-green-50/30 dark:hover:bg-green-950/10 transition-all duration-300 overflow-hidden relative group">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept="image/*"
                        />
                        {item?.photoUrl ? (
                          <img
                            src={item?.photoUrl || '/placeholder.jpg'}
                            alt={item?.fullName || 'Student Photo'}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center p-6">
                            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300 group-hover:text-green-600 transition-colors">
                              Акси Хонанда
                            </h1>
                            <p className="text-xs text-gray-400 mt-1">
                              Суратро инҷо бор кунед
                            </p>
                          </div>
                        )}
                      </label>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Номи пурра</label>
                          <Input value={IsFullNameEdit} onChange={(e) => setIsFullNameEdit(e.target.value)} type="text" placeholder="Ному Насаб" className="rounded-xl border-gray-200 dark:border-zinc-800 focus-visible:ring-green-500" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Шиор</label>
                          <Input value={IsMottoEdit} onChange={(e) => setIsMottoEdit(e.target.value)} type="text" placeholder="Шиори ҳаётии омӯзгор" className="rounded-xl border-gray-200 dark:border-zinc-800 focus-visible:ring-green-500" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Номи Озмун</label>
                        <Input value={IsCompetitionEdit} onChange={(e) => setIsCompetitionEdit(e.target.value)} type="text" placeholder="хонанда Физика" className="rounded-xl border-gray-200 dark:border-zinc-800 focus-visible:ring-green-500" />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Сазовори Чой </label>
                        <Input value={IsRankEdit} onChange={(e) => setIsRankEdit(e.target.value)} type="number" placeholder="Чои 1" className="rounded-xl border-gray-200 dark:border-zinc-800 focus-visible:ring-green-500" />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Тавсиф</label>
                        <textarea value={IsDescriptionEdit} onChange={(e) => setIsDescriptionEdit(e.target.value)} placeholder="Маълумоти муфассал дар бораи хонанда..." className="flex min-h-20 w-full rounded-xl border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:text-white" />
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogTrigger asChild>
                        <Button type='button' className='text-white hover:text-white/70 px-4 py-2 rounded-md transition-colors'>Ба қафо</Button>
                      </DialogTrigger>
                      <Button className='text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition-colors' onClick={() => { handleEditStudent() }}>Сабт кардан</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Trash className='text-red-600 hover:cursor-pointer hover:scale-90 transition-all duration-300' />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className='line-clamp-2 text-xl font-bold'>
                        {item.fullName}
                      </DialogTitle>
                      <DialogDescription>
                        Оё шумо дар ҳақиқат мехоҳед ин студентро хориҷ кунед?
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogTrigger asChild>
                        <Button type='button' className='text-white hover:text-white/70 px-4 py-2 rounded-md transition-colors'>Ба қафо</Button>
                      </DialogTrigger>
                      <Button
                        className='text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors'
                        onClick={async () => {
                          try {
                            await DeleteStudent(item.id);
                            window.location.reload();
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        Нест кардан
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <button className='text-blue-600 hover:scale-90 transition-all duration-300'>
                  <Info />
                </button>
              </div>
            </div>
          )))}
      </div>
    </div >
  )
}

export default Page