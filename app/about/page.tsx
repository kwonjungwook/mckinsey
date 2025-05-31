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
                    메이크업 & 헤어
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

          {/* 4. 바디프로필 과학적 가이드 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                🧬 바디프로필 과학적 가이드
              </h2>
              
              <div className="space-y-8">
                {/* 장기 준비 (6개월~3개월 전) */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    📅 장기 준비 (6개월~3개월 전)
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">과학적 식단 관리</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        • <strong>체지방률 목표</strong>: 남성 9% 이하, 여성 15% 이하 (정상: 남성 15-20%, 여성 20-25%)<br/>
                        • <strong>감량 속도</strong>: 한 달에 체중의 5% 내외, 일반적으로 2-3kg 감량 권장<br/>
                        • <strong>영양 균형</strong>: 탄수화물, 단백질, 지방, 식이섬유의 균형 잡힌 섭취<br/>
                        • <strong>개인 맞춤</strong>: 획일화된 '닭가슴살+고구마' 방식보다 개인별 맞춤 식단
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">운동 프로그램</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        • <strong>근력운동</strong>: 주 6일, 하루 1-2회, 3분할(가슴/등/어깨/하체)<br/>
                        • <strong>유산소운동</strong>: 근력운동 후 20분 또는 공복 50분 산책<br/>
                        • <strong>생활 유산소</strong>: 일상 활동 중 걷기 늘리기<br/>
                        • <strong>준비 기간</strong>: 최소 6개월~1년 권장
                      </p>
                    </div>
                  </div>
                </div>

                {/* 피킹 단계 (1-2주 전) */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    ⚡ 피킹 단계 (1-2주 전)
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">탄수화물 밴딩/로딩</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        • <strong>원리</strong>: 글리코겐 저장 시 3-4배 수분을 끌어들여 근육 글리코겐을 정상의 2-3배까지 증가<br/>
                        • <strong>D-6~7일</strong>: 고강도 운동 + 탄수화물 절제 (밴딩)<br/>
                        • <strong>D-2~3일</strong>: 중/저강도 운동 + 고탄수화물 식사 (로딩)
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">수분 및 나트륨 조절</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        • <strong>D-4까지</strong>: 하루 6리터 수분, 4000mg 염분 섭취<br/>
                        • <strong>D-2일 전</strong>: 염분 증가 → 일시적 수분 보유 후 소금 완전 제거<br/>
                        • <strong>점진적 감량</strong>: 예) 1L → 2L(3일) → 500ml → 300ml → 단수<br/>
                        • <strong>원리</strong>: 피하수분이 근육으로 이동하여 펌핑 효과와 선명도 증가
                      </p>
                    </div>
                  </div>
                </div>

                {/* 촬영 당일 과학적 준비 */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    📸 촬영 당일 과학적 준비
                  </h3>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      • <strong>당분 섭취</strong>: 사탕, 양갱으로 당 떨어짐 방지<br/>
                      • <strong>복근 펌핑</strong>: 호흡을 끝까지 내뱉고 쥐어짜듯 숨 참기<br/>
                      • <strong>각 부위 펌핑</strong>: 가벼운 고반복 운동으로 혈류량 증가<br/>
                      • <strong>태닝 효과</strong>: 기본 태닝 + 탠 스프레이 + 베이비오일로 근육 선명도 극대화
                    </p>
                  </div>
                </div>

                {/* 촬영 후 안전한 회복 */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    🔄 촬영 후 안전한 회복
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">주의해야 할 부작용</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        • <strong>신체적 부작용</strong>: 거식증, 폭식증, 요요현상, 생리중단, 탈모, 빈혈<br/>
                        • <strong>심리적 부작용</strong>: 음식 강박, 우울감, 식이장애<br/>
                        • <strong>심각한 합병증</strong>: 외상성 횡문근융해증(근육 손상으로 신장 기능 저하)
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">안전한 회복 방법</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        • <strong>점진적 회복</strong>: 6개월 이상에 걸쳐 정상 식단으로 복귀<br/>
                        • <strong>충분한 수분</strong>: 하루 3L 정도의 수분 섭취<br/>
                        • <strong>균형 잡힌 영양</strong>: 호르몬 밸런스 회복을 위한 영양소 섭취<br/>
                        • <strong>정신 건강</strong>: 바디프로필은 '과정'이지 '목적'이 아님을 인식
                      </p>
                    </div>
                  </div>
                </div>

                {/* 의학적 경고 */}
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
                    <strong className="text-red-600 dark:text-red-400">건강을 최우선으로 하여 전문가와 상담 후 진행하시기 바랍니다.</strong>
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