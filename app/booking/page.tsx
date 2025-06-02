'use client'

import emailjs from '@emailjs/browser'
import Image from 'next/image'
import { useState } from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    option: '',
    datetime1: '',  // 1순위 희망 날짜/시간
    datetime2: '',  // 2순위 희망 날짜/시간  
    datetime3: '',  // 3순위 희망 날짜/시간
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 날짜/시간 옵션들 (동적 생성)
  const generateDatetimeOptions = () => {
    const options = []
    const today = new Date()
    
    // 다음 8주간의 주말 생성
    for (let week = 0; week < 8; week++) {
      // 토요일 찾기
      const saturday = new Date(today)
      saturday.setDate(today.getDate() + (6 - today.getDay()) + (week * 7))
      
      // 일요일
      const sunday = new Date(saturday)
      sunday.setDate(saturday.getDate() + 1)
      
      // 토요일 옵션들
      const saturdayStr = `${saturday.getMonth() + 1}월 ${saturday.getDate()}일 토요일`
      options.push(
        { value: `${saturdayStr} 오전 9시`, label: `${saturdayStr} 오전 9시` },
        { value: `${saturdayStr} 오후 2시`, label: `${saturdayStr} 오후 2시` },
        { value: `${saturdayStr} 오후 5시`, label: `${saturdayStr} 오후 5시` }
      )
      
      // 일요일 옵션들
      const sundayStr = `${sunday.getMonth() + 1}월 ${sunday.getDate()}일 일요일`
      options.push(
        { value: `${sundayStr} 오전 9시`, label: `${sundayStr} 오전 9시` },
        { value: `${sundayStr} 오후 2시`, label: `${sundayStr} 오후 2시` },
        { value: `${sundayStr} 오후 5시`, label: `${sundayStr} 오후 5시` }
      )
    }
    
    return options
  }
  
  const datetimeOptions = generateDatetimeOptions()

  // 각 날짜/시간 선택에서 이미 선택된 것들을 제외한 옵션들 반환
  const getAvailableDatetimeOptions = (currentField: string) => {
    const selectedDatetimes = [formData.datetime1, formData.datetime2, formData.datetime3].filter(datetime => datetime && datetime !== formData[currentField as keyof typeof formData])
    return datetimeOptions.filter(option => !selectedDatetimes.includes(option.value))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('전송 중...')
    
    try {
      // EmailJS 설정
      const serviceId = 'mckgraphy'
      const templateId = 'mckinsey'
      const publicKey = 'm6HsUIkmNvg6rQTZO'
      
      // 이메일 템플릿 파라미터
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email,
        shooting_option: formData.option,
        preferred_datetime1: formData.datetime1,
        preferred_datetime2: formData.datetime2,
        preferred_datetime3: formData.datetime3,
        message: formData.message || '추가 문의사항 없음',
        booking_time: new Date().toLocaleString('ko-KR')
      }

      // EmailJS로 이메일 전송
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      console.log('✅ 예약 문의 전송 성공!')
      setSubmitStatus('✅ 예약 문의가 성공적으로 전송되었습니다! 24시간 내에 연락드리겠습니다.')
      
      // 폼 초기화
      setFormData({
        name: '',
        phone: '',
        email: '',
        option: '',
        datetime1: '',
        datetime2: '',
        datetime3: '',
        message: ''
      })
    } catch (error) {
      console.error('❌ 전송 실패:', error)
      setSubmitStatus('❌ 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748688745/20250531_194540_v6ktt8.png",
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748688745/20250531_194900_n4oh9y.png"
        ],
        shootingImages: [
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748673723/123_sibqu6.jpg",
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748689009/L1210421s_r0wkwt.png"
        ]
      },
      popular: false
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
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748688745/20250531_195104_krd0eh.png",
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748688747/20250531_190009_uqvy5x.png"
        ],
        shootingImages: [
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675711/10_qayg67.png",
          "https://res.cloudinary.com/dnmxnbicu/image/upload/v1748675711/8_i9wdsu.png"
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
      <main className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 페이지 제목 */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
              부산 야외촬영
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              바다와 도시가 어우러진 부산에서만 가능한 특별한 야외촬영
            </p>
          </div>

          {/* 야외촬영 옵션 (양옆 배치) */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              야외촬영 옵션
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      {option.images.locationImages.map((image, imgIndex) => (
                        <div key={`location-${imgIndex}`} className="relative">
                          <Image 
                            src={image} 
                            alt={`${option.subtitle} 장소 ${imgIndex + 1}`}
                            width={200}
                            height={128}
                            className="w-full h-32 object-contain bg-gray-100 dark:bg-gray-700 rounded-lg"
                            unoptimized
                          />
                          <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                            장소
                          </div>
                        </div>
                      ))}
                      {option.images.shootingImages.map((image, imgIndex) => (
                        <div key={`shooting-${imgIndex}`} className="relative">
                          <Image 
                            src={image} 
                            alt={`${option.subtitle} 작품 ${imgIndex + 1}`}
                            width={200}
                            height={128}
                            className="w-full h-32 object-contain bg-gray-100 dark:bg-gray-700 rounded-lg"
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
                </div>
              ))}
            </div>
          </div>

          {/* 예약 정보 및 폼 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* 예약 안내 */}
            <div>
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

                {/* 계약금 및 결제 정보 */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    💳 계약금 및 결제 안내
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        계약금 10만원
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">
                        잔액은 촬영 종료 후 현장 결제
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        🏦 입금 계좌
                      </div>
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        농협 352-2030-1263-93
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        권지후
                      </div>
                    </div>
                  </div>
                </div>

                {/* 환불 규정 */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    📋 취소 및 환불 정책
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <div className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                      <div className="flex items-start">
                        <span className="font-semibold mr-2">•</span>
                        <span><strong>촬영일 기준 1개월 전까지</strong>: 100% 환불 가능</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold mr-2">•</span>
                        <span><strong>촬영일 기준 1개월 미만</strong>: 환불 불가</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold mr-2">•</span>
                        <span>날씨로 인한 촬영 연기는 상호 협의하에 진행</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold mr-2">•</span>
                        <span>태풍, 폭우 등 촬영 불가능한 기상 상황에서는 일정 조정 가능</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
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

            {/* 예약 폼 */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  예약 문의
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500"
                      placeholder="성함을 입력해주세요"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="option" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      촬영 옵션 *
                    </label>
                    <select
                      id="option"
                      name="option"
                      value={formData.option}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                    >
                      <option value="">촬영 옵션을 선택해주세요</option>
                      <option value="옵션 1 - 광안리 + 철망">옵션 1 - 광안리 + 철망 (390,000원)</option>
                      <option value="옵션 2 - 다대포 + 갈대밭">옵션 2 - 다대포 + 갈대밭 (450,000원)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="datetime1" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      🥇 희망 날짜/시간 1순위 *
                    </label>
                    <select
                      id="datetime1"
                      name="datetime1"
                      value={formData.datetime1}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                    >
                      <option value="">1순위 날짜/시간을 선택해주세요</option>
                      {getAvailableDatetimeOptions('datetime1').map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="datetime2" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      🥈 희망 날짜/시간 2순위 *
                    </label>
                    <select
                      id="datetime2"
                      name="datetime2"
                      value={formData.datetime2}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                    >
                      <option value="">2순위 날짜/시간을 선택해주세요</option>
                      {getAvailableDatetimeOptions('datetime2').map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      1순위와 다른 날짜/시간을 선택해주세요
                    </p>
                  </div>

                  <div>
                    <label htmlFor="datetime3" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      🥉 희망 날짜/시간 3순위 *
                    </label>
                    <select
                      id="datetime3"
                      name="datetime3"
                      value={formData.datetime3}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                    >
                      <option value="">3순위 날짜/시간을 선택해주세요</option>
                      {getAvailableDatetimeOptions('datetime3').map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      1, 2순위와 다른 날짜/시간을 선택해주세요
                    </p>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      추가 문의사항
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="추가로 문의하실 내용이나 요청사항을 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      💡 예시: 친구와 함께 촬영 가능한가요? / 특정 컨셉 요청 등
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300 btn-modern ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        전송 중...
                      </div>
                    ) : (
                      '예약 문의 전송'
                    )}
                  </button>
                </form>

                {submitStatus && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-sm text-center">
                      {submitStatus}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* 푸터 */}
      <Footer />
    </div>
  )
}