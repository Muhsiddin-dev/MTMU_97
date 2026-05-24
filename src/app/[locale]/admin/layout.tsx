"use client"
import LayoutWrapper from "@/src/components/Layout/LayoutWrapper";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { Config, routes } from "@/config";
import { CircleUser, Info, LogOut, PartyPopper, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "tj";
  const currentPath = pathname.replace(/^\/(tj|ru|en)/, "") || "/";
  return (
    <html lang="tg" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <section className="flex min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300">

          <aside className="fixed top-0 left-0 z-40 w-72 h-screen p-4 bg-[#0f172a] dark:bg-[#020617] border-r border-slate-800 flex flex-col gap-8">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
              <div className="bg-green-600 w-12 h-11 rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20 shrink-0">
                <Image src="/mtmu_97.png" alt="Logo" width={80} height={80} className="object-cover rounded-xl" />
              </div>
              <div className="overflow-hidden">
                <h1 className="text-sm font-bold text-white uppercase tracking-tight truncate">{Config.NameSchool}</h1>
                <p className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5 tracking-wider">Оев Абдулҳақ М.</p>
              </div>
            </div>

            {/* Менюи Навигатсия */}
            <nav className="flex-grow overflow-y-auto custom-scrollbar">
              <ul className="flex flex-col gap-1.5">
                {[
                  { icon: <Info size={18} />, label: "Дар бораи мо", href: "/admin" },
                  { icon: <PartyPopper size={18} />, label: "Ҷашнҳо", href: "/admin/celebrations" },
                  { icon: <CircleUser size={18} />, label: "Омӯзгорон", href: "/admin/teachers" },
                  { icon: <Users size={18} />, label: "Шогирдон", href: "/admin/students" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800/50 p-3 rounded-xl transition-all group"
                    >
                      <span className="group-hover:text-green-500 group-hover:scale-110 transition-all">{item.icon}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer: Баромад */}
            <div className="mt-auto pt-4 border-t border-slate-800">
              <Link href="/">
                <button className="flex items-center gap-3 w-full p-3 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all group">
                  <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-bold">Баромад</span>
                </button>
              </Link>
            </div>
          </aside>

          <main className="flex-1 ml-72 flex flex-col min-h-screen">

            <header className="h-16 border-b border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Панели Идоракунӣ</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">m_t_m_u_97@gmail.com</p>
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold">A</div>
              </div>
            </header>

            <div className="p-8 grow">
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
            </div>

          </main>

        </section>
      </body>
    </html>
  );
}