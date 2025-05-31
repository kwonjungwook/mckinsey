'use client'

import Nav from '../../components/Nav'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 네비게이션 */}
      <Nav />
      
      {/* 메인 콘텐츠 */}
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 페이지 제목 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              촬영 안내
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              완벽한 바디프로필 촬영을 위한 준비사항과 진행 과정을 확인해보세요
            </p>
          </div>

          {/* 1. 촬영 전 준비사항 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                🎯 촬영 전 준비사항
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    몸 관리 및 컨디션
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    촬영 2-3일 전부터 충분한 수분 섭취와 가벼운 운동을 권장합니다. 
                    충분한 수면을 취하고, 촬영 당일에는 가벼운 식사 후 오시면 됩니다. 
                    과식은 피하고, 촬영 1시간 전까지는 물을 충분히 마시되 직전에는 화장실을 다녀오세요.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    의상 준비
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    바디라인이 드러나는 의상을 추천합니다. 운동복, 속옷, 비키니, 원피스 등 
                    다양한 스타일로 2-3벌 준비해 주세요. 색상은 블랙, 화이트, 베이지 톤이 가장 무난하며, 
                    액세서리나 소품도 함께 가져오시면 더욱 다채로운 컷을 연출할 수 있습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    메이크업 & 헤어
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    기본 메이크업은 본인이 직접 해오시거나, 럭셔리 패키지의 경우 전문 메이크업 아티스트가 
                    현장에서 도움을 드립니다. 헤어는 자연스러운 스타일링을 권장하며, 
                    과도한 스타일링 제품 사용은 피해주세요.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. 촬영 당일 안내 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                📸 촬영 당일 안내
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    촬영 시간 및 진행
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    패키지에 따라 1-3시간 소요됩니다. 베이직 1시간, 프리미엄 2시간, 럭셔리 3시간이며, 
                    의상 체인지와 휴식 시간이 포함되어 있습니다. 남성 바디프로필 촬영도 가능하며, 
                    전문 포토그래퍼가 남성 특화 포즈와 조명을 활용해 멋진 결과물을 만들어 드립니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    동반자 및 주차 안내
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    동반자와 함께 오실 수 있습니다. 스튜디오 공간의 한계로 1-2명까지만 동반 가능하며, 
                    촬영에 방해가 되지 않는 선에서 참관하실 수 있습니다. 
                    스튜디오 건물 지하에 무료 주차장이 있으나 공간이 제한적이므로 대중교통 이용을 권장드립니다. 
                    지하철 2호선 강남역에서 도보 5분 거리입니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    변경 및 취소 정책
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    촬영 24시간 전까지는 무료로 변경 가능합니다. 당일 취소 시에는 50% 취소 수수료가 발생하며, 
                    노쇼의 경우 100% 차감됩니다. 긴장하지 마시고 편안한 마음으로 오시면 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. 촬영 후 서비스 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                ✨ 촬영 후 서비스
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    사진 전달 및 미리보기
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    기본적으로 촬영 후 7-10일 내에 온라인으로 전달해 드립니다. 
                    럭셔리 패키지의 경우 당일 미리보기 5-10장을 바로 확인하실 수 있어 
                    만족도를 즉시 확인하실 수 있습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    리터칭 및 보정
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    자연스러운 보정을 원칙으로 합니다. 피부톤 보정, 잡티 제거, 바디라인 정리 등이 포함되며, 
                    과도한 보정보다는 원본의 아름다움을 살리는 방향으로 작업합니다. 
                    자연스럽게 더욱 아름다운 모습으로 완성해 드립니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    추가 옵션 서비스
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    추가 의상 체인지, 연장 촬영, 특수 컨셉 촬영, 영상 촬영 등이 가능합니다. 
                    개인의 니즈에 맞춘 맞춤 패키지를 사전 상담을 통해 제안해 드리며, 
                    특별한 요청사항이 있으시면 언제든지 말씀해 주세요.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA 섹션 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              언제든지 편하게 문의해 주세요. 친절하게 상담해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                카카오톡 상담
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                전화 상담
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}