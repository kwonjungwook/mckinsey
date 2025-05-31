import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'

export default function HomePage() {
  // 포트폴리오 샘플 이미지들 (다양한 크기로 구성)
  const portfolioImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 촬영 1",
      width: 400,
      height: 600
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 촬영 2",
      width: 400,
      height: 500
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506629905607-296e80317511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 촬영 3",
      width: 400,
      height: 650
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 촬영 4",
      width: 400,
      height: 550
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 촬영 5",
      width: 400,
      height: 700
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 촬영 6",
      width: 400,
      height: 480
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1582896911227-c966f6e7fb91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 촬영 7",
      width: 400,
      height: 620
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "바디프로필 촬영 8",
      width: 400,
      height: 580
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* 네비게이션 */}
      <Nav />
      
      {/* 히어로 섹션 */}
      <main className="pt-16">
        {/* 메인 히어로 이미지 */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Mckinsey Studio 히어로 이미지"
              fill
              className="object-cover"
              priority
            />
            {/* 어두운 오버레이 */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* 중앙 텍스트 콘텐츠 */}
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Body Profile by Mckinsey Studio
            </h1>
            <div className="h-px bg-white/30 w-24 mx-auto mb-8"></div>
            <div className="space-y-2 text-lg md:text-xl">
              <p>당신의 아름다운 순간을 영원히 담아내는</p>
              <p>프리미엄 바디프로필 전문 스튜디오</p>
              <p>최고의 퀄리티로 완성하는 특별한 경험</p>
            </div>
            <div className="mt-8 text-sm md:text-base">
              문의 | 010-1234-5678
            </div>
          </div>
        </section>

        {/* 포트폴리오 갤러리 섹션 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages.map((image, index) => (
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
                      <span className="text-white font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 하단 더보기 링크 */}
          <div className="text-center mt-12">
            <Link 
              href="/portfolio"
              className="inline-block text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
            >
              더 많은 작품 보기 →
            </Link>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              당신만의 특별한 순간을 만들어보세요
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              5년 이상의 경험과 전문성으로 완성하는 프리미엄 바디프로필
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/booking"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                예약하기
              </Link>
              <Link 
                href="/about"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                촬영안내
              </Link>
            </div>
          </div>
        </section>

        {/* 푸터 */}
        <footer className="bg-white py-8 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            <p>© 2024 Mckinsey Studio. All rights reserved.</p>
            <p className="mt-2">서울특별시 강남구 | 010-1234-5678 | info@mckineystudio.com</p>
          </div>
        </footer>
      </main>
    </div>
  )
}