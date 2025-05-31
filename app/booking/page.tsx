import Image from 'next/image'
import Nav from '../../components/Nav'

export default function BookingPage() {
  const outdoorPackages = [
    {
      name: "옵션 1",
      subtitle: "광안리 + 철망",
      price: "390,000원",
      locations: [
        { name: "광안리", address: "부산 수영구 광안해변로" },
        { name: "철망", address: "부산 남구 신선로 356" }
      ],
      features: [
        "원본 300장 이상",
        "보정본 4장",
        "2개 촬영지",
        "인원추가 +50,000원"
      ],
      outfitGuide: {
        "광안리": "흰색 또는 블랙 위주의 단색 비키니 또는 모노키니 추천",
        "철망": "스트릿 또는 힙한 의상 및 비키니, 모자 추천"
      },
      images: {
        locationImages: [
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748688745/20250531_194540_v6ktt8.png", // 광안리 장소 이미지 1
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748688745/20250531_194900_n4oh9y.png"      // 철망 장소 이미지 1
        ],
        shootingImages: [
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748673723/123_sibqu6.jpg",    // 광안리 촬영 이미지 1
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748689009/L1210421s_r0wkwt.png"         // 철망 촬영 이미지 1
        ]
      },
      popular: true
    },
    {
      name: "옵션 2",
      subtitle: "다대포 + 갈대밭",
      price: "450,000원",
      timeRestriction: "오후 5시 이후 전용",
      locations: [
        { name: "다대포 해수욕장", address: "부산 사하구 몰운대1길 14" },
        { name: "다대포 갈대밭", address: "다대포 해수욕장 일원" }
      ],
      features: [
        "원본 300장 이상",
        "보정본 4장", 
        "2개 촬영지",
        "인원추가 +50,000원",
        "갈대 계절별 색상 변화"
      ],
      outfitGuide: {
        "다대포": "흰색 또는 블랙 위주의 단색 비키니 또는 모노키니 추천",
        "갈대밭": "비키니&모노키니 + 블랙 수트 또는 흰색 셔츠 조합 추천"
      },
      seasonNote: "갈대밭은 계절에 따라 여름에는 초록색, 가을로 넘어가며 갈대색상",
      images: {
        locationImages: [
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748688745/20250531_195104_krd0eh.png",   // 다대포 장소 이미지 1
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748688747/20250531_190009_uqvy5x.png"       // 갈대밭 장소 이미지 1
        ],
        shootingImages: [
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675711/10_qayg67.png",      // 다대포 촬영 이미지 1
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675711/8_i9wdsu.png"          // 갈대밭 촬영 이미지 1
        ]
      },
      popular: false
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
              부산 야외촬영
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              바다와 도시가 어우러진 부산에서만 가능한 특별한 야외촬영
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* 예약 안내 */}
            <div className="order-2 lg:order-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  예약 안내
                </h2>
                
                {/* 운영 시간 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    📅 촬영 가능 시간
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-center mb-4">
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        주말만 운영 (토요일, 일요일)
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">오전</div>
                        <div className="text-blue-600 dark:text-blue-400 font-semibold">09:00</div>
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">오후</div>
                        <div className="text-blue-600 dark:text-blue-400 font-semibold">14:00</div>
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">저녁</div>
                        <div className="text-blue-600 dark:text-blue-400 font-semibold">17:00</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 예약 방법 */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    📝 예약 방법
                  </h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <div className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span>원하는 옵션 선택</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span>아래 카카오톡으로 연락</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span>희망 날짜/시간 + 옵션명 전송</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      <span>예약 확정 및 사전 결제</span>
                    </div>
                  </div>
                </div>

                {/* 자동 예약 버튼 */}
                <div className="space-y-3">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    카카오톡 예약하기
                  </button>
                  
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    &quot;옵션번호 + 희망날짜/시간&quot;만 보내주세요!<br/>
                    예: &quot;옵션1 + 6월 8일 오후 2시&quot;
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    ⚠️ 야외촬영 주의사항
                  </h3>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• 날씨에 따라 촬영 일정 변경 가능</li>
                    <li>• 우천 시 실내 대체 장소 제공</li>
                    <li>• 의상은 옵션별 추천 의상 참고</li>
                    <li>• 이동 시간 포함 3-4시간 소요</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 야외촬영 패키지 */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                야외촬영 옵션
              </h2>
              
              <div className="space-y-8">
                {outdoorPackages.map((option, index) => (
                  <div
                    key={index}
                    className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 transition-all duration-300 hover:shadow-xl ${
                      option.popular 
                        ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                    }`}
                  >
                    {option.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          인기
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {option.name}
                      </h3>
                      <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                        {option.subtitle}
                      </h4>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        {option.price}
                      </div>
                      {option.timeRestriction && (
                        <div className="text-sm text-orange-600 dark:text-orange-400 font-semibold">
                          {option.timeRestriction}
                        </div>
                      )}
                    </div>

                    {/* 촬영지 정보 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        📍 촬영지
                      </h4>
                      <div className="space-y-2">
                        {option.locations.map((location, locIndex) => (
                          <div key={locIndex} className="text-sm">
                            <div className="font-medium text-gray-900 dark:text-white">
                              {location.name}
                            </div>
                            <div className="text-gray-500 dark:text-gray-400">
                              {location.address}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 이미지 갤러리 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        📷 촬영지 & 작품 미리보기
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {/* 장소 이미지들 */}
                        {option.images.locationImages.map((image, imgIndex) => (
                          <div key={`location-${imgIndex}`} className="relative">
                            <Image 
                              src={image} 
                              alt={`${option.subtitle} 장소 ${imgIndex + 1}`}
                              width={200}
                              height={128}
                              className="w-full h-32 object-cover rounded-lg"
                              unoptimized
                            />
                            <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                              장소
                            </div>
                          </div>
                        ))}
                        {/* 촬영 이미지들 */}
                        {option.images.shootingImages.map((image, imgIndex) => (
                          <div key={`shooting-${imgIndex}`} className="relative">
                            <Image 
                              src={image} 
                              alt={`${option.subtitle} 작품 ${imgIndex + 1}`}
                              width={200}
                              height={128}
                              className="w-full h-32 object-cover rounded-lg"
                              unoptimized
                            />
                            <div className="absolute top-2 left-2 bg-purple-500 text-white px-2 py-1 rounded text-xs">
                              작품
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 포함사항 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        ✅ 포함사항
                      </h4>
                      <ul className="space-y-2">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 의상 가이드 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        👗 추천 의상
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(option.outfitGuide).map(([location, guide], guideIndex) => (
                          <div key={guideIndex} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                              {location}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-300">
                              {guide}
                            </div>
                          </div>
                        ))}
                      </div>
                      {option.seasonNote && (
                        <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                          <div className="text-xs text-yellow-800 dark:text-yellow-200">
                            💡 {option.seasonNote}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      option.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}>
                      {option.name} 선택하기
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}