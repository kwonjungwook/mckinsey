import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mckinsey Studio - 바디프로필 전문 스튜디오',
  description: '프리미엄 바디프로필 촬영 전문 스튜디오입니다. 당신의 최고의 순간을 담아내겠습니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}