import { Cormorant_Garamond, Great_Vibes, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Türk Hat Sanatı Yolculuğu — Gelenekten Geleceğe',
  description:
    'Asırların ruhuyla işlenmiş Türk hat sanatını modern bir yolculukla sizinle buluşturuyoruz. Özel siparişler, atölyeler ve daha fazlası.',
  keywords: 'türk hat sanatı, kaligrafi, hat atölyesi, özel hat, hat eğitimi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${cormorant.variable} ${greatVibes.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
