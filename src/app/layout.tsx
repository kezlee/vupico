import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ReactElement } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VUPICO SUSTAINABILITY DATA PLATFORM (SDP)',
  description: 'VUPICO sustainability data platform',
}

export default function RootLayout({
  children,
}: {
  children: ReactElement
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
