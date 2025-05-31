'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HomePage() {
  // 히어로 슬라이드 이미지들
  const heroImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      alt: "바디프로필 촬영 - 강력한 포즈",
      title: "Body Profile by Mckinsey Studio",
      subtitle: "당신의 아름다운 순간을 영원히 담아내는"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      alt: "바디프로필 촬영 - 우아한 실루엣",
      title: "Professional Body Profile",
      subtitle: "프리미엄 바디프로필 전문 스튜디오"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506629905607-296e80317511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      alt: "바디프로필 촬영 - 자연스러운 매력",
      title: "Capture Your Best Moment",
      subtitle: "최고의 퀄리티로 완성하는 특별한 경험"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      alt: "바디프로필 촬영 - 역동적인 움직임",
      title: "Transform Your Vision",
      subtitle: "당신만의 스토리를 담아내는 전문 촬영"
    }
  ]

  // 포트폴리오 갤러리 이미지들
  const portfolioImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 작품 1"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 작품 2"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582896911227-c966f6e7fb91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 작품 3"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 작품 4"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 작품 5"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 작품 6"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 작품 7"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 작품 8"
    }
  ]

  // 슬라이드 상태 관리
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // 자동 슬라이드 기능
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // 5초마다 변경

    return () => clearInterval(interval)
  }, [isAutoPlay, heroImages.length])

  // 슬라이드 이동 함수들
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 네비게이션 */}
      <Nav />
      
      {/* 히어로 슬라이드 섹션 */}
      <main className="pt-16">
        <section 
          className="relative h-[70vh] sm:h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* 슬라이드 이미지들 */}
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              {/* 어두운 오버레이 */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}

          {/* 좌/우 화살표 버튼 */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-3 transition-all duration-300"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>
          
          <button
            onClick={goToNextSlide}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-3 transition-all duration-300"
            aria-label="다음 슬라이드"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* 중앙 텍스트 콘텐츠 */}
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 transition-all duration-700 leading-tight">
              {heroImages[currentSlide].title}
            </h1>
            <div className="h-px bg-white/30 w-12 sm:w-16 md:w-24 mx-auto mb-4 md:mb-8"></div>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-xl lg:text-2xl transition-all duration-700">
              <p>{heroImages[currentSlide].subtitle}</p>
              <p className="opacity-90">프리미엄 바디프로필 전문 스튜디오</p>
              <p className="opacity-80 hidden sm:block">최고의 퀄리티로 완성하는 특별한 경험</p>
            </div>
            <div className="mt-4 md:mt-8 text-xs sm:text-sm md:text-base opacity-90">
              문의 | 010-1234-5678
            </div>
          </div>

          {/* 슬라이드 인디케이터 */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1.5 sm:space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`슬라이드 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </section>

        {/* 포트폴리오 갤러리 섹션 */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {portfolioImages.map((image) => (
              <Link 
                key={image.id}
                href="/portfolio"
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 하단 더보기 링크 */}
          <div className="text-center mt-8 md:mt-12">
            <Link 
              href="/portfolio"
              className="inline-block text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 text-sm md:text-base"
            >
              더 많은 작품 보기 →
            </Link>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              당신만의 특별한 순간을 만들어보세요
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              5년 이상의 경험과 전문성으로 완성하는 프리미엄 바디프로필
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/booking"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-colors duration-300 text-sm md:text-base"
              >
                예약하기
              </Link>
              <Link 
                href="/about"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300 text-sm md:text-base"
              >
                촬영안내
              </Link>
            </div>
          </div>
        </section>

        {/* 푸터 */}
        <footer className="bg-white py-6 md:py-8 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-xs md:text-sm">
            <p>© 2024 Mckinsey Studio. All rights reserved.</p>
            <p className="mt-2">서울특별시 강남구 | 010-1234-5678 | info@mckineystudio.com</p>
          </div>
        </footer>
      </main>
    </div>
  )
}