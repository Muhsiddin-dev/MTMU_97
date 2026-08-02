"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleUser, Info, PartyPopper, SquareDashedKanbanIcon, Star, Users } from "lucide-react";

const navItems = [
  { icon: <SquareDashedKanbanIcon size={18} />, label: "Дашбоард", href: "/admin" },
  { icon: <PartyPopper size={18} />, label: "Ҷашнҳо", href: "/admin/celebrations" },
  { icon: <CircleUser size={18} />, label: "Омӯзгорон", href: "/admin/teachers" },
  { icon: <Users size={18} />, label: "Шогирдон", href: "/admin/students" },
  { icon: <Star size={18} />, label: "Каментария", href: "/admin/stars" },
  { icon: <Info size={18} />, label: "Дар бораи мо", href: "/admin/about" },
];

export default function AdminSidebar() {
  const pathname = usePathname() || "";

  return (
    <nav className="flex-grow  overflow-y-auto custom-scrollbar">
      <ul className="flex flex-col gap-1.5">
        {navItems.map((item, index) => {
          const isActive = pathname.endsWith(item.href);
          return (
            <li key={index}>
              <Link
                href={item.href}
                className={
                  "flex items-center gap-3 p-3 rounded-xl transition-all " +
                  (isActive
                    ? "bg-slate-800 text-white shadow-sm shadow-slate-900/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50")
                }
              >
                <span
                  className={
                    "transition-all " +
                    (isActive ? "text-green-400 scale-110" : "group-hover:text-green-500 group-hover:scale-110")
                  }
                >
                  {item.icon}
                </span>
                <span className={isActive ? "text-sm font-medium text-white" : "text-sm font-medium"}>
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
