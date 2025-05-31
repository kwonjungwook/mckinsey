'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from 'lucide-react'
import Nav from '../../components/Nav'

export default function AboutPage() {
  const preparationItems = [
    {
      question: "촬영 전 어떤 준비가 필요한가요?",
      answer: "촬영 2-3일 전부터 충분한 수분 섭취와 가벼운 운동을 권장합니다. 촬영 당일에는 가벼운 식사 후 오시면 됩니다. 의상은 본인이 원하는 컨셉에 맞춰 2-3벌 준비해 주세요."
    },
    {
      question: "어떤 의상을 준비해야 하나요?",
      answer: "바디라인이 드러나는 의상을 추천합니다. 운동복, 속옷, 비키니, 원피스 등 다양한 스타일로 준비해 주세요. 색상은 블랙, 화이트, 베이지 톤이 가장 무난합니다. 액세서리나 소품도 함께 가져오시면 더욱 다채로운 컷을 연출할 수 있습니다."
    },
    {
      question: "메이크업과 헤어는 어떻게 해야 하나요?",
      answer: "기본 메이크업은 본인이 직접 해오시거나, 럭셔리 패키지의 경우 전문 메이크업 아티스트가 현장에서 도움을 드립니다. 헤어는 자연스러운 스타일링을 권장하며, 과도한 스타일링 제품 사용은 피해주세요."
    },
    {
      question: "촬영 당일 주의사항이 있나요?",
      answer: "충분한 수면을 취하고, 과식은 피해주세요. 촬영 1시간 전까지는 물을 충분히 마시되, 직전에는 화장실을 다녀오세요. 긴장하지 마시고 편안한 마음으로 오시면 됩니다."
    }
  ]

  const faqItems = [
    {
      question: "촬영은 얼마나 걸리나요?",
      answer: "패키지에 따라 1-3시간 소요됩니다. 베이직 1시간, 프리미엄 2시간, 럭셔리 3시간이며, 의상 체인지와 휴식 시간이 포함되어 있습니다."
    },
    {
      question: "사진은 언제 받을 수 있나요?",
      answer: "기본적으로 촬영 후 7-10일 내에 온라인으로 전달해 드립니다. 럭셔리 패키지의 경우 당일 미리보기 5-10장을 바로 확인하실 수 있습니다."
    },
    {
      question: "리터칭은 어느 정도까지 가능한가요?",
      answer: "자연스러운 보정을 원칙으로 합니다. 피부톤 보정, 잡티 제거, 바디라인 정리 등이 포함되며, 과도한 보정보다는 원본의 아름다움을 살리는 방향으로 작업합니다."
    },
    {
      question: "촬영 취소나 변경이 가능한가요?",
      answer: "촬영 24시간 전까지는 무료로 변경 가능합니다. 당일 취소 시에는 50% 취소 수수료가 발생하며, 노쇼의 경우 100% 차감됩니다."
    },
    {
      question: "동반자와 함께 갈 수 있나요?",
      answer: "네, 가능합니다. 다만 스튜디오 공간의 한계로 1-2명까지만 동반 가능하며, 촬영에 방해가 되지 않는 선에서 참관하실 수 있습니다."
    },
    {
      question: "추가 옵션은 어떤 것들이 있나요?",
      answer: "추가 의상 체인지, 연장 촬영, 특수 컨셉 촬영, 영상 촬영 등이 가능합니다. 사전 상담을 통해 맞춤 패키지를 제안해 드립니다."
    },
    {
      question: "주차는 가능한가요?",
      answer: "스튜디오 건물 지하에 무료 주차장이 있습니다. 주차 공간이 제한적이므로 대중교통 이용을 권장드리며, 지하철 2호선 강남역에서 도보 5분 거리입니다."
    },
    {
      question: "남성 촬영도 가능한가요?",
      answer: "물론입니다. 남성 바디프로필 촬영 경험이 풍부한 전문 포토그래퍼가 담당하며, 남성 특화 포즈와 조명을 활용해 멋진 결과물을 만들어 드립니다."
    }
  ]

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
              완벽한 바디프로필 촬영을 위한 준비사항과 자주 묻는 질문들을 확인해보세요
            </p>
          </div>

          {/* 촬영 전 준비사항 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              촬영 전 준비사항
            </h2>
            
            <div className="space-y-4">
              {preparationItems.map((item, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-gray-800 px-4 py-4 text-left text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 shadow-md transition-all duration-200">
                        <span className="text-base md:text-lg">{item.question}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-blue-500 transition-transform duration-200`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg -mt-2 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              자주 묻는 질문
            </h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-gray-800 px-4 py-4 text-left text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 shadow-md transition-all duration-200">
                        <span className="text-base md:text-lg">{item.question}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-blue-500 transition-transform duration-200`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg -mt-2 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </section>

          {/* CTA 섹션 */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
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