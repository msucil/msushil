import './globals.scss'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import MainNavBar from './components/main-navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MSUCIL - Blog By Sushil',
  description: 'Blog by Sushil Ale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body data-bs-theme="dark" className={inter.className}>
        <MainNavBar />
        {children}
      <Analytics/>
      </body>
    </html>
  )
}
