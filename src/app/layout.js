import { Geist, Geist_Mono, Lora } from "next/font/google";
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

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora', //opcional
  weight: ['400', '500', '600', '700'],
})

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
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fotos que Contam" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased bg-gray-100 dark:bg-black transition-colors duration-200`}
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
