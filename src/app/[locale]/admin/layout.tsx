import LayoutWrapper from "@/src/components/Layout/LayoutWrapper";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { Config } from "@/config";
import { CircleUser, Info, LogOut, PartyPopper, Users } from "lucide-react";
import Link from "next/link";

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
  return (
    <html lang="tg" className="h-full ">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-full flex flex-col`}>
        <section className="min-h-screen  flex bg-blue-50/30  transition-colors duration-300">
          <aside className="p-4 bg-[#0f172a] dark:bg-[#020617] w-72 flex flex-col gap-8 h-screen border-r border-slate-800">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
              <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20 flex-shrink-0 overflow-hidden">
                <Image
                  src="/mtmu_97.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden">
                <h1 className="text-md font-bold text-white uppercase tracking-tight truncate">
                  {Config.NameSchool}
                </h1>
                <p className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5 tracking-wider">
                  Оев Абдулҳақ М.
                </p>
              </div>
            </div>

            <nav className="flex-grow">
              <ul className="flex flex-col gap-1.5">
                {[
                  { icon: <Info size={20} />, label: "Дар бораи мо", href: "/admin/" },
                  { icon: <PartyPopper size={20} />, label: "Ҷашнҳо", href: "/admin/celebrations" },
                  { icon: <CircleUser size={20} />, label: "Омӯзгорон", href: "/admin/teachers" },
                  { icon: <Users size={20} />, label: "Шогирдон", href: "/admin/students" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800/50 p-3 rounded-xl transition-all duration-200 group"
                    >
                      <span className="text-slate-500 group-hover:text-green-500 transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-4 border-t border-slate-800">
              <button className="flex items-center gap-3 w-full p-3 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-sm transition-all duration-300 group">
                <div className="group-hover:-translate-x-1 transition-transform">
                  <LogOut size={20} />
                </div>
                <span className="text-sm font-bold">Баромад</span>
              </button>
            </div>
          </aside>
          <aside>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </aside>
        </section>
      </body>
    </html>
  );
}