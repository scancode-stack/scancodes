// app/layout.tsx
import './globals.css'
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-josefin', // 👈 important for Tailwind
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
