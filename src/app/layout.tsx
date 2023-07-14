import Sidebar from '@/components/Sidebar'

import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UI Twitter',
  description: 'Rocketseat | Masterclass React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <div className="layout mx-auto my-0 grid max-w-screen-lg grid-cols-[300px_1fr]">
          <Sidebar />

          <div className="content border-x border-[#ebeef0]">{children}</div>
        </div>
      </body>
    </html>
  )
}
