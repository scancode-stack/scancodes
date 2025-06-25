import './globals.css';
import { Josefin_Sans } from 'next/font/google';
import type { Metadata } from 'next';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-josefin',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Scancodes',
  description: 'Instant QR Codes',
  icons: {
    icon: '/logo.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
