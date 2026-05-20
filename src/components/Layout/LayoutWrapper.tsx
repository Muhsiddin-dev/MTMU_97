"use client"
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideLayout = pathname?.includes('/admin');
    return (
        <>
            {!hideLayout ? (
                <>
                    <Header />
                    <main className="grow">
                        {children}
                    </main>
                    <Footer />
                </>
            ) : (
                <main className="grow">
                    {children}
                </main>
            )}
        </>
    )
}