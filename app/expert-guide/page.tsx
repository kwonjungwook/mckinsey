'use client'

import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export default function ExpertGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      {/* 네비게이션 */}
      <Nav />
      
      {/* 메인 콘텐츠 */}
      <main className="pt-24 md:pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          
          {/* 페이지 제목 */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              💪 바디프로필
              <span className="block sm:inline sm:ml-2">전문가 가이드</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              과학적 원리를 바탕으로 한
              <span className="block sm:inline sm:ml-1">안전하고 효과적인 준비법입니다.</span>
              <span className="hidden sm:block mt-2"></span>
              하나의 일관된 전략으로
              <span className="block sm:inline sm:ml-1">최고의 결과를 만들어보세요.</span>
            </p>
            <div className="mt-4 sm:mt-6">
              <Link 
                href="/about"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
              >
                ← 촬영안내로 돌아가기
              </Link>
            </div>
          </div>

          {/* 핵심 전략 */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                🎯 하나의 명확한 전략
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 sm:p-6 rounded-lg border border-blue-200 dark:border-purple-800 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
                  근육 팽창 + 피부 선명도 = 최적의 바디프로필
                </h3>
                <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  탄수화물로 근육을 최대한 부풀리면서
                  <span className="block sm:inline sm:ml-1">동시에 피부 아래 선명도를 높이는</span>
                  <span className="hidden sm:block mt-2"></span>
                  <strong>과학적이고 안전한 방법</strong>입니다.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 sm:p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    📈 탄수화물 슈퍼 로딩 원리
                  </h3>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed space-y-2 sm:space-y-3">
                    <p>
                      근육 1g당 <strong>3-4g의 물</strong>을 저장할 수 있는
                      <span className="block sm:inline sm:ml-1">글리코겐의 특성을 이용합니다.</span>
                    </p>
                    <p>
                      평소보다 <strong>50% 더 많은 탄수화물</strong>을
                      <span className="block sm:inline sm:ml-1">3-4일간 섭취하면</span>
                      <span className="hidden sm:block mt-2"></span>
                      근육이 평소보다 <strong>15-20% 더 부풀어</strong> 보입니다.
                    </p>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      💡 결과: 같은 근육량이지만
                      <span className="block sm:inline sm:ml-1">시각적으로 훨씬 크고 탄탄해 보임</span>
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 sm:p-6 rounded-lg border border-blue-200 dark:border-cyan-800">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    💧 스마트 수분 관리
                  </h3>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed space-y-2 sm:space-y-3">
                    <p>
                      <strong>핵심 원칙:</strong> 근육 내 수분은 최대화하고
                      <span className="block sm:inline sm:ml-1">피부 아래 수분은 최적화합니다.</span>
                    </p>
                    <p>
                      평소 수분량을 <strong>끝까지 유지</strong>하다가
                      <span className="block sm:inline sm:ml-1">촬영 당일에만 타이밍을 조절합니다.</span>
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      ✅ 목표: 근육은 풍선처럼 팽팽하게,
                      <span className="block sm:inline sm:ml-1">피부는 종이처럼 얇게</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7일 완성 플랜 */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                📅 7일 완성 플랜
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {/* D-7 ~ D-4 */}
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    📍 D-7 ~ D-4: 기본기 완성
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        🍽️ 평소 식단 유지
                      </h4>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <p>• 탄수화물: 체중 1kg당 <strong>4g</strong></p>
                        <p>• 단백질: 체중 1kg당 <strong>2g</strong></p>
                        <p>• 수분: 체중 1kg당 <strong>35ml</strong></p>
                        <p>• 소금: 하루 <strong>3g</strong> 정상 섭취</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        🏃‍♂️ 컨디션 관리
                      </h4>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <p>• 운동: <strong>평소 강도 유지</strong></p>
                        <p>• 수면: <strong>7-8시간</strong> 충분히</p>
                        <p>• 스트레스: <strong>최소화</strong></p>
                        <p>• 피부 관리: 각질 제거 시작</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                      🎯 목표: 몸의 기본 리듬을 유지하면서
                      <span className="block sm:inline sm:ml-1">최적의 컨디션을 만드는 단계</span>
                    </p>
                  </div>
                </div>

                {/* D-3 ~ D-2 */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-4 sm:p-6 rounded-lg border border-orange-200 dark:border-amber-800">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    📍 D-3 ~ D-2: 로딩 시작
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                        🚀 탄수화물 증량
                      </h4>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <p>• 탄수화물: 체중 1kg당 <strong>6g</strong>로 증량</p>
                        <p>• 흰쌀밥, 바나나, 오트밀 위주</p>
                        <p>• <strong>3시간마다</strong> 분할 섭취</p>
                        <p>• 단백질/지방: <strong>기존 유지</strong></p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                        💧 수분 그대로 유지
                      </h4>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <p>• 수분: 체중 1kg당 <strong>35ml 유지</strong></p>
                        <p>• 소금: <strong>3g 계속 유지</strong></p>
                        <p>• 운동: <strong>강도 70%로 감소</strong></p>
                        <p>• 충분한 휴식</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 bg-orange-100 dark:bg-orange-900/30 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-orange-700 dark:text-orange-300 font-medium">
                      🎯 목표: 근육에 글리코겐을 가득 채워
                      <span className="block sm:inline sm:ml-1">볼륨을 극대화하는 단계</span>
                      <span className="hidden sm:block mt-2"></span>
                      💪 효과: 이 시점부터 근육이 부풀어 오르기 시작
                    </p>
                  </div>
                </div>

                {/* D-1 */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 sm:p-6 rounded-lg border border-purple-200 dark:border-indigo-800">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    📍 D-1: 파인 튜닝
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        🎯 탄수화물 유지
                      </h4>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <p>• 탄수화물: <strong>6g/kg 계속 유지</strong></p>
                        <p>• 소화 잘되는 것들로만</p>
                        <p>• 마지막 식사는 밤 8시 전</p>
                        <p>• 단백질: <strong>평소대로</strong></p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        💧 수분 첫 조절
                      </h4>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <p>• 수분: 체중 1kg당 <strong>30ml로 감량</strong></p>
                        <p>• 소금: <strong>2g으로 약간 감량</strong></p>
                        <p>• 운동: <strong>완전 휴식</strong></p>
                        <p>• 수면: <strong>8시간 이상</strong></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 bg-purple-100 dark:bg-purple-900/30 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-purple-700 dark:text-purple-300 font-medium">
                      🎯 목표: 근육 볼륨은 최대로 유지하면서
                      <span className="block sm:inline sm:ml-1">피부 아래 여분의 수분만 살짝 빼는 단계</span>
                      <span className="hidden sm:block mt-2"></span>
                      ✨ 효과: 근육 라인이 더욱 선명해지기 시작
                    </p>
                  </div>
                </div>

                {/* D-Day */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-4 sm:p-6 rounded-lg border border-red-200 dark:border-pink-800">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    📍 D-Day: 완벽한 컨디션
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                        🌅 촬영 3시간 전
                      </h4>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <p>• 바나나 2개 + 꿀 1큰술</p>
                        <p>• 물 300ml 천천히</p>
                        <p>• 가벼운 스트레칭</p>
                        <p>• 긍정적 마인드셋</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                        💪 촬영 1시간 전
                      </h4>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <p>• 가벼운 펌핑 운동 15분</p>
                        <p>• 물 200ml + 꿀 1티스푼</p>
                        <p>• 심호흡으로 긴장 완화</p>
                        <p>• 최종 컨디션 체크</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 bg-red-100 dark:bg-red-900/30 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-red-700 dark:text-red-300 font-medium">
                      🎯 목표: 3일간 쌓아온 근육 볼륨을
                      <span className="block sm:inline sm:ml-1">완벽하게 유지하면서 최고 컨디션 발휘</span>
                      <span className="hidden sm:block mt-2"></span>
                      🔥 결과: 근육 최대 팽창 + 피부 최고 선명도
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 수치 요약표 */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-blue-300 dark:border-purple-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                📊 한눈에 보는 수치표
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-white dark:bg-gray-700">
                      <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 dark:text-white">기간</th>
                      <th className="p-2 sm:p-3 text-center font-semibold text-gray-900 dark:text-white">
                        탄수화물
                        <span className="block sm:hidden">(g/kg)</span>
                        <span className="hidden sm:inline">(체중 1kg당)</span>
                      </th>
                      <th className="p-2 sm:p-3 text-center font-semibold text-gray-900 dark:text-white">
                        수분
                        <span className="block sm:hidden">(ml/kg)</span>
                        <span className="hidden sm:inline">(체중 1kg당)</span>
                      </th>
                      <th className="p-2 sm:p-3 text-center font-semibold text-gray-900 dark:text-white">
                        소금
                        <span className="block sm:hidden">(g/일)</span>
                        <span className="hidden sm:inline">(하루)</span>
                      </th>
                      <th className="p-2 sm:p-3 text-center font-semibold text-gray-900 dark:text-white">운동 강도</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-1">
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-2 sm:p-3 font-medium text-gray-900 dark:text-white">D-7~D-4</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">4g</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">35ml</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">3g</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">100%</td>
                    </tr>
                    <tr className="bg-orange-50 dark:bg-orange-900/20">
                      <td className="p-2 sm:p-3 font-medium text-gray-900 dark:text-white">D-3~D-2</td>
                      <td className="p-2 sm:p-3 text-center font-bold text-orange-600 dark:text-orange-400">6g</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">35ml</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">3g</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">70%</td>
                    </tr>
                    <tr className="bg-purple-50 dark:bg-purple-900/20">
                      <td className="p-2 sm:p-3 font-medium text-gray-900 dark:text-white">D-1</td>
                      <td className="p-2 sm:p-3 text-center font-bold text-purple-600 dark:text-purple-400">6g</td>
                      <td className="p-2 sm:p-3 text-center font-bold text-purple-600 dark:text-purple-400">30ml</td>
                      <td className="p-2 sm:p-3 text-center font-bold text-purple-600 dark:text-purple-400">2g</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">0%</td>
                    </tr>
                    <tr className="bg-red-50 dark:bg-red-900/20">
                      <td className="p-2 sm:p-3 font-medium text-gray-900 dark:text-white">D-Day</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">소량 보충</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">150ml/30분</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">-</td>
                      <td className="p-2 sm:p-3 text-center text-gray-900 dark:text-white">펌핑만</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 안전 수칙 */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-yellow-300 dark:border-yellow-700">
              <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-4 sm:mb-6 text-center">
                ⚠️ 안전이 최우선입니다
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 sm:mb-3 text-red-700 dark:text-red-400">
                    🚫 절대 금지사항
                  </h3>
                  <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-2">
                    <p>• <strong>극단적 탈수:</strong> 수분을 30ml/kg 아래로 줄이지 마세요</p>
                    <p>• <strong>소금 완전 차단:</strong> 최소 2g은 유지해야 합니다</p>
                    <p>• <strong>무리한 운동:</strong> D-1부터는 완전 휴식</p>
                    <p>• <strong>장시간 공복:</strong> 12시간 이상 굶지 마세요</p>
                  </div>
                </div>
                
                <div className="bg-green-100 dark:bg-green-900/30 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 sm:mb-3 text-green-700 dark:text-green-400">
                    ✅ 즉시 중단 신호
                  </h3>
                  <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-2">
                    <p>• 심한 두통, 어지러움, 메스꺼움</p>
                    <p>• 근육 경련, 떨림, 심장 두근거림</p>
                    <p>• 극심한 피로감이나 무기력</p>
                    <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                      👨‍⚕️ 위 증상이 나타나면 즉시 중단하고
                      <span className="block sm:inline sm:ml-1">평소 식단으로 돌아가세요</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA 섹션 */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
              과학적이고 안전한
              <span className="block sm:inline sm:ml-2">바디프로필 촬영을 원하신다면</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-90 leading-relaxed">
              하나의 일관된 전략으로
              <span className="block sm:inline sm:ml-1">건강하게 최고의 결과를 만들어보세요.</span>
              <span className="hidden sm:block mt-2"></span>
              개인별 맞춤 상담이 필요하시면
              <span className="block sm:inline sm:ml-1">언제든지 연락주세요.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/booking"
                className="bg-white text-blue-600 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                촬영 예약하기
              </Link>
              <Link 
                href="/about"
                className="border-2 border-white text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-sm sm:text-base"
              >
                촬영안내 보기
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* 푸터 */}
      <Footer />
    </div>
  )
}