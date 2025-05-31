import Link from 'next/link'
import Nav from '../components/Nav'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* 네비게이션 */}
      <Nav />
      
      {/* 메인 콘텐츠 */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
            
            {/* 메인 타이틀 */}
            <div className="mb-8 md:mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                바디프로필 전문
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 md:mb-8">
                Mckinsey Studio
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                당신의 최고의 순간을 담아내는 프리미엄 바디프로필 전문 스튜디오입니다.
              </p>
            </div>

            {/* CTA 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-2xl">
              
              {/* 촬영안내 버튼 */}
              <Link 
                href="/about"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 md:py-5 px-6 md:px-8 rounded-xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                촬영안내
              </Link>

              {/* 포트폴리오 보기 버튼 */}
              <Link 
                href="/portfolio"
                className="flex-1 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-4 md:py-5 px-6 md:px-8 rounded-xl text-base md:text-lg border-2 border-gray-200 dark:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                포트폴리오 보기
              </Link>

              {/* 예약하기 버튼 */}
              <Link 
                href="/booking"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 md:py-5 px-6 md:px-8 rounded-xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                예약하기
              </Link>
            </div>

            {/* 추가 설명 */}
            <div className="mt-12 md:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl">
                <div className="text-center p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    5년+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">경력</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    1000+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">촬영 완료</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    100%
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">만족도</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}