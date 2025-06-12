'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  // 홈페이지에서는 흰색, 다른 페이지에서는 검은색
  const isHomePage = pathname === '/'
  
  // 색상 클래스들을 미리 정의
  const logoClasses = isHomePage 
    ? 'text-white drop-shadow-lg'
    : 'text-gray-900'
  
  const menuClasses = isHomePage
    ? 'text-white/90 hover:text-white drop-shadow-md'
    : 'text-gray-600 hover:text-gray-900'
    
  const buttonClasses = isHomePage
    ? 'text-white hover:text-white hover:bg-white/10 focus:ring-white/30'
    : 'text-gray-900 hover:text-gray-700 hover:bg-gray-100 focus:ring-gray-300'
    
  const mobileMenuBg = isHomePage 
    ? 'bg-black/80'
    : 'bg-white/95 backdrop-blur-sm'
    
  // 흰색 배경 제거 - 모든 페이지에서 투명 배경 사용
  const bgColor = ''

  const menuItems = [
    { href: '/booking', label: 'Booking', icon: '' },
    { href: '/portfolio', label: 'Portfolio', icon: '' },
    { href: '/about', label: 'About', icon: '' },
    { href: '/expert-guide', label: 'Guide', icon: '' }
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${bgColor}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 w-full">
          {/* 로고 - 왼쪽 끝 */}
          <div className="flex-shrink-0" style={{ width: '40%' }}>
            <Link 
              href="/" 
              className={`text-2xl md:text-3xl lg:text-4xl font-light transition-all duration-300 ${logoClasses}`}
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
                  className={`group relative px-4 py-3 text-base md:text-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${menuClasses}`}
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
              className={`inline-flex items-center justify-center p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-inset transition-all duration-300 ${buttonClasses}`}
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
          <div className={`px-2 pt-4 pb-6 space-y-2 sm:px-3 shadow-2xl ${mobileMenuBg}`}>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group block px-4 py-4 text-lg font-medium transition-all duration-300 ${menuClasses}`}
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