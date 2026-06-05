// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { Users, GraduationCap, Calendar, BarChart3, School, Settings } from "lucide-react";
// import { AnimatedBeam } from "@/components/ui/animated-beam";

// export default function SchoolDirectionsMap() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const centerRef = useRef<HTMLDivElement>(null);
  
//   // Рефҳо барои бахшҳои мактаб
//   const teachersRef = useRef<HTMLDivElement>(null);
//   const studentsRef = useRef<HTMLDivElement>(null);
//   const scheduleRef = useRef<HTMLDivElement>(null);
//   const metricsRef = useRef<HTMLDivElement>(null);
//   const classesRef = useRef<HTMLDivElement>(null);
//   const settingsRef = useRef<HTMLDivElement>(null);

//   return (
//     <div 
//       ref={containerRef} 
//       className="relative flex h-[650px] w-full items-center justify-center overflow-hidden bg-white dark:bg-[#020617] border border-slate-200 dark:border-neutral-800/50 rounded-3xl p-10 select-none transition-colors duration-300"
//     >
//       {/* СЕТКАИ ҶОЙГИРКУНИИ БАХШҲО */}
//       <div className="flex h-full w-full max-w-4xl flex-col justify-between z-10">
        
//         {/* ҚАТОРӢ БОЛО: Омӯзгорон ва Ҷадвали дарсҳо */}
//         <div className="flex justify-around">
//           <div ref={teachersRef} className="flex flex-col items-center gap-2">
//             <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-green-600 dark:text-green-500 shadow-md dark:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
//               <Users size={32} />
//             </div>
//             <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Омӯзгорон</span>
//           </div>

//           <div ref={scheduleRef} className="flex flex-col items-center gap-2">
//             <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-500 shadow-md dark:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
//               <Calendar size={32} />
//             </div>
//             <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Ҷадвали дарсҳо</span>
//           </div>
//         </div>

//         {/* ҚАТОРӢ МАРКАЗӢ: Шогирдон, ЛОГОТИПИ МАКТАБ, Синфхонаҳо */}
//         <div className="flex justify-between items-center px-4">
//           <div ref={studentsRef} className="flex flex-col items-center gap-2 -mt-12">
//             <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-amber-600 dark:text-amber-500 shadow-md dark:shadow-[0_0_20px_rgba(245,158,11,0.1)]">
//               <GraduationCap size={32} />
//             </div>
//             <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Шогирдон</span>
//           </div>

//           {/* МАРКАЗ: ЛОГОТИПИ МАКТАБИ №97 */}
//           <div ref={centerRef} className="w-29 h-28 rounded-full bg-white dark:bg-[#090d16] border-2 border-green-500/40 flex items-center justify-center shadow-lg dark:shadow-[0_0_40px_rgba(34,197,94,0.2)]">
//             <Image src="/mtmu_97.png" alt="School Logo" width={75} height={75} className="object-center w-full h-full  rounded-full" />
//           </div>

//           <div ref={classesRef} className="flex flex-col items-center gap-2 -mt-12">
//             <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-purple-600 dark:text-purple-500 shadow-md dark:shadow-[0_0_20px_rgba(147,51,234,0.1)]">
//               <School size={32} />
//             </div>
//             <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Синфхонаҳо</span>
//           </div>
//         </div>

//         {/* ҚАТОРӢ ПОЁН: Муваффақият ва Танзимот */}
//         <div className="flex justify-around">
//           <div ref={metricsRef} className="flex flex-col items-center gap-2">
//             <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-rose-600 dark:text-rose-500 shadow-md dark:shadow-[0_0_20px_rgba(244,63,94,0.1)]">
//               <BarChart3 size={32} />
//             </div>
//             <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Муваффақият</span>
//           </div>

//           <div ref={settingsRef} className="flex flex-col items-center gap-2">
//             <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 shadow-md dark:shadow-[0_0_20px_rgba(148,163,184,0.1)]">
//               <Settings size={32} />
//             </div>
//             <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Танзимот</span>
//           </div>
//         </div>

//       </div>

//       {/* Хатҳои марказӣ (Рӯ ба рӯ) */}
//       <AnimatedBeam containerRef={containerRef} fromRef={studentsRef} toRef={centerRef} curvature={0} duration={4} gradientStartColor="#10b981" gradientStopColor="#047857" />
//       <AnimatedBeam containerRef={containerRef} fromRef={classesRef} toRef={centerRef} curvature={0} duration={4} reverse gradientStartColor="#10b981" gradientStopColor="#047857" />

//       {/* Хатҳои боло (Каҷ ба боло) */}
//       <AnimatedBeam containerRef={containerRef} fromRef={teachersRef} toRef={centerRef} curvature={-60} duration={4.5} gradientStartColor="#10b981" gradientStopColor="#047857" />
//       <AnimatedBeam containerRef={containerRef} fromRef={scheduleRef} toRef={centerRef} curvature={-60} duration={4.5} reverse gradientStartColor="#10b981" gradientStopColor="#047857" />

//       {/* Хатҳои поён (Каҷ ба поён) */}
//       <AnimatedBeam containerRef={containerRef} fromRef={metricsRef} toRef={centerRef} curvature={60} duration={5} gradientStartColor="#10b981" gradientStopColor="#047857" />
//       <AnimatedBeam containerRef={containerRef} fromRef={settingsRef} toRef={centerRef} curvature={60} duration={5} reverse gradientStartColor="#10b981" gradientStopColor="#047857" />

//     </div>
//   );
// }

"use client";
 
