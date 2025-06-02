'use client'

import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export default function ExpertGuidePage() {
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
              💪 바디프로필 전문가 가이드
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              더 완벽한 바디프로필을 위한 체계적인 준비 과정입니다. 
              건강을 최우선으로 하는 안전한 방법으로 최고의 결과를 만들어보세요.
            </p>
            <div className="mt-6">
              <Link 
                href="/about"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← 촬영안내로 돌아가기
              </Link>
            </div>
          </div>

          {/* 밴딩과 로딩 설명 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                🔄 밴딩과 로딩이란?
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    🎯 핵심 개념: 스펀지 비우고 다시 적시는 과정
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    근육을 <strong>말렸다가 단숨에 다시 채워 넣는</strong> 방법입니다. 
                    &apos;비우기-채우기&apos; 순서를 지키면 촬영 당일 근육은 풍선처럼 팽팽하고 피부는 종이처럼 얇아집니다.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">📉 밴딩 (탄수화물 줄이기)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        2-4일간 탄수화물 섭취를 <strong>확 줄이고</strong> 가벼운 운동으로 근육에 저장된 에너지를 비움
                      </p>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <p>• 탄수화물 ≤ 1g/kg 하루</p>
                        <p>• 근육이 물까지 잃어 &apos;납작하지만 선명한&apos; 상태</p>
                        <p>• 동시에 에너지 흡수 능력이 급상승</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">📈 로딩 (탄수화물 폭충전)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        1-2일간 탄수화물을 <strong>폭발적으로 늘려</strong> 공급하면 근육이 급속 흡수하여 부풀어 오름
                      </p>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <p>• 탄수화물 7-10g/kg 하루</p>
                        <p>• &quot;마른 스펀지&quot;가 에너지와 물을 급속 흡수</p>
                        <p>• 근육 셀 부피가 부풀고 혈관이 도드라짐</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🏠 집에서 쉽게 적용하는 방법
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">촬영 4~2일 전 (밴딩)</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• 흰쌀·빵·면 등 <strong>단순 탄수화물 차단</strong></li>
                        <li>• 오트밀·현미 100-150g 정도만 섭취</li>
                        <li>• 가벼운 운동으로 근육 에너지 소모</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">촬영 1일 전~당일 (로딩)</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• 아침부터 흰쌀밥·꿀 위주로 <strong>7-10g/kg 분할 섭취</strong></li>
                        <li>• 첫 6시간 동안 총량의 50% 먹기</li>
                        <li>• 물·소금은 평소 수준 유지</li>
                        <li>• 촬영 45분 전 가벼운 근육 운동</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    ⚠️ 실패를 막는 세 가지 팁
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <p><strong>1. 밴딩 없이 로딩만?</strong> 체중이 &apos;부어&apos; 버리고 복근 선이 사라집니다. 밴딩으로 에너지 저장소를 먼저 비워야 과흡수 효과가 생깁니다.</p>
                    <p><strong>2. 지나친 탈수 금지</strong> 체중의 2% 이상 물을 빼면 혈액량이 줄어 근육이 부풀지 않습니다. &apos;적당히&apos; 마른 상태가 사진발 최적입니다.</p>
                    <p><strong>3. 과일로만 로딩?</strong> 과당은 근육보다 간으로 먼저 가기 때문에 &apos;복근 팽팽함&apos;에는 비효율적입니다. 첫날은 포도당/쌀밥 위주로 하세요.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 촬영 전 준비 (4주 → 1일) */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                📅 촬영 전 준비 과정 (4주 → 1일)
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔥 근육 볼륨 극대화하기</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>1단계 (5-6일 전까지)</strong>: 운동 강도는 유지하면서 탄수화물만 하루 체중 1kg당 2-3g 이하로 줄이기</p>
                    <p><strong>2단계 (2-3일 전부터)</strong>: 탄수화물을 하루 체중 1kg당 7-10g으로 늘리고 단백질·지방은 평소대로 유지</p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">💡 효과: 3일 정도 탄수화물을 많이 먹으면 팔 둘레가 3-4% 늘어나고 피부 아래 지방이 시각적으로 줄어보입니다</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">💧 안전한 수분 관리</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>기본 원칙</strong>: 평소 수분 섭취량(체중 1kg당 35-45ml) 유지하다가 24시간 전부터 &apos;가볍게&apos; 줄이기 (체중의 1-2% 정도)</p>
                    <p><strong>소금 섭취</strong>: 완전히 끊지 말고 평소 섭취량(하루 2-3g) 유지해서 세포가 적절히 부풀어 있도록 하기</p>
                    <p className="text-red-600 dark:text-red-400 font-medium">⚠️ 주의: 많은 바디빌더들이 대회 당일 심한 탈수 상태가 됩니다. 안전을 위해 적당한 선에서 멈추세요</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🚀 혈액순환 개선하기</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>혈액순환 보조제</strong>: 촬영 60분 전에 6-8g 정도 (혈관을 확장시켜 근육이 더 부풀어 보이게 함)</p>
                    <p><strong>비트 주스</strong>: 전날 밤과 당일 아침에 400ml씩 마시기</p>
                    <p className="text-green-600 dark:text-green-400 font-medium">📈 효과: 혈액순환이 개선되어 근육이 더 선명하고 혈관이 도드라져 보입니다 (개인차 있음)</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">✨ 피부 관리 &amp; 태닝</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>1주 전</strong>: 각질 제거하고 자극 없는 보습제로 피부 수분 유지하기</p>
                    <p><strong>24시간 전</strong>: 향이 없는 스프레이형 셀프 태닝제로 적당히 어둡게 만들기</p>
                    <p className="text-amber-600 dark:text-amber-400 font-medium">🎨 효과: 인공 태닝이 빛 반사를 줄여서 근육 라인이 더 뚜렷하게 보입니다</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 촬영 당일 가이드 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                📸 촬영 당일 가이드 (2시간 전 → 촬영 종료)
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">💪 촬영 직전 근육 부풀리기</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>타이밍</strong>: 촬영 30분 전에 저항밴드나 가벼운 덤벨로 각 부위별 3세트씩 (12-15회, 60초 휴식)</p>
                    <p><strong>효과</strong>: 탄수화물이 가득 찬 상태에서 국소적으로 혈류를 증가시키면 최대 &apos;팽창&apos; 효과가 나타남</p>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">🔬 원리: 탄수화물 로딩과 국소 펌핑 운동을 조합하면 시각적으로 근육 부피가 최대화됩니다</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">💧 촬영 중 수분·당분 보충</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>촬영 90분 동안</strong>: 15분마다 물 100ml + 이온음료 조금씩 마시기</p>
                    <p><strong>당분 보충</strong>: 촬영 중간중간 꿀 한 스푼이나 말린 과일 10g 정도 섭취</p>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium">⚡ 중요: 탈수가 2%만 되어도 혈액량과 근육 팽창이 줄어들므로 소량씩 꾸준히 보충하는 것이 안전합니다</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🎯 포즈 잡을 때 숨 쉬는 방법</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>방법</strong>: 포즈 직전에 숨을 내쉬면서 복근을 수축시키고 2-3초 홀드, 시선은 정면으로</p>
                    <p><strong>안전수칙</strong>: 복부 압력이 풀리면 즉시 다시 숨을 쉬고 반복</p>
                    <p className="text-red-600 dark:text-red-400 font-medium">🫁 팁: 복부 압력과 호흡 주기를 5초 이내로 하면 혈압 급등 없이 복근 긴장을 유지할 수 있습니다</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">💡 조명과 오일 사용법</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>조명</strong>: 45도 측면에서 부드러운 조명이 근육 라인을 가장 잘 살려줍니다</p>
                    <p><strong>바디오일</strong>: 하이라이트용 오일을 &apos;소량만&apos; 사용 (번들거리지 않고 &apos;새틴&apos; 같은 질감이 목표)</p>
                    <p className="text-yellow-600 dark:text-yellow-400 font-medium">⚠️ 주의: 너무 많은 오일은 하이라이트가 번져 보이므로 중간 정도의 반사율이 최적입니다</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 촬영 후 회복 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                🔄 촬영 후 빠른 회복 (0시간 → 48시간)
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">⚡ 빠른 회복 방법</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>30분 내</strong>: 이온음료 500ml + 물 500ml 마시기</p>
                    <p><strong>1시간 내</strong>: 탄수화물 체중 1kg당 1g + 단백질 체중 1kg당 0.3g 섭취 (예: 바나나 2개 + 단백질 보충제)</p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">🚀 효과: 이온음료 섭취가 단순 물보다 수분 보충 속도를 30% 향상시킵니다</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🏃‍♂️ 근육과 에너지 회복</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>24시간 동안</strong>: 매 식사마다 탄수화물 체중 1kg당 1g 유지, 총 단백질 체중 1kg당 2g 섭취</p>
                    <p><strong>가벼운 활동</strong>: 저강도 스트레칭이나 폼롤러 20분 정도</p>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">📚 효과: 4시간 이내에 충분한 탄수화물과 단백질을 섭취하면 근육과 간의 에너지 회복이 빨라집니다</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🛡️ 피부와 면역력 관리</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>즉시</strong>: 태닝제 잔여물을 샤워로 깨끗이 제거하고 항산화 로션 발라주기</p>
                    <p><strong>영양보충</strong>: 비타민 C 1g, 비타민 E 200IU로 자외선으로 인한 활성산소 줄이기</p>
                    <p className="text-orange-600 dark:text-orange-400 font-medium">🔬 효과: 자외선 노출 후 항산화 보충제 섭취가 염증 지표를 감소시킨다는 연구 결과가 있습니다</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 두 가지 접근법 비교 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                ⚖️ 두 가지 방법 비교
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">🛡️ 안전 중심 &quot;촬영용&quot;</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• 탈수 최소화 (체중의 1-2%만)</p>
                    <p>• 탄수화물 적당히 늘리기</p>
                    <p>• 소금 섭취 유지</p>
                    <p>• 촬영 직후 바로 정상 식단으로</p>
                    <p className="text-green-600 dark:text-green-400 font-medium mt-3">→ 컨디션 유지, 빠른 회복</p>
                  </div>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="text-xl font-semibold text-red-700 dark:text-red-400 mb-4">⚡ 극한 방식 &quot;대회식&quot;</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• 체중의 3-4% 수분 제거</p>
                    <p>• 체중 1kg당 10g 이상 탄수화물</p>
                    <p>• 소금 완전 차단</p>
                    <p>• 회복 과정 지연</p>
                    <p className="text-red-600 dark:text-red-400 font-medium mt-3">→ 외형 극대화하지만 위험성 높음</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 체크리스트 */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                📋 간단 체크리스트
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="space-y-3">
                  <p><strong>촬영 7일 전</strong>: 각질제거·보습 시작, 탄수화물 줄이기·운동 강도 유지</p>
                  <p><strong>촬영 3일 전</strong>: 탄수화물 늘리기 시작, 수분 섭취는 그대로</p>
                  <p><strong>촬영 1일 전</strong>: 수분 2L 정도로 조절, 셀프 태닝 완료</p>
                </div>
                <div className="space-y-3">
                  <p><strong>촬영 당일</strong>: 혈액순환 보조제, 45분 전 가벼운 운동, 15분마다 소량 수분·당분</p>
                  <p><strong>촬영 후 2시간</strong>: 이온음료·탄수화물·단백질 보충, 스트레칭</p>
                  <p><strong>촬영 후 24시간</strong>: 평소 식단·운동으로 복귀, 수분·체중 정상화 확인</p>
                </div>
              </div>
            </div>
          </section>

          {/* 안전 경고 */}
          <section className="mb-16">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
              <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                ⚠️ 꼭 알아두세요 - 안전 수칙
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">극단적인 다이어트의 위험성</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>탄수화물을 너무 줄이면</strong> → 뇌에 필요한 포도당 부족 → 집중력 감소, 두통, 무기력감</li>
                    <li>• <strong>소금을 완전히 끊으면</strong> → 저나트륨혈증 → 근육경련, 발작, 심한 경우 생명 위험</li>
                    <li>• <strong>체지방을 과도하게 줄이면</strong> → 호르몬 불균형 → 생리불순, 골다공증, 불임, 면역력 저하</li>
                  </ul>
                </div>
                
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 font-semibold">
                    건강을 최우선으로 하는 안전한 방법을 권장합니다. 
                    무리한 방법보다는 건강한 컨디션에서 자연스럽게 아름다운 사진을 찍는 것이 가장 좋습니다.
                    궁금한 점이 있으시면 언제든 전문가와 상담하세요.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA 섹션 */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              건강하고 안전한 바디프로필 촬영을 원하신다면
            </h2>
            <p className="text-lg mb-6 opacity-90">
              궁금한 점이나 개인별 맞춤 상담이 필요하시면 언제든지 편하게 연락주세요.
              전문적이면서도 안전한 방법으로 도와드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/booking"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                촬영 예약하기
              </Link>
              <Link 
                href="/about"
                className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
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