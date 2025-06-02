'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/booking', label: '예약', icon: '🏖️' },
    { href: '/portfolio', label: '포트폴리오', icon: '📸' },
    { href: '/about', label: '촬영안내', icon: '📋' },
    { href: '/expert-guide', label: '바프꿀팁', icon: '💡' }
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-black/30 via-black/20 to-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="group relative text-2xl md:text-3xl lg:text-4xl font-bold text-white hover:text-blue-300 transition-all duration-300 font-serif italic transform hover:scale-105"
              style={{ fontFamily: 'Dancing Script, Brush Script MT, cursive' }}
            >
              <span className="relative z-10">Mckinsey Studio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/20 to-blue-400/0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-white/90 hover:text-white px-4 py-3 rounded-xl text-base md:text-lg font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:backdrop-blur-sm transform hover:-translate-y-0.5"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-white hover:text-blue-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/30 transition-all duration-300 backdrop-blur-sm"
              aria-expanded="false"
            >
              <span className="sr-only">메뉴 열기</span>
              {isOpen ? (
                <X className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 bg-gradient-to-b from-black/95 via-black/90 to-black/95 backdrop-blur-xl shadow-2xl border-t border-white/10">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group text-white/90 hover:text-white hover:bg-white/10 block px-4 py-4 rounded-xl text-lg font-medium transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}