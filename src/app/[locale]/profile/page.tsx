import React from 'react';
import { 
  CircleUserRound, 
  KeyRound, 
  MailWarning, 
  ChevronRight, 
  LogOut, 
  UserMinus, 
  ShieldAlert 
} from 'lucide-react';

export default function ProfileSettings() {
  return (
    <div className="max-w-2xl mx-auto md:pt-20 sm:pt-19 py-3 px-4  space-y-4">
      <h1 className="text-2xl font-bold dark:text-white mb-5">Хучраи Шахси</h1>

      <div className="p-5 bg-white dark:bg-[#1a1a1a] rounded-[32px] border border-gray-100 dark:border-white/5 shadow-sm flex flex-col items-center">
        
        <div className="w-24 h-24 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center border-4 border-white dark:border-[#1a1a1a] shadow-md mb-4">
          <CircleUserRound className="w-12 h-12 text-green-600" strokeWidth={1.5} />
        </div>

        {/* User Info Section */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
            Муҳсин Назаров
          </h2>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-50 dark:bg-white/5 rounded-full border border-gray-100 dark:border-white/5">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email:</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">muhsin@example.com</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-50 dark:bg-white/5 rounded-full border border-gray-100 dark:border-white/5">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Номер:</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">+992 012356464</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-50 dark:bg-white/5 rounded-full border border-gray-100 dark:border-white/5">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Рол:</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Клиент</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Actions Group */}
      <div className="bg-white dark:bg-[#1a1a1a] rounded-[32px] border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm">
        <button className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-white/5">
          <div className="flex items-center gap-4 text-blue-600">
            <div className="p-2.5 bg-blue-50 dark:bg-blue-500/10 rounded-2xl">
              <KeyRound className="w-5 h-5" />
            </div>
            <span className="font-semibold text-gray-700 dark:text-gray-200">Ивази парол</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-4 text-indigo-600">
            <div className="p-2.5 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl">
              <MailWarning className="w-5 h-5" />
            </div>
            <span className="font-semibold text-gray-700 dark:text-gray-200">Ивази почта</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Danger Zone Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex-1 flex items-center rounded-[28px] justify-between p-4 hover:bg-orange-50 dark:hover:bg-orange-500/5 transition-all border border-gray-100 dark:border-white/5 bg-white dark:bg-[#1a1a1a]">
          <div className="flex items-center gap-3 text-orange-600">
            <div className="p-2 bg-orange-50 dark:bg-orange-500/10 rounded-xl">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="font-semibold text-sm">Баромад</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>

        <button className="flex-1 flex items-center rounded-[28px] justify-between p-4 hover:bg-red-50 dark:hover:bg-red-500/5 border transition-all group border-gray-100 dark:border-white/5 bg-white dark:bg-[#1a1a1a]">
          <div className="flex items-center gap-3 text-red-600">
            <div className="p-2 bg-red-50 dark:bg-red-500/10 rounded-xl">
              <UserMinus className="w-5 h-5" />
            </div>
            <span className="font-semibold text-sm">Нест кардан</span>
          </div>
          <ShieldAlert className="w-5 h-5 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Warning Footer */}
      <p className="text-center text-[11px] leading-relaxed text-gray-400 px-10">
        Диққат: Ҳангоми нест кардани аккаунт, тамоми маълумотҳои шумо ба таври ҳамешагӣ аз серверҳои мо пок мешаванд ва барқарор намегарданд.
      </p>
    </div>
  );
}