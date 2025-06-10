'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav'



export default function HomePage() {
  // 이미지 타입 정의
  type HeroImage = {
    id: number
    src: string
    mobileSrc?: string // 선택적 필드
    alt: string
    title: string
    subtitle: string
  }

  // 히어로 슬라이드 이미지들 (모바일 전용 세로 이미지 포함)
  const heroImages: HeroImage[] = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748678877/garo4_stfpxa.png",
      mobileSrc: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748672672/2_wvbhln.png",
      alt: "바디프로필 촬영 - 강력한 포즈",
      title: "Beyond Ordinary",
      subtitle: "평범함을 넘어선 당신만의 이야기"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748678877/garo1_l1eewg.png",
      mobileSrc: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675711/12_gknc5q.png",
      alt: "바디프로필 촬영 - 우아한 실루엣",
      title: "Timeless Beauty",
      subtitle: "시간을 초월한 아름다움의 순간들"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748678876/garo2_ghfime.png",
      mobileSrc: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675007/L2310757_steot9.jpg",
      alt: "바디프로필 촬영 - 자연스러운 매력",
      title: "Pure Essence",
      subtitle: "있는 그대로의 자연스러운 매력을 발견하다"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748678876/garo3_imvjgm.png",
      mobileSrc: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748672672/1_azcltq.png",
      alt: "바디프로필 촬영 - 역동적인 움직임",
      title: "Mckinsey Studio",
      subtitle: "완벽한 순간을 만들어가는 사람들"
    }
  ]

  // 포트폴리오 갤러리 이미지들
  const portfolioImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675711/8_i9wdsu.png",
      alt: "바디프로필 작품 1"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748677591/19_zoahb1.png",
      alt: "바디프로필 작품 2"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675712/11_ae4y3i.png",
      alt: "바디프로필 작품 3"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748673723/123_sibqu6.jpg",
      alt: "바디프로필 작품 4"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748672672/3_fsotgd.png",
      alt: "바디프로필 작품 5"
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748674875/L1020401_jfj5py.jpg",
      alt: "바디프로필 작품 6"
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748672672/4_b6n4gp.png",
      alt: "바디프로필 작품 7"
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748674882/L1020302_whnmak.jpg",
      alt: "바디프로필 작품 8"
    }
  ]

  // 상태 관리
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
    const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sliderRef = useRef<HTMLElement>(null)

  // 슬라이드 이동 함수들
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }, [heroImages.length])

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [heroImages.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // 자동 슬라이드 기능
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      goToNextSlide()
    }, 4000) // 4초마다 변경
    
    return () => clearInterval(interval)
  }, [isAutoPlay, goToNextSlide])

  // 최소 스와이프 거리
  const minSwipeDistance = 50

  // 터치 시작
  const onTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    setTouchEnd(null) // 이전 터치 종료 위치 초기화
    setTouchStart(e.touches[0].clientX)
    setIsAutoPlay(false) // 터치 중 자동 전환 중지
  }

  // 터치 이동
  const onTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (!touchStart) return
    setTouchEnd(e.touches[0].clientX)
  }

  // 터치 종료
  const onTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    if (!touchStart || !touchEnd) {
      setIsAutoPlay(true)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNextSlide()
    } else if (isRightSwipe) {
      goToPrevSlide()
    }

    // 터치 상태 초기화 및 자동 전환 재개
    setTouchStart(null)
    setTouchEnd(null)
    setTimeout(() => setIsAutoPlay(true), 500) // 0.5초 후 자동 전환 재개
  }

  return (
    <div className="bg-white">
      {/* 네비게이션 */}
      <Nav />
      
      {/* 히어로 슬라이드 섹션 */}
      <main>
        <section 
          ref={sliderRef}
          className="relative h-screen flex items-center justify-center overflow-hidden select-none"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ 
            touchAction: 'manipulation',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
        >
          {/* 슬라이드 이미지들 */}
          {heroImages.map((image, index) => (
            <div
              key={`slide-${image.id}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* 데스크톱 이미지 */}
              <div className="hidden md:block w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="100vw"
                  quality={85}
                />
              </div>
              
              {/* 모바일 이미지 */}
              <div className="block md:hidden w-full h-full">
                <Image
                  src={image.mobileSrc || image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="100vw"
                  quality={85}
                />
              </div>
              
              {/* 어두운 오버레이 */}
              <div className="absolute inset-0 bg-black/10 z-10"></div>
            </div>
          ))}

          {/* 좌/우 화살표 버튼 */}
          <button
            onClick={goToPrevSlide}
            type="button"
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 md:p-3 transition-all duration-300 border border-white/20"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>
          
          <button
            onClick={goToNextSlide}
            type="button"
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 md:p-3 transition-all duration-300 border border-white/20"
            aria-label="다음 슬라이드"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* 중앙 텍스트 콘텐츠 */}
          <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-3 md:mb-6 transition-all duration-700 leading-tight" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: '300', letterSpacing: '1px' }}>
              {heroImages[currentSlide]?.title}
            </h1>
            <div className="h-px bg-white/30 w-12 sm:w-16 md:w-24 mx-auto mb-4 md:mb-8"></div>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-xl lg:text-2xl transition-all duration-700" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: '300', letterSpacing: '0.5px' }}>
              <p className="text-balance">{heroImages[currentSlide]?.subtitle}</p>
              <p className="opacity-80 hidden sm:block text-balance text-base md:text-lg">
                당신이 꿈꿔왔던 그 모습, 지금 현실로 만나보세요
              </p>
            </div>
          </div>

          {/* 슬라이드 인디케이터 */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-1.5 sm:space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => goToSlide(index)}
                type="button"
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
        <section className="pt-12 pb-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-medium bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 하단 더보기 링크 */}
          <div className="text-center mt-12 md:mt-16">
            <Link 
              href="/portfolio"
              className="inline-block text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 text-base md:text-lg"
            >
              Portfolio 전체보기 →
            </Link>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 text-balance">
              당신이 상상했던 그 모습을 현실로
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              트렌디한 감각과 전문적인 기술력이 만나<br/>
              완벽한 밸런스의 바디프로필이 탄생합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/booking"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-4 md:py-5 px-8 md:px-10 rounded-lg transition-colors duration-300 text-base md:text-lg btn-modern"
              >
                예약하기
              </Link>
              <Link 
                href="/about"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-4 md:py-5 px-8 md:px-10 rounded-lg transition-all duration-300 text-base md:text-lg btn-modern"
              >
                준비사항
              </Link>
            </div>
          </div>
        </section>

        {/* 푸터 */}
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
                <p className="text-gray-300 leading-relaxed">
                  감각적인 연출과 완벽한 디테일로<br/>
                  당신만의 특별한 순간을 만들어갑니다
                </p>
              </div>

              {/* 연락처 정보 */}
              <div className="text-center">
                <div className="space-y-2 text-gray-300">
                  <p>Email: kazuya7x@naver.com</p>
                  
                </div>
              </div>

              {/* 소셜 미디어 & 메뉴 */}
              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link href="/booking" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    예약
                  </Link>
                  <Link href="/portfolio" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Portfolio 보기
                  </Link>
                  <Link href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    촬영 준비사항
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
                  High Quality
                </span>
                <span className="flex items-center">
                  Professional Photographer 
                </span>
                
              </div>
            </div>
          </div>

          {/* 장식적 하단 그라데이션 */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </footer>
      </main>
    </div>
  )
}