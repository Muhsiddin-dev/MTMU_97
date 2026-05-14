"use client"
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathename = usePathname()
    return (
        <>
            {/* {
            pathename !== '/login' && (
                )
        } */}
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            {/* {
            pathename !== '/login' && (
            )
        } */}
        </>
    )
}