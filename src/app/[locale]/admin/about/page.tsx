"use client"

import React, { useState } from 'react'
import { Save, Image as ImageIcon, FileText, School } from 'lucide-react'

// 1. Ин сохторро баъдтар бекендчик ба ту аз базаи маълумот мефиристад
const initialData = {
  schoolName: "МТМУ №97",
  directorName: "Оев Абдулҳақ Мансурович",
  description: "Муассисаи таҳсилоти миёнаи умумии №97 яке аз пешқадамтарин мактабҳо...",
  establishedYear: "1997",
  mission: "Таълими босифат ва тарбияи насли наврас дар руҳияи ватандӯстӣ.",
  image: "/about-preview.jpg"
}

function Page() {
  const [formData, setFormData] = useState(initialData)

  // Функсия барои захира кардан (Вақте бекенд таёр шуд, инҷо API мешавад)
  const handleSave = () => {
    console.log("Фиристодан ба сервер:", formData)
    alert("Маълумот захира шуд!")
  }

  return (
    <div className=" bg-gray-50 dark:bg-neutral-950 ">
      <div className="">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Танзимоти "Дар бораи мо"</h1>
            <p className="text-sm text-slate-500">Маълумоти умумии мактабро инҷо таҳрир кунед</p>
          </div>
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-green-600/20 active:scale-95"
          >
            <Save size={20} /> Захира кардан
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Қисми Текстҳо */}
          <div className="space-y-6 bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
            <div className="flex items-center gap-2 text-green-600 font-bold mb-4 border-b pb-2">
              <FileText size={20} /> <span>Маълумоти матнӣ</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Номи мактаб</label>
                <input 
                  type="text" 
                  value={formData.schoolName}
                  onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Директор</label>
                <input 
                  type="text" 
                  value={formData.directorName}
                  onChange={(e) => setFormData({...formData, directorName: e.target.value})}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Дар бораи мактаб (Тавсиф)</label>
                <textarea 
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Қисми Визуал ва Дигар */}
          <div className="space-y-6">
            
            {/* Боргузории Сурат */}
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center gap-2 text-green-600 font-bold mb-4 border-b pb-2">
                <ImageIcon size={20} /> <span>Сурати асосӣ</span>
              </div>
              <div className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-slate-200 dark:border-neutral-700 h-48 flex items-center justify-center bg-gray-50 dark:bg-neutral-800 hover:border-green-500 transition-all">
                <div className="text-center">
                  <ImageIcon className="mx-auto text-slate-400 mb-2" size={32} />
                  <p className="text-xs text-slate-500 font-medium">Суратро инҷо гузоред ё бор кунед</p>
                </div>
                {/* Preview Image (Агар сурат бошад) */}
              </div>
            </div>

            {/* Иловагӣ */}
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
               <div className="flex items-center gap-2 text-green-600 font-bold mb-4 border-b pb-2">
                <School size={20} /> <span>Дигар нишондодҳо</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase">Соли таъсис</label>
                    <input 
                      type="number" 
                      value={formData.establishedYear}
                      onChange={(e) => setFormData({...formData, establishedYear: e.target.value})}
                      className="w-full mt-1 p-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white"
                    />
                 </div>
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase">Мақсад (Mission)</label>
                    <input 
                      type="text" 
                      value={formData.mission}
                      onChange={(e) => setFormData({...formData, mission: e.target.value})}
                      className="w-full mt-1 p-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white"
                    />
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page