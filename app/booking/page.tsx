import Nav from '../../components/Nav'

export default function BookingPage() {
  const pricingPlans = [
    {
      name: "베이직",
      price: "150,000원",
      duration: "1시간",
      photos: "20장",
      features: [
        "기본 리터칭",
        "온라인 전송",
        "1회 의상 체인지",
        "기본 포즈 가이드"
      ],
      popular: false
    },
    {
      name: "프리미엄",
      price: "250,000원", 
      duration: "2시간",
      photos: "40장",
      features: [
        "고급 리터칭",
        "온라인 + USB 제공",
        "3회 의상 체인지",
        "전문 포즈 가이드",
        "메이크업 컨설팅"
      ],
      popular: true
    },
    {
      name: "럭셔리",
      price: "400,000원",
      duration: "3시간",
      photos: "60장",
      features: [
        "프리미엄 리터칭",
        "모든 원본 파일 제공",
        "무제한 의상 체인지",
        "1:1 전문 코칭",
        "헤어 & 메이크업 포함",
        "당일 미리보기 제공"
      ],
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
              온라인 예약
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              원하시는 날짜와 시간을 선택하여 간편하게 예약하세요
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Calendly Embed */}
            <div className="order-2 lg:order-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  예약 달력
                </h2>
                
                {/* Calendly iframe */}
                <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://calendly.com/example-studio/body-profile-session"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="예약 달력"
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    예약 전 확인사항
                  </h3>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• 예약 변경은 촬영 24시간 전까지 가능합니다</li>
                    <li>• 당일 취소 시 50% 취소 수수료가 발생합니다</li>
                    <li>• 의상은 2-3벌 준비해 주세요</li>
                    <li>• 촬영 1시간 전 가벼운 식사를 권장합니다</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 가격표 */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                촬영 패키지
              </h2>
              
              <div className="space-y-6">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 transition-all duration-300 hover:shadow-xl ${
                      plan.popular 
                        ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          인기
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {plan.name}
                      </h3>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        {plan.price}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        촬영시간: {plan.duration} | 제공사진: {plan.photos}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}>
                      {plan.name} 패키지 선택
                    </button>
                  </div>
                ))}
              </div>
              
              {/* 문의하기 */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  맞춤 패키지가 필요하신가요?
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  카톡 상담하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}