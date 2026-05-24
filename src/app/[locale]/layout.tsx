import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/src/components/Layout/LayoutWrapper";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";


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
        url: "https://mtmu-97.vercel.app/mtmu_97.png",
        width: 1200,
        height: 630,
        alt: "Бинои МТМУ №97 Душанбе",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "МТМУ №97 | Ба номи профессор Оев Абдулҳақ Мансурович",
    description: "Муассисаи таҳсилоти миёнаи умумии №97-и шаҳри Душанбе. Маълумот дар бораи қабул, омӯзгорон, синфхонаҳо ва дастовардҳои хонандагон. Ояндаи фарзанди худро бо мо созед!",
    images: ["https://mtmu-97.vercel.app/mtmu_97.png"],
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
  icons: {
    icon: "/mtmu_97.png",
    shortcut: "/mtmu_97.png",
    apple: "/mtmu_97.png",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  let resolvedParams: any;
  try {
    resolvedParams = await params;
  } catch (error) {
    console.error('Error awaiting params:', error);
    notFound();
  }

  const locale = resolvedParams?.locale;


  if (!locale) {
    console.error('No locale found in params');
    notFound();
  }

  const locales = ['en', 'ru', 'tj'];
  if (!locales.includes(locale)) {
    notFound();
  }

  let messages: any = {};
  if (locale === 'en') {
    messages = (await import('./../../messages/en.json')).default;
  } else if (locale === 'ru') {
    messages = (await import('./../../messages/ru.json')).default;
  } else if (locale === 'tj') {
    messages = (await import('./../../messages/tj.json')).default;
  }

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