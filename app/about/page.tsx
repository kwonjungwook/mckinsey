'use client'

import Link from 'next/link'
import Nav from '../../components/Nav'

export default function AboutPage() {
  // 카카오톡 링크 함수
  const handleKakaoClick = () => {
    const kakaoUrl = 'http://pf.kakao.com/_MxjZRxj'
    window.open(kakaoUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 네비게이션 */}
      <Nav />
      
      {/* 메인 콘텐츠 */}
      <main className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 페이지 제목 */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-balance">
              촬영 안내
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
              부산 바다를 배경으로 한 완벽한 바디프로필 촬영을 위한 준비사항과 진행 과정을 확인해보세요
            </p>
          </div>

          {/* 1. 촬영 전 준비사항 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center text-balance">
                🎯 촬영 전 준비사항
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-balance">
                    몸 관리 및 컨디션
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                    충분한 수면을 취하고, 촬영 당일에는 가벼운 식사 후 오시면 됩니다.(전문가 가이드 참조) 
                    과식은 피하고, 야외 촬영 특성상 체력 소모가 있으니 컨디션 관리에 신경 써주세요.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-balance">
                    의상 준비
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                    바다를 배경으로 한 야외 촬영에 적합한 의상을 준비해 주세요. 비키니, 원피스, 운동복 등 
                    2-3벌 준비해 주시면 됩니다. 색상은 화이트, 베이지, 블랙, 파스텔 톤이 바다와 잘 어울립니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-balance">
                    메이크업 &amp; 헤어
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                    야외 촬영 특성상 자연스러운 메이크업을 권장합니다. 바람과 습도에 대비해 
                    워터프루프 제품 사용을 추천하며, 헤어는 바람에 자연스럽게 흘러도 예쁜 스타일링을 해주세요. 
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-balance">
                    오일 및 소품 준비
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                    바디라인을 돋보이게 하는 베이비오일이나 바디오일은 개인의 선호도에 따라 준비해 주시면 됩니다. 
                    자연스러운 광택 효과를 원하시는 분들께 권장드리며, 선글라스, 모자 등의 소품도 함께 가져오시면 
                    더욱 다채로운 컷을 연출할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. 촬영 당일 안내 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center text-balance">
                🏖️ 촬영 당일 안내
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-balance">
                    촬영 시간 및 장소
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                    부산 야외 촬영으로 옵션 1 또는 옵션 2 중 선택 가능합니다. 
                    이동시간을 포함하여 총 2-3시간 소요되며, 날씨와 조명 상황에 따라 시간이 조정될 수 있습니다. 
                    광안리 해변 또는 다대포 해변에서 촬영이 진행되며, 
                    황금시간대(골든아워)를 활용한 최고의 결과물을 만들어 드립니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-balance">
                    주차 및 교통 안내
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                    <strong>광안리 촬영</strong>: 광안리 공영주차장 이용을 권장드립니다.<br/>
                    <strong>다대포 촬영</strong>: 다대포 공영주차장 이용을 권장드립니다.<br/>
                    주차 공간이 제한적일 수 있으니 여유 시간을 두고 오시기 바랍니다. 
                    대중교통 이용도 가능하며, 자세한 만남 장소는 예약 확정 후 별도 안내드립니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. 촬영 후 프로세스 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center text-balance">
                ✨ 촬영 후 프로세스
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-balance">
                    1단계: 잔액 결제 및 원본 전송
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                    촬영 종료 후 잔액을 입금해 주시면, 당일 촬영한 원본 사진 전체를 온라인으로 전송해 드립니다. 
                    원본 사진을 통해 촬영 결과를 먼저 확인하실 수 있습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-balance">
                    2단계: 보정 사진 선택
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                    원본 사진 확인 후, 보정을 원하시는 사진 4장을 파일넘버로 이메일 답장을 통해 알려주시면 됩니다. 
                    신중하게 선택하시어 가장 마음에 드는 사진들을 골라주세요.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-balance">
                    3단계: 보정 작업 및 완성
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                    파일넘버 전송일로부터 최대 1개월 이내에 보정 작업을 완료하여 전달해 드립니다. 
                    자연스러운 보정을 원칙으로 하며, 바다를 배경으로 한 특별한 분위기를 살려 작업합니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-balance">
                    추가 보정 서비스
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                    기본 4장 외에 추가 보정을 원하시는 경우, 1장당 2만원으로 보정 서비스를 제공합니다. 
                    특별한 보정 요청사항이 있으시면 미리 말씀해 주시기 바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
      
          {/* CTA 섹션 */}
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              부산 바다에서 특별한 순간을 남겨보세요
            </h2>
            <p className="text-lg mb-6 opacity-90">
              더 궁금한 점이 있으시면 언제든지 편하게 문의해 주세요. 친절하게 상담해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/booking"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors btn-modern"
              >
                예약 문의하기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}