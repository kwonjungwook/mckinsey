'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

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

  if (!isOpen || !images[currentIndex]) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* 모달 콘텐츠 */}
      <div className="relative z-10 max-w-7xl max-h-full mx-4 flex items-center justify-center">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
          aria-label="모달 닫기"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* 이전 버튼 */}
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
            aria-label="이전 이미지"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {/* 다음 버튼 */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
            aria-label="다음 이미지"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}

        {/* 이미지 */}
        <div className="relative max-w-full max-h-full flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
            priority
          />
        </div>

        {/* 이미지 정보 */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 