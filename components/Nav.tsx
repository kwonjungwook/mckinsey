'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/booking', label: 'Booking', icon: '' },
    { href: '/portfolio', label: 'Portfolio', icon: '' },
    { href: '/about', label: 'About', icon: '' },
    { href: '/expert-guide', label: 'Guide', icon: '' }
  ]

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 w-full">
          {/* 로고 - 왼쪽 끝 */}
          <div className="flex-shrink-0" style={{ width: '40%' }}>
            <Link 
              href="/" 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white transition-all duration-300"
              style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: '300', letterSpacing: '1px' }}
            >
              Mckinsey Studio
            </Link>
          </div>

          {/* 데스크톱 메뉴 - 오른쪽 끝 */}
          <div className="hidden md:block" style={{ width: '40%' }}>
            <div className="flex items-baseline justify-end space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-white/90 hover:text-white px-4 py-3 text-base md:text-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5"
                  style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: '400', letterSpacing: '0.5px' }}
                >
                  {item.label}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* 모바일 메뉴 버튼 - 오른쪽 끝 */}
          <div className="md:hidden flex justify-end" style={{ width: '40%' }}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-white hover:text-blue-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/30 transition-all duration-300"
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
          <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 bg-black/80 shadow-2xl">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group text-white/90 hover:text-white block px-4 py-4 text-lg font-medium transition-all duration-300"
                style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: '400', letterSpacing: '0.5px' }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}