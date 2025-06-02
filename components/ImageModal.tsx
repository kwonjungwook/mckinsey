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
  const [isDragging, setIsDragging] = useState(false)
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

  // 터치 핸들러 (모바일용) - 성능 개선
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.touches[0].clientX)
    setIsDragging(false)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return
    setTouchEnd(e.touches[0].clientX)
    setIsDragging(true)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !isDragging) {
      setIsDragging(false)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < images.length - 1) {
      onNext()
    } else if (isRightSwipe && currentIndex > 0) {
      onPrev()
    }

    // 상태 초기화
    setTouchStart(null)
    setTouchEnd(null)
    setIsDragging(false)
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
        style={{ touchAction: 'pan-x' }}
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

        {/* 모바일 양쪽 투명 화살표 버튼 */}
        {isMobile && images.length > 1 && (
          <>
            {/* 왼쪽 화살표 */}
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
              aria-label="이전 이미지"
            >
              <ChevronLeft className="w-6 h-6 text-white/70" />
            </button>
            
            {/* 오른쪽 화살표 */}
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
              aria-label="다음 이미지"
            >
              <ChevronRight className="w-6 h-6 text-white/70" />
            </button>
          </>
        )}

        {/* 이미지 컨테이너 */}
        <div 
          ref={imageRef}
          className={`
            relative flex items-center justify-center
            ${isMobile 
              ? 'w-full h-full px-12 py-20' 
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
                : 'w-auto h-auto max-w-[85vw] max-h-[85vh]'
              }
            `}
            style={{
              transform: isMobile ? 'none' : 'scale(1.5)',
              transformOrigin: 'center'
            }}
            priority
            quality={95}
          />
        </div>

        {/* 이미지 카운터 - 하단 중앙 */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 