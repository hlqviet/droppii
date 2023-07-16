import { CssBaseline } from '@mui/material'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Droppii',
  description: 'Google Font App'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <CssBaseline enableColorScheme />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
