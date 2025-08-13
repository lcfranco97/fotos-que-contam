import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainCotainer from "./components/MainContainer";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import { ThemeProvider } from "./components/theme-provider";


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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200 dark:bg-black transition-colors duration-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <PageTransition>
            <MainCotainer>
              <ScrollToTop />
              {children}
            </MainCotainer>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
