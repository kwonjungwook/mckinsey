import Image from 'next/image'
import Nav from '../../components/Nav'

export default function PortfolioPage() {
  // Cloudinary 이미지 URL들 (예시)
  const portfolioImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_1.jpg",
      alt: "바디프로필 촬영 1",
      width: 400,
      height: 600
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_2.jpg", 
      alt: "바디프로필 촬영 2",
      width: 400,
      height: 500
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_3.jpg",
      alt: "바디프로필 촬영 3", 
      width: 400,
      height: 650
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_4.jpg",
      alt: "바디프로필 촬영 4",
      width: 400,
      height: 550
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_5.jpg",
      alt: "바디프로필 촬영 5",
      width: 400,
      height: 700
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_6.jpg",
      alt: "바디프로필 촬영 6",
      width: 400,
      height: 480
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_7.jpg",
      alt: "바디프로필 촬영 7",
      width: 400,
      height: 620
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_8.jpg",
      alt: "바디프로필 촬영 8",
      width: 400,
      height: 580
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_9.jpg",
      alt: "바디프로필 촬영 9",
      width: 400,
      height: 660
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_10.jpg",
      alt: "바디프로필 촬영 10",
      width: 400,
      height: 520
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_11.jpg",
      alt: "바디프로필 촬영 11",
      width: 400,
      height: 640
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_12.jpg",
      alt: "바디프로필 촬영 12",
      width: 400,
      height: 590
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 네비게이션 */}
      <Nav />
      
      {/* 메인 콘텐츠 */}
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 페이지 제목 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              포트폴리오
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mckinsey Studio에서 촬영한 바디프로필 작품들을 만나보세요
            </p>
          </div>

          {/* 필터 태그 (선택사항) */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                전체
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                남성
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                여성
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                커플
              </button>
            </div>
          </div>

          {/* Masonry Grid 포트폴리오 갤러리 */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {portfolioImages.map((image) => (
              <div 
                key={image.id} 
                className="break-inside-avoid mb-4 group cursor-pointer"
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
                  
                  {/* 오버레이 */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        확대보기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              더 많은 작품 보기
            </button>
          </div>

          {/* CTA 섹션 */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              당신도 이런 사진을 찍어보세요
            </h2>
            <p className="text-lg mb-6 opacity-90">
              전문 포토그래퍼와 함께하는 특별한 바디프로필 경험
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                촬영 상담받기
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                예약하기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}