import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/src/components/Layout/LayoutWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "МТМУ №97 | Ба номи профессор Оев Абдулҳақ Мансурович",
    template: "%s | МТМУ №97"
  },

  description: "Муассисаи таҳсилоти миёнаи умумии №97-и шаҳри Душанбе. Маълумот дар бораи қабул, омӯзгорон, синфхонаҳо ва дастовардҳои хонандагон. Ояндаи фарзанди худро бо мо созед!",

  keywords: ["МТМУ 97", "97", "МТМУ", "мактаб", "мактаби 97 Душанбе", "мактаб дар Тоҷикистон", "маорифи Душанбе", "education Tajikistan", "school 97 Dushanbe", "беҳтарин мактаб дар Душанбе"],

  authors: [{ name: "Дастаи техникии МТМУ №97" }],
  creator: "МТМУ №97",
  publisher: "Вазорати маориф ва илми Ҷумҳурии Тоҷикистон",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "tg_TJ",
    url: "http://mtmu-97.vercel.app",
    siteName: "МТМУ №97",
    title: "МТМУ №97 | Ба номи профессор Оев Абдулҳақ Мансурович",
    description: "Муассисаи таҳсилоти миёнаи умумии №97-и шаҳри Душанбе. Маълумот дар бораи қабул, омӯзгорон, синфхонаҳо ва дастовардҳои хонандагон. Ояндаи фарзанди худро бо мо созед!",
    images: [
      {
        url: "https://mtmu97.tj/mtmu_97.png",
        width: 1200,
        height: 630,
        alt: "Бинои МТМУ №97 Душанбе",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "МТМУ №97 Душанбе",
    description: "Муассисаи таҳсилоти миёнаи умумии №97-и шаҳри Душанбе. Маълумот дар бораи қабул, омӯзгорон, синфхонаҳо ва дастовардҳои хонандагон. Ояндаи фарзанди худро бо мо созед!",
    images: ["https://mtmu97.tj/mtmu_97.png"],
  },

  verification: {
    google: "Cc9bk_ELavsOO7Fvf0uveKmJUNrPi8Xr61cUBsCg3XY", 
  },

  category: "education",
  alternates: {
    canonical: "https://mtmu97.tj",
    languages: {
      'tg-TJ': 'https://mtmu97.tj/tj',
      'ru-RU': 'https://mtmu97.tj/ru',
      'en-US': 'https://mtmu97.tj/en',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tg" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-full flex flex-col`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}