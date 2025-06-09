import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainCotainer from "./components/MainContainer";

import PageTransition from "./components/PageTransition";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Fotos que contam',
    template: '%s | Fotos que contam'
  },
  description: "Fotos que contam",
  icons: {
    icon: '/ico-fqc.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <PageTransition>
              <MainCotainer>

                {children}
              </MainCotainer>
        
          </PageTransition>
        
      </body>
    </html>
  );
}
