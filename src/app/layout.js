import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainCotainer from "./components/MainContainer";
import ScrollToTop from "./components/ScrollToTop";
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
  title: "Fotos que contam",
  description: "Fotos que contam",
  icons: {
    icon: '/ft-ico.png',
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
                <ScrollToTop />
                {children}
              </MainCotainer>
        
          </PageTransition>
        
      </body>
    </html>
  );
}
