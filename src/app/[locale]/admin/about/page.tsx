"use client"

import React, { useState } from 'react'
import { Save, Image as ImageIcon, FileText, School } from 'lucide-react'

const initialData = {
  schoolName: "МТМУ №97",
  directorName: "Оев Абдулҳақ Мансурович",
  description: "Муассисаи таҳсилоти миёнаи умумии №97 бо мақсади фароҳам овардани шароити беҳтарини таълимӣ барои хонандагони ноҳияи Сино таъсис дода шудааст. Мактаби мо бо номи олими шинохта, профессор Оев Абдулҳақ Мансурович номгузорӣ шудааст, ки ин барои ҳар як хонанда ва омӯзгор ифтихори бузург аст. Дар тӯли фаъолияти худ, муассиса даҳҳо хатмкунандагони муваффақро ба ҳаёт гуселонидааст, ки имрӯз дар соҳаҳои гуногуни хоҷагии халқи кишвар ва берун аз он фаъолият доранд. Мо бо дастовардҳои хонандагонамон дар олимпиадаҳои ҷумҳуриявӣ ва байналмилалӣ фахр мекунем. Бинои муассиса бо талаботи муосир муҷаҳҳаз буда, дорои синфхонаҳои барҳаво, озмоишгоҳҳои фаннӣ, китобхонаи ғанӣ ва толори варзишӣ мебошад.",
  establishedYear: "13",
  NumberStudents: "1200",
  NumberTeachers: "80",
  mission: "Таълими босифат ва тарбияи насли наврас дар руҳияи ватандӯстӣ.",
  image: "/about-preview.jpg"
}

function Page() {
  const [formData, setFormData] = useState(initialData)

  const handleSave = () => {
    console.log("Фиристодан ба сервер:", formData)
    alert("Маълумот захира шуд!")
  }

  return (
    <div className=" bg-gray-50 dark:bg-neutral-950 ">
      <div className="">
        <div className="w-full text-center mb-8">
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Танзимоти Дар бораи мо</h1>
          <p className="text-sm text-slate-500">Маълумоти умумии мактабро инҷо таҳрир кунед</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center gap-2 text-green-600 font-bold mb-4 border-b pb-2">
                <School size={20} /> <span>Дигар нишондодҳо</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Тачрибаи кори</label>
                  <input
                    type="number"
                    value={formData.establishedYear}
                    onChange={(e) => setFormData({ ...formData, establishedYear: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Микдори Хонандагон</label>
                  <input
                    type="number"
                    value={formData.NumberStudents}
                    onChange={(e) => setFormData({ ...formData, NumberStudents: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Микдори Омузгорон</label>
                  <input
                    type="number"
                    value={formData.NumberTeachers}
                    onChange={(e) => setFormData({ ...formData, NumberTeachers: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Сарлавха</label>
                  <input
                    type="text"
                    value={formData.mission}
                    onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white"
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="space-y-6 bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
            <div className="flex items-center gap-2 text-green-600 font-bold mb-4 border-b pb-2">
              <FileText size={20} /> <span>Маълумоти матнӣ</span>
            </div>

            <div className="space-y-4">

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Дар бораи мактаб (Тавсиф)</label>
                <textarea
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page