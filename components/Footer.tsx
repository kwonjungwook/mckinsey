import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* 장식적 상단 라인 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* 상단 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* 스튜디오 소개 */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: '300', letterSpacing: '1px' }}>
              Mckinsey Studio
            </h3>
            <p className="text-gray-300 leading-relaxed text-balance">
              감각적인 연출과 완벽한 디테일로<br/>
              당신만의 특별한 순간을 만들어갑니다
            </p>
          </div>

          {/* 연락처 정보 */}
          <div className="text-center">
            <div className="space-y-2 text-gray-300">
              <p>📧 Email: kazuya7x@naver.com</p>
            </div>
          </div>

          {/* 소셜 미디어 & 메뉴 */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">🔗 Quick Links</h4>
            <div className="space-y-2">
              <Link href="/booking" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                🏖️ 촬영 예약
              </Link>
              <Link href="/portfolio" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                📸 Portfolio 보기
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                📋 준비사항
              </Link>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

        {/* 하단 섹션 */}
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-sm md:text-base">
            © 2025 Mckinsey Studio. All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-500 text-xs md:text-sm">
            <span className="flex items-center">
              🌊 퀄리티가 다른 바디프로필
            </span>
            <span className="flex items-center">
              ✨ 당신만의 특별한 순간
            </span>
            <span className="flex items-center">
              📷 5년 이상 경력의 작가
            </span>
          </div>
        </div>
      </div>

      {/* 장식적 하단 그라데이션 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </footer>
  )
} 