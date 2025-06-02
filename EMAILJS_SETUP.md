# EmailJS 설정 가이드 📧

## 1. EmailJS 계정 생성

1. [EmailJS 웹사이트](https://www.emailjs.com/) 방문
2. **Sign Up** 클릭해서 무료 계정 생성
3. 이메일 인증 완료

## 2. 이메일 서비스 연결

1. **Email Services** 탭으로 이동
2. **Add New Service** 클릭
3. **Gmail**, **Outlook**, **Yahoo** 등 원하는 서비스 선택
4. 사용할 이메일 계정으로 연결 (받을 이메일 주소)

## 3. 이메일 템플릿 생성

1. **Email Templates** 탭으로 이동
2. **Create New Template** 클릭
3. 다음 템플릿을 복사해서 사용하세요:

```
제목: [맥킨지 스튜디오] 새로운 예약 문의 - {{from_name}}님

내용:
🎯 새로운 바디프로필 촬영 예약 문의가 도착했습니다!

👤 고객 정보:
- 이름: {{from_name}}
- 연락처: {{from_phone}}
- 이메일: {{from_email}}

📷 촬영 정보:
- 선택 옵션: {{shooting_option}}

⏰ 희망 날짜/시간 (우선순위):
1순위: {{preferred_datetime1}}
2순위: {{preferred_datetime2}}
3순위: {{preferred_datetime3}}

💬 추가 문의사항:
{{message}}

---
📱 연락처: 010-2957-3323
✉️ 맥킨지 스튜디오 예약 시스템
답장: {{reply_to}}
```

4. **Save** 클릭

## 4. 환경변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음을 추가:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STUDIO_EMAIL=kazuya7x@naver.com
```

## 5. ID 값들 찾는 방법

- **Service ID**: Email Services에서 생성한 서비스의 Service ID
- **Template ID**: Email Templates에서 생성한 템플릿의 Template ID
- **Public Key**: Account → API Keys에서 확인

## 6. 문자 알림 설정 (선택사항)

### 🎯 **본인 전화번호: 010-2957-3323**

### 방법 1: 이메일→문자 전환 서비스 (추천!)

EmailJS에서 받을 이메일 주소를 다음과 같이 설정:

**통신사별 설정:**

- **SKT 사용자**: `01029573323@sms.sktelecom.com`
- **KT 사용자**: `01029573323@sms.ktfreetel.com`
- **LG U+ 사용자**: `01029573323@sms.lguplus.co.kr`

**설정 방법:**

1. EmailJS → Email Services → 본인 서비스 편집
2. "To Email" 또는 템플릿에서 `{{to_email}}`를 위 주소로 변경
3. 이메일과 문자를 동시에 받으려면 템플릿에서 CC나 BCC에 추가

### 방법 2: Gmail 자동 전달 설정

1. Gmail → 설정 → 필터 및 차단된 주소
2. **새 필터 만들기**:
   - 보낸사람: `noreply@emailjs.com`
   - 제목: `[맥킨지 스튜디오]`
3. **작업 선택**:
   - SMS로 전달: `01029573323@sms.[통신사도메인].com`
   - 또는 중요 표시 + 모바일 푸시 알림 활성화

### 방법 3: 네이버 메일 연동 (네이버 이메일 사용시)

1. 네이버 메일 → 환경설정 → 알림 설정
2. **SMS 알림 설정**: 특정 발신자 이메일 도착시 문자 발송
3. 발신자를 EmailJS 주소로 설정

## 7. 테스트

1. 웹사이트에서 예약폼 작성
2. 전송 후 이메일 확인
3. 문자까지 잘 오는지 확인

## 💡 팁

- 무료 플랜: 월 200개 이메일까지 무료
- 스팸 방지를 위해 reCAPTCHA 추가 권장
- 템플릿에서 HTML 형식도 사용 가능

## 🚨 보안 주의사항

- API 키들은 절대 공개 저장소에 올리지 마세요
- `.env.local` 파일은 `.gitignore`에 추가하세요

## 문자 알림 설정 (SK 사용자) 📱

### 🎯 **즉시 문자 알림 받기**

**SK 사용자 전용 설정:**
EmailJS에서 받을 이메일 주소를 다음으로 설정:

```
01029573323@sms.sktelecom.com
```

**설정 방법:**

1. EmailJS → Email Services → 본인 서비스 편집
2. "To Email"을 `01029573323@sms.sktelecom.com`로 변경
3. 또는 템플릿에서 CC/BCC에 추가하여 이메일과 문자 동시 수신

**결과**: 예약 문의 즉시 문자로 알림! 📲
