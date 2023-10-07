import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Toryork Market',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white`}>{children}</body>
    </html>
  )
}
