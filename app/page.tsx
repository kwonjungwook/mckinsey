'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav'

// 화면 크기 감지 훅
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // md 브레이크포인트
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

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
      title: "Body Profile by Mckinsey Studio",
      subtitle: "당신의 아름다운 순간을 영원히 담아내는"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748678877/garo1_l1eewg.png",
      mobileSrc: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675711/12_gknc5q.png",
      alt: "바디프로필 촬영 - 우아한 실루엣",
      title: "Professional Body Profile",
      subtitle: "프리미엄 바디프로필 전문 스튜디오"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748678876/garo2_ghfime.png",
      mobileSrc: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675007/L2310757_steot9.jpg",
      alt: "바디프로필 촬영 - 자연스러운 매력",
      title: "Capture Your Best Moment",
      subtitle: "최고의 퀄리티로 완성하는 특별한 경험"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748678876/garo3_imvjgm.png",
      mobileSrc: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748672672/1_azcltq.png",
      alt: "바디프로필 촬영 - 역동적인 움직임",
      title: "Transform Your Vision",
      subtitle: "당신만의 스토리를 담아내는 전문 촬영"
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
  const [isMounted, setIsMounted] = useState(false)
  const sliderRef = useRef<HTMLElement>(null)
  const isMobile = useIsMobile() // 모바일 감지

  // 현재 화면 크기에 맞는 이미지 URL 반환
  const getCurrentImageSrc = (image: HeroImage) => {
    return isMobile && image.mobileSrc ? image.mobileSrc : image.src
  }

  // 컴포넌트 마운트 확인
  useEffect(() => {
    setIsMounted(true)
  }, [])

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
    if (!isMounted || !isAutoPlay) return

    const interval = setInterval(() => {
      goToNextSlide()
    }, 4000) // 4초마다 변경
    
    return () => clearInterval(interval)
  }, [isAutoPlay, goToNextSlide, isMounted])

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
              <Image
                src={getCurrentImageSrc(image)}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
                quality={85}
              />
              {/* 어두운 오버레이 */}
              <div className="absolute inset-0 bg-black/10 z-10"></div>
            </div>
          ))}

          {/* 좌/우 화살표 버튼 */}
          <button
            onClick={goToPrevSlide}
            type="button"
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-3 transition-all duration-300 border border-white/20"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>
          
          <button
            onClick={goToNextSlide}
            type="button"
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-3 transition-all duration-300 border border-white/20"
            aria-label="다음 슬라이드"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* 중앙 텍스트 콘텐츠 */}
          <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 transition-all duration-700 leading-tight">
              {heroImages[currentSlide]?.title}
            </h1>
            <div className="h-px bg-white/30 w-12 sm:w-16 md:w-24 mx-auto mb-4 md:mb-8"></div>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-xl lg:text-2xl transition-all duration-700">
              <p className="text-balance">{heroImages[currentSlide]?.subtitle}</p>
              <p className="opacity-90 text-balance">프리미엄 바디프로필 전문 스튜디오</p>
              <p className="opacity-80 hidden sm:block text-balance">최고의 퀄리티로 완성하는 특별한 경험</p>
            </div>
            <div className="mt-4 md:mt-8 text-xs sm:text-sm md:text-base opacity-90">
              <a 
                href="http://pf.kakao.com/_MxjZRxj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors text-balance"
              >
                📱 카카오톡 문의하기
              </a>
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
        <section className="pt-8 pb-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                    sizes="(max-width: 768px) 50vw, 25vw"
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 text-balance">
              당신만의 특별한 순간을 만들어보세요
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-balance">
              5년 이상의 경험과 전문성으로 완성하는 프리미엄 바디프로필
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/booking"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-colors duration-300 text-sm md:text-base btn-modern"
              >
                예약하기
              </Link>
              <Link 
                href="/about"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300 text-sm md:text-base btn-modern"
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
            <p className="mt-2">
              부산 야외촬영 전문 | 
              <a 
                href="http://pf.kakao.com/_MxjZRxj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors ml-1"
              >
                카카오톡 문의
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}