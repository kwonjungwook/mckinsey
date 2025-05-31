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
              부산 바다를 배경으로 한 완벽한 바디프로필 촬영을 위한 준비사항과 진행 과정을 확인해보세요
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
                    과식은 피하고, 야외 촬영 특성상 체력 소모가 있으니 컨디션 관리에 신경 써주세요.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    의상 준비
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    바다를 배경으로 한 야외 촬영에 적합한 의상을 준비해 주세요. 비키니, 원피스, 운동복 등 
                    2-3벌 준비해 주시면 됩니다. 바람이 불 수 있으니 날림을 방지할 수 있는 핏이 좋은 의상을 권장합니다. 
                    색상은 화이트, 베이지, 블랙, 파스텔 톤이 바다와 잘 어울립니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    메이크업 &amp; 헤어
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    야외 촬영 특성상 자연스러운 메이크업을 권장합니다. 바람과 습도에 대비해 
                    워터프루프 제품 사용을 추천하며, 헤어는 바람에 자연스럽게 흘러도 예쁜 스타일링을 해주세요. 
                    과도한 스타일링 제품은 피해주시기 바랍니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    오일 및 소품 준비
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                🏖️ 촬영 당일 안내
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    촬영 시간 및 장소
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    부산 야외 촬영으로 옵션 1 또는 옵션 2 중 선택 가능합니다. 
                    이동시간을 포함하여 총 2-3시간 소요되며, 날씨와 조명 상황에 따라 시간이 조정될 수 있습니다. 
                    광안리 해변 또는 다대포 해변에서 촬영이 진행되며, 
                    황금시간대(골든아워)를 활용한 최고의 결과물을 만들어 드립니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    주차 및 교통 안내
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    <strong>광안리 촬영</strong>: 광안리 공영주차장 이용을 권장드립니다.<br/>
                    <strong>다대포 촬영</strong>: 다대포 공영주차장 이용을 권장드립니다.<br/>
                    주차 공간이 제한적일 수 있으니 여유 시간을 두고 오시기 바랍니다. 
                    대중교통 이용도 가능하며, 자세한 만남 장소는 예약 확정 후 별도 안내드립니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    계약금 및 결제 안내
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    <strong>계약금</strong>: 10만원<br/>
                    <strong>입금계좌</strong>: 농협 352-2030-126393 권지후<br/>
                    계약금 입금 후 예약이 확정되며, 잔액은 촬영 종료 후 현장에서 결제해 주시면 됩니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    취소 및 환불 정책
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    <strong>촬영일 기준 1개월 전까지</strong>: 100% 환불 가능<br/>
                    <strong>촬영일 기준 1개월 미만</strong>: 환불 불가<br/>
                    날씨로 인한 촬영 연기는 상호 협의하에 진행됩니다. 
                    태풍, 폭우 등 촬영이 불가능한 기상 상황에서는 일정 조정이 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. 촬영 후 프로세스 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                ✨ 촬영 후 프로세스
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    1단계: 잔액 결제 및 원본 전송
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    촬영 종료 후 잔액을 입금해 주시면, 당일 촬영한 원본 사진 전체를 온라인으로 전송해 드립니다. 
                    원본 사진을 통해 촬영 결과를 먼저 확인하실 수 있습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    2단계: 보정 사진 선택
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    원본 사진 확인 후, 보정을 원하시는 사진 4장을 파일넘버로 이메일 답장을 통해 알려주시면 됩니다. 
                    신중하게 선택하시어 가장 마음에 드는 사진들을 골라주세요.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    3단계: 보정 작업 및 완성
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    파일넘버 전송일로부터 최대 1개월 이내에 보정 작업을 완료하여 전달해 드립니다. 
                    자연스러운 보정을 원칙으로 하며, 바다를 배경으로 한 특별한 분위기를 살려 작업합니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    추가 보정 서비스
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    기본 4장 외에 추가 보정을 원하시는 경우, 1장당 2만원으로 보정 서비스를 제공합니다. 
                    특별한 보정 요청사항이 있으시면 미리 말씀해 주시기 바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. 바디프로필 전문가 가이드 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                🧬 바디프로필 전문가 가이드
              </h2>
              
              <div className="space-y-8">
                {/* 촬영 전 4주~1일 */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    📅 촬영 전 (4주 → 1일)
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔥 근육 볼륨 극대화: 탄수화물 고갈-재충전</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>1단계 (5-6일 전까지)</strong>: 훈련 강도 유지하며 탄수화물 2-3g/kg 이하로 제한</p>
                        <p><strong>2단계 (2-3일 전부터)</strong>: 탄수화물 7-10g/kg + 평소 단백질·지방 유지</p>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">📊 <em>2024년 Nutrition 연구</em>: 3일 로딩 후 상완 둘레·초음파 두께 3-4% 증가, 피하지방 시각적 감소</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💧 안전한 수분 관리</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>기본 원칙</strong>: 평소 수분(35-45ml/kg) 유지 → 24시간 전부터 &apos;가벼운&apos; 제한(체중의 1-2%)</p>
                        <p><strong>나트륨</strong>: 완전 차단 X, 평소 섭취량(2-3g) 유지해 세포 팽창 보존</p>
                        <p className="text-red-600 dark:text-red-400 font-medium">⚠️ 피지크 선수 62%가 대회 당일 중등도-중증 탈수 상태 (PMC 연구)</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🚀 혈류-펌프 강화</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>L-시트룰린</strong>: 6-8g, 촬영 60분 전 (NO 합성 증가)</p>
                        <p><strong>비트루트 주스</strong>: 400ml 전날 밤 + 당일 아침</p>
                        <p className="text-green-600 dark:text-green-400 font-medium">📈 시트룰린 8g 투여 후 혈류 지표 개선 보고 (개인차 존재)</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">✨ 피부 질감 &amp; 톤</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>1주 전</strong>: 각질 제거, 저자극 보습 루틴으로 피부 수분 유지</p>
                        <p><strong>24시간 전</strong>: 무향 미스트형 셀프 탄 (적당한 어두움)</p>
                        <p className="text-amber-600 dark:text-amber-400 font-medium">🎨 인공 태닝이 광반사도를 낮춰 근육 윤곽 대비 높임 (ResearchGate)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 촬영 당일 */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    📸 촬영 당일 (2시간 전 → 촬영 종료)
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💪 직전 펌프-업</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>타이밍</strong>: 30분 전, 밴드·덤벨로 보디파트 당 3세트 (12-15회, 60초 휴식)</p>
                        <p><strong>효과</strong>: 글리코겐 충전 상태 + 국소 혈류 증가 = 최대 &apos;팽창&apos; 효과</p>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">🔬 탄수 로딩 + 국소 펌핑 조합이 시각적 근육 부피 최대화 (PMC 리뷰)</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💧 실시간 수분·탄수 섭취</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>촬영 90분 동안</strong>: 15분마다 100ml 물 + 전해질</p>
                        <p><strong>당분 보충</strong>: 간격마다 꿀 한 스푼 또는 말린 과일 10g</p>
                        <p className="text-cyan-600 dark:text-cyan-400 font-medium">⚡ 탈수 2%만 돼도 혈장량·근육 펌프 감소, 미량 보충이 안전선</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🎯 포징 호흡법</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>기법</strong>: 포즈 직전 숨 내쉬며 복근 수축 → 2-3초 홀드, 시선 정면</p>
                        <p><strong>안전</strong>: 복압이 풀리면 즉시 재호흡 후 반복</p>
                        <p className="text-red-600 dark:text-red-400 font-medium">🫁 복압-호흡 주기 5초 이내면 혈압 급등 없이 복근 긴장 유지</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💡 조명·도포 최적화</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>조명</strong>: 45° 측광 소프트박스 권장</p>
                        <p><strong>오일</strong>: 하이라이트 오일 &apos;소량&apos; (광택이 아닌 &quot;새틴&quot; 질감)</p>
                        <p className="text-yellow-600 dark:text-yellow-400 font-medium">⚠️ 과유광 오일은 하이라이트 번짐 주의, 중간-저반사 피부가 최적</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 촬영 후 회복 */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    🔄 촬영 후 회복 (0시간 → 48시간)
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">⚡ 급속 회복 프로토콜</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>30분 내</strong>: ORS(전해질 음료) 500ml + 물 500ml</p>
                        <p><strong>1시간 내</strong>: 탄수화물 1g/kg + 단백질 0.3g/kg (예: 바나나 2개 + 단백질 쉐이크)</p>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium">🚀 ORS 섭취가 단순 물보다 재수화 속도 30% 향상</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🏃‍♂️ 근육·에너지 회복</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>24시간 동안</strong>: 매 식사마다 탄수화물 1g/kg 유지, 총 단백질 2g/kg</p>
                        <p><strong>활동</strong>: 저강도 스트레칭·폼롤링 20분</p>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">📚 4시간 이내 충분 탄수·단백질 투입 시 근·간 글리코겐 회복 가속</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🛡️ 피부·면역 케어</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>즉시</strong>: 태닝 잔여물 샤워로 제거 → 항산화 로션 도포</p>
                        <p><strong>보충제</strong>: 비타민 C 1g, E 200IU로 자외선 프리래디컬 감소</p>
                        <p className="text-orange-600 dark:text-orange-400 font-medium">🔬 자외선 노출 후 항산화 보충이 염증 마커 감소 (2024 메타분석)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 두 가지 접근법 비교 */}
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    ⚖️ 두 가지 접근법 비교
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">🛡️ 안전 지향 &quot;촬영용&quot;</h4>
                      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <p>• 탈수 최소화 (1-2%)</p>
                        <p>• 탄수화물 중간치 로딩</p>
                        <p>• 나트륨 유지</p>
                        <p>• 촬영 직후 정상 식단 복귀</p>
                        <p className="text-green-600 dark:text-green-400 font-medium">→ 컨디션 보존, 빠른 회복</p>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">⚡ 극대화 &quot;대회식&quot;</h4>
                      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <p>• 체중 3-4% 수분 제거</p>
                        <p>• 10g/kg 이상 탄수화물 로딩</p>
                        <p>• 나트륨 하루 차단</p>
                        <p>• 물·나트륨 복귀 지연</p>
                        <p className="text-red-600 dark:text-red-400 font-medium">→ 외형 극대화 but 위험성 ↑</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Checklist */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    📋 Quick Checklist
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p><strong>T-7일</strong>: 각질제거·보습 시작, 탄수 제한·훈련 강도 유지</p>
                      <p><strong>T-3일</strong>: 탄수 로딩 전환, 수분 섭취 그대로</p>
                      <p><strong>T-1일</strong>: 수분 2L 전후로 조절, 무향 셀프 탄 완료</p>
                    </div>
                    <div className="space-y-2">
                      <p><strong>D-Day</strong>: 시트룰린 6g, 45분 밴드 펌핑, 15분마다 미량 수분·당</p>
                      <p><strong>+2시간</strong>: ORS·탄수·단백질 보충, 스트레칭</p>
                      <p><strong>+24시간</strong>: 평소 식단·훈련 복귀, 수분·체중 정상화 확인</p>
                    </div>
                  </div>
                </div>

                {/* 기존 과학적 가이드 유지 */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
                  <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-3">
                    ⚠️ 의학적 경고사항
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    <strong>극단적인 다이어트의 위험성:</strong><br/>
                    • 탄수화물 과도 제한 → 뇌 포도당 부족 → 집중력 감소, 두통, 무기력<br/>
                    • 저나트륨혈증 → 근육수축, 발작, 심한 경우 사망 위험<br/>
                    • 체지방 과도 감소 → 호르몬 불균형 → 생리불순, 골다공증, 불임, 면역력 저하<br/>
                    <br/>
                    <strong className="text-red-600 dark:text-red-400">안전 지향 접근법을 권장하며, 건강을 최우선으로 전문가 상담 후 진행하시기 바랍니다.</strong>
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