import Image from 'next/image'
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
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873704/21_ohzmvn.png", 
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
      src: "https://res.cloudinary.com/demo/image/upload/v1571218039/body_profile_6.jpg",
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
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748677591/17_o4f1sn.png",
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
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748672672/6_gayjxz.png",
      alt: "바디프로필 촬영 11",
      width: 400,
      height: 640
    },
    {
      id: 12,
      src: "",
      alt: "바디프로필 촬영 12",
      width: 400,
      height: 590
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748874247/L1420328e_bhux6v.jpg",
      alt: "바디프로필 촬영 9",
      width: 400,
      height: 660
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748874317/L1090503%E3%84%B4_qwbxe8.jpg",
      alt: "바디프로필 촬영 10",
      width: 400,
      height: 520
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873703/29_y6i1py.png",
      alt: "바디프로필 촬영 11",
      width: 400,
      height: 640
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748689009/L1210421s_r0wkwt.png",
      alt: "바디프로필 촬영 12",
      width: 400,
      height: 590
    },
    {
      id: 17,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675711/12_gknc5q.png",
      alt: "바디프로필 촬영 9",
      width: 400,
      height: 660
    },
    {
      id: 18,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748672672/3_fsotgd.png",
      alt: "바디프로필 촬영 10",
      width: 400,
      height: 520
    },
    {
      id: 19,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873704/20_kj7ste.png",
      alt: "바디프로필 촬영 11",
      width: 400,
      height: 640
    },
    {
      id: 20,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748875442/00_qmmek7.png",
      alt: "바디프로필 촬영 12",
      width: 400,
      height: 590
    },
    {
      id: 21,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748874275/L1200864-5_mzerai.jpg",
      alt: "바디프로필 촬영 9",
      width: 400,
      height: 660
    },
    {
      id: 22,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873704/20_kj7ste.png",
      alt: "바디프로필 촬영 10",
      width: 400,
      height: 520
    },
    {
      id: 23,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748677592/14_u8rmde.png",
      alt: "바디프로필 촬영 11",
      width: 400,
      height: 640
    },
    {
      id: 24,
      src: "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748873703/26_isu5hq.png",
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
          </div>     
        </div>
      </main>
    </div>
  )
}