import React, { useRef } from "react";
import { Users, GraduationCap, Sparkles, Building2, School } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
 
// ─── Компоненти доираи алоҳида ───────────────────────────────────────────────
function Node({
  ref: nodeRef,
  icon: Icon,
  label,
  colorClass,
  glowClass,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  icon: React.ElementType;
  label: string;
  colorClass: string;
  glowClass: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div
        ref={nodeRef}
        className={`
          w-[74px] h-[74px] rounded-full
          bg-white dark:bg-slate-900/90
          border border-slate-200 dark:border-slate-800
          flex items-center justify-center
          shadow-md transition-all duration-300 backdrop-blur-sm
          group-hover:scale-110 group-hover:border-current
          ${glowClass}
          ${colorClass}
        `}
      >
        <Icon size={28} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-6" />
      </div>
      <span className="text-[12px] font-bold tracking-wide text-slate-600 dark:text-slate-400 transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white">
        {label}
      </span>
    </div>
  );
}
 
// ─── Асосии компонент ─────────────────────────────────────────────────────────
export default function SchoolVerticalMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ministryRef  = useRef<HTMLDivElement>(null); // Аз ҳама боло
  const centerRef    = useRef<HTMLDivElement>(null); // Дар байн (Мактаб)
  
  // Қисми поёнӣ
  const teachersRef  = useRef<HTMLDivElement>(null); 
  const studentsRef  = useRef<HTMLDivElement>(null); 
  const eventsRef    = useRef<HTMLDivElement>(null); 
 
  return (
    <div
      ref={containerRef}
      className="
        relative flex flex-col items-center justify-between
        w-full h-162.5 py-10
        bg-slate-50 dark:bg-[#020617]
        border border-slate-200/80 dark:border-slate-900
        rounded-3xl overflow-hidden select-none
        transition-colors duration-300
      "
    >
 
      {/* ── Фонии декоративӣ (Эффекти Сетка) ───────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-emerald-500/[0.03] blur-3xl" />
      </div>
 
      {/* 1. ҚИСМИ БОЛОӢ: Вазорати маориф */}
      <div className="relative z-10 flex justify-center w-full">
        <Node
          ref={ministryRef}
          icon={Building2}
          label="Вазорати маориф"
          colorClass="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
          glowClass="shadow-indigo-500/5 dark:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
        />
      </div>
 
      {/* 2. ҚИСМИ БАЙНӢ: Мактаби №97 */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[105px] h-[105px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 animate-ping duration-1000" />
          <div
            ref={centerRef}
            className="
              relative w-[90px] h-[90px] rounded-full
              bg-white dark:bg-slate-900
              border-2 border-emerald-500 dark:border-emerald-500/70
              flex items-center justify-center
              shadow-[0_0_25px_rgba(16,185,129,0.15)]
              dark:shadow-[0_0_35px_rgba(16,185,129,0.2)]
              transition-all duration-300
            "
          >
            <School
              size={38}
              strokeWidth={1.4}
              className="text-emerald-600 dark:text-emerald-400 animate-pulse"
            />
          </div>
        </div>
        <span className="text-[11px] font-extrabold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-900/50">
          Мактаб №97
        </span>
      </div>
 
      {/* 3. ҚИСМИ ПОЁНӢ: Тақсимот ба Муаллимон, Шогирдон ва Ҷашнҳо */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-[650px] px-8">
        <Node
          ref={teachersRef}
          icon={Users}
          label="Муаллимон"
          colorClass="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500"
          glowClass="shadow-emerald-500/5 dark:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        />
        
        <Node
          ref={studentsRef}
          icon={GraduationCap}
          label="Шогирдон"
          colorClass="text-teal-600 dark:text-teal-400 hover:text-teal-500"
          glowClass="shadow-teal-500/5 dark:shadow-[0_0_20px_rgba(20,184,166,0.15)]"
        />
 
        <Node
          ref={eventsRef}
          icon={Sparkles}
          label="Ҷашнҳо"
          colorClass="text-sky-600 dark:text-sky-400 hover:text-sky-500"
          glowClass="shadow-sky-500/5 dark:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
        />
      </div>
 
      {/* ── AnimatedBeam-ҳо (Иерархияи Амудӣ) ───────────────── */}
 
      {/* АЗ БОЛО БА ТАГ: Вазорати маориф ➔ Мактаб */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={ministryRef}
        toRef={centerRef}
        curvature={1} /* Хатти рост аз боло ба поён */
        duration={4.5}
        pathWidth={4.5}
        gradientStartColor="#6366f1"
        gradientStopColor="#10b981"
      />
 
      {/* МАКТАБ ➔ МУАЛЛИМОН (ба тарафи чап-поён бо каҷшавии манфӣ) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={teachersRef}
        curvature={-30}
        duration={4}
        pathWidth={2.5}
        gradientStartColor="#10b981"
        gradientStopColor="#059669"
      />
 
      {/* МАКТАБ ➔ ШОГИРДОН (мустақим ба поён - хатти рост) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={studentsRef}
        curvature={0}
        duration={4.2}
        pathWidth={2.5}
        gradientStartColor="#10b981"
        gradientStopColor="#14b8a6"
      />
 
      {/* МАКТАБ ➔ ҶАШНҲО (ба тарафи рост-поён бо каҷшавии мусбат) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={eventsRef}
        curvature={30}
        duration={4}
        pathWidth={2.5}
        gradientStartColor="#10b981"
        gradientStopColor="#38bdf8"
      />
    </div>
  );
}