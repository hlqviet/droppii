import './globals.css'

import { CssBaseline } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Droppii',
  description: 'Google Font App'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CssBaseline enableColorScheme />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
