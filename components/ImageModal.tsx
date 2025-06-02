'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: {
    id: number
    src: string
    alt: string
    width: number
    height: number
  }[]
  currentIndex: number
  onNext: () => void
  onPrev: () => void
}

export default function ImageModal({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNext, 
  onPrev 
}: ImageModalProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // 모바일 감지
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // 배경 스크롤 방지
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // 화살표 키로 이미지 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'ArrowLeft') {
        onPrev()
      } else if (e.key === 'ArrowRight') {
        onNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onNext, onPrev])

  // 터치 핸들러 (모바일용)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.touches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return
    setTouchEnd(e.touches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < images.length - 1) {
      onNext()
    } else if (isRightSwipe && currentIndex > 0) {
      onPrev()
    }
  }

  if (!isOpen || !images[currentIndex]) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* 모달 콘텐츠 */}
      <div 
        className="relative z-10 w-full h-full flex items-center justify-center"
        onTouchStart={isMobile ? onTouchStart : undefined}
        onTouchMove={isMobile ? onTouchMove : undefined}
        onTouchEnd={isMobile ? onTouchEnd : undefined}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
          aria-label="모달 닫기"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* 이전 버튼 - 데스크톱만 */}
        {!isMobile && images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-200"
            aria-label="이전 이미지"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
        )}

        {/* 다음 버튼 - 데스크톱만 */}
        {!isMobile && images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-200"
            aria-label="다음 이미지"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        )}

        {/* 이미지 컨테이너 */}
        <div 
          ref={imageRef}
          className={`
            relative flex items-center justify-center
            ${isMobile 
              ? 'w-full h-full px-4 py-20' 
              : 'max-w-[90vw] max-h-[90vh] p-8'
            }
          `}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className={`
              object-contain
              ${isMobile 
                ? 'w-full h-full max-w-none' 
                : 'w-auto h-auto min-w-[50vw] max-w-[85vw] max-h-[85vh]'
              }
            `}
            style={{
              transform: isMobile ? 'none' : 'scale(2.2)',
              transformOrigin: 'center'
            }}
            priority
            quality={95}
          />
        </div>

        {/* 이미지 정보 & 모바일 네비게이션 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
          {/* 모바일 이전 버튼 */}
          {isMobile && images.length > 1 && currentIndex > 0 && (
            <button
              onClick={onPrev}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
              aria-label="이전 이미지"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* 이미지 카운터 */}
          {images.length > 1 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          )}

          {/* 모바일 다음 버튼 */}
          {isMobile && images.length > 1 && currentIndex < images.length - 1 && (
            <button
              onClick={onNext}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
              aria-label="다음 이미지"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>

        {/* 모바일 스와이프 힌트 */}
        {isMobile && images.length > 1 && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-xs opacity-75">
                ← 스와이프하여 이동 →
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 