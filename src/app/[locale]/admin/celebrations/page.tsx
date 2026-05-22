"use client"

import React, { useEffect, useState } from 'react'
import { PartyPopper, Plus, Calendar, Trash2, Edit3, Image as ImageIcon, Trash, Pencil, Info } from 'lucide-react'
import Image from 'next/image'
import { Config } from '@/config'
import { useCelebrationStore } from '@/src/store/useStatsStore'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

function CelebrationsPage() {
    // Маълумоти намунавӣ (Mock Data)
    // const [events, setEvents] = useState([
    //     { id: 1, title: "Ғолибияти хонандагон дар олимпиада", description: "Хонандагони мактаби мо дар олимпиадаи шаҳрӣ сазовори ҷойҳои намоён гаштанд.", date: "25.04.2026", img: "" },
    //     { id: 2, title: "Ҷашни иди Наврӯз дар мактаб", description: "Хонандагони мо бо намоиши ҳунарҳои мардумӣ ва хони ҳафтсин омадани баҳорро пешвоз гирифтанд.", date: "21.03.2026", img: "" },
    //     { id: 3, title: "Маҷлиси падару модарон", description: "Дар муассиса маҷлиси умумии падару модарон оид ба натиҷаҳои таълим дар чоряки чорум ва омодагӣ ба имтиҳонҳои хатм баргузор гардад.", date: "10.05.2026", img: "/imagecopy.png" },
    // ])
    const { events, fetchEvents, isLoading } = useCelebrationStore()

    useEffect(() => {
        fetchEvents()
    }, [fetchEvents])


    return (
        <div className="space-y-8 animate-in fade-in duration-700">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-slate-200 dark:border-neutral-800 shadow-sm">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <PartyPopper className="text-green-600" size={28} />
                        Идоракунии Ҷашнҳо
                    </h1>
                    <p className="text-sm text-slate-500 font-medium mt-1">Чорабиниҳои мактабиро илова ва таҳрир кунед</p>
                </div>

                <button
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                >
                    <Plus size={20} /> Иловаи ҷашнхо
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events?.map((item) => (
                    <div key={item.id} className={`bg-white dark:bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer`}>
                        <div className="relative h-56 w-full overflow-hidden">
                            {
                                item.images && item.images.length > 0 ? (
                                    <img src={`https://to-dos-api.softclub.tj/images/${item.images[0].imageName}`} width={500} height={400} alt="" />
                                ) : (
                                    <div className={`absolute inset-0 bg-gray-200 dark:bg-[#010101] animate-pulse group-hover:scale-110 transition-transform duration-500`} />
                                )
                            }
                            <span className={`absolute top-4 left-4 z-10 bg-${Config.ColorProject} text-white text-xs px-3 py-1 rounded-full`}>{item.name}</span>
                        </div>
                        <div className="p-6">
                            <h3 className={`text-xl font-bold text-gray-800 dark:text-white group-hover:${Config.TextColor} transition-colors`}>
                                {item.name}
                            </h3>
                            <p className="text-gray-500 mt-3 text-sm line-clamp-3">
                                {item.description}
                            </p>
                        </div>
                        <div className='px-6 pb-2 flex items-center justify-between'>
                            <input className='size-4' type="checkbox" />
                            <button className='text-green-600'>
                                <Pencil />
                            </button>
                            <Dialog>
                                <DialogTrigger><Trash className='text-red-600' /></DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className='line-clamp-2 text-xl font-bold'>
                                            {item.name}
                                        </DialogTitle>
                                        <DialogDescription>
                                            ОЁ шумо хорич кардани хастет?
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <button className='text-gray-500 hover:text-gray-700 px-4 py-2 rounded-md transition-colors' onClick={() => { }}>Ба қафо</button>
                                        <button className='text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors' onClick={() => { }}>Бале</button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <button className='text-blue-600'>
                                <Info />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CelebrationsPage