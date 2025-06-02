'use client'

import Image from 'next/image'
import { useState } from 'react'
import Footer from '../../components/Footer'
import ImageModal from '../../components/ImageModal'
import Nav from '../../components/Nav'

export default function PortfolioPage() {
  // Cloudinary 이미지 URL들 (예시)
  const portfolioImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873704/25.1_hifswj.png",
      alt: "바디프로필 촬영 1",
      width: 400,
      height: 600
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748672672/6_gayjxz.png", 
      alt: "바디프로필 촬영 2",
      width: 400,
      height: 500
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748673636/L1200780_v10geg.jpg",
      alt: "바디프로필 촬영 3", 
      width: 400,
      height: 650
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873705/22_ilzfrg.png",
      alt: "바디프로필 촬영 4",
      width: 400,
      height: 550
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748874278/L1200829-6_hyalqt.jpg",
      alt: "바디프로필 촬영 5",
      width: 400,
      height: 700
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675007/L2310757_steot9.jpg",
      alt: "바디프로필 촬영 6",
      width: 400,
      height: 480
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748874369/L1330447sd_bjqwv5.jpg",
      alt: "바디프로필 촬영 7",
      width: 400,
      height: 620
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748674882/L1020302_whnmak.jpg",
      alt: "바디프로필 촬영 8",
      width: 400,
      height: 580
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748677592/14_u8rmde.png",
      alt: "바디프로필 촬영 9",
      width: 400,
      height: 660
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748874224/L1220471-6_gzlcfm.jpg",
      alt: "바디프로필 촬영 10",
      width: 400,
      height: 520
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873704/21_ohzmvn.png",
      alt: "바디프로필 촬영 11",
      width: 400,
      height: 640
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675712/11_ae4y3i.png",
      alt: "바디프로필 촬영 12",
      width: 400,
      height: 590
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748874247/L1420328e_bhux6v.jpg",
      alt: "바디프로필 촬영 13",
      width: 400,
      height: 660
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748874317/L1090503%E3%84%B4_qwbxe8.jpg",
      alt: "바디프로필 촬영 14",
      width: 400,
      height: 520
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873703/29_y6i1py.png",
      alt: "바디프로필 촬영 15",
      width: 400,
      height: 640
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748689009/L1210421s_r0wkwt.png",
      alt: "바디프로필 촬영 16",
      width: 400,
      height: 590
    },
    {
      id: 17,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675711/12_gknc5q.png",
      alt: "바디프로필 촬영 17",
      width: 400,
      height: 660
    },
    {
      id: 18,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748672672/3_fsotgd.png",
      alt: "바디프로필 촬영 18",
      width: 400,
      height: 520
    },
    {
      id: 19,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873704/20_kj7ste.png",
      alt: "바디프로필 촬영 19",
      width: 400,
      height: 640
    },
    {
      id: 20,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748875442/00_qmmek7.png",
      alt: "바디프로필 촬영 20",
      width: 400,
      height: 590
    },
    {
      id: 21,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748677591/17_o4f1sn.png",
      alt: "바디프로필 촬영 21",
      width: 400,
      height: 660
    },
    {
      id: 22,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748673723/123_sibqu6.jpg",
      alt: "바디프로필 촬영 22",
      width: 400,
      height: 520
    },
    {
      id: 23,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873704/28_x5zxjz.png",
      alt: "바디프로필 촬영 23",
      width: 400,
      height: 640
    },
    {
      id: 24,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873703/26_isu5hq.png",
      alt: "바디프로필 촬영 24",
      width: 400,
      height: 590
    }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 이미지 클릭 핸들러
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  // 모달 네비게이션 핸들러
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length)
  }

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 네비게이션 */}
      <Nav />
      
      {/* 메인 콘텐츠 */}
      <main className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 페이지 제목 */}
          <div className="relative text-center mb-16 md:mb-20">
            {/* 배경 장식 */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <div className="text-[15rem] md:text-[20rem] font-bold text-gray-900 dark:text-white select-none">
                ART
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block mb-6 md:mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm md:text-base text-gray-700 dark:text-gray-300 backdrop-blur-sm border border-white/20">
                  📸 Mckinsey Studio Collection
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-white">
                Portfolio
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 md:mb-8 rounded-full"></div>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
                완벽한 순간들의 컬렉션<br/>
                <span className="text-lg md:text-xl opacity-80">감각적인 연출과 세련된 터치로 완성된 작품들을 만나보세요</span>
              </p>
              
              {/* 통계 정보 */}
              <div className="flex justify-center items-center space-x-8 md:space-x-12 mt-8 md:mt-12 text-sm md:text-base text-gray-500 dark:text-gray-400">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">24+</div>
                  <div>Featured Works</div>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div>Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">Premium</div>
                  <div>Quality</div>
                </div>
              </div>
            </div>
          </div>         

          {/* Masonry Grid 포트폴리오 갤러리 */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {portfolioImages.map((image, index) => (
              <div 
                key={image.id} 
                className="break-inside-avoid mb-4 group cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="text-center mt-12">
          </div>     
        </div>
      </main>

      {/* 이미지 모달 */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={portfolioImages}
        currentIndex={currentImageIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      
      {/* 푸터 */}
      <Footer />
    </div>
  )
}