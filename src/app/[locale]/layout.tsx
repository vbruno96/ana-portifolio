import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const ibmFlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
})

export const metadata: Metadata = {
  title: 'Ana Paiva UI/UX',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${ibmFlexSans.variable} antialiased`}
    >
      <body className="font-inter">
        <Header />
        <main className="lg:ml-[9.6875rem]">{children}</main>
        <div className="lg:hidden">
          <div className="h-px bg-gray bg-opacity-10" />
          <footer className="py-2.5 text-center text-xs text-gray">
            <span>Copyright &copy;{new Date().getFullYear()}</span>
          </footer>
        </div>
      </body>
    </html>
  )
}
