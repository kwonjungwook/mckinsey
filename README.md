# 🏋️‍♀️ Mckinsey Studio

바디프로필 전문 스튜디오 웹사이트  
Next.js 14 + TypeScript + Tailwind CSS + Headless UI

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-000000?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=flat&logo=tailwindcss)

## 📋 프로젝트 개요

- **홈페이지**: 스튜디오 소개 및 CTA 버튼
- **예약 페이지**: Calendly 연동 + 가격표
- **포트폴리오**: Cloudinary 이미지 갤러리 (Masonry Grid)
- **촬영안내**: FAQ 아코디언 UI
- **반응형 디자인**: 모바일~데스크톱 완벽 대응
- **다크모드 지원**: 시스템 테마 연동

## 🚀 로컬 실행법

### 1. 프로젝트 클론 및 의존성 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/mckinsey-studio.git
cd mckinsey-studio

# 의존성 설치
npm install
```

### 2. 개발 서버 실행

```bash
# 개발 서버 시작
npm run dev

# 브라우저에서 확인
# http://localhost:3000
```

### 3. 빌드 및 배포 테스트

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
mckinsey-studio/
├── app/
│   ├── about/page.tsx         # 촬영안내 (FAQ)
│   ├── booking/page.tsx       # 예약 + 가격표
│   ├── portfolio/page.tsx     # 포트폴리오 갤러리
│   ├── layout.tsx             # 루트 레이아웃
│   ├── page.tsx               # 홈페이지
│   └── globals.css            # 전역 스타일
├── components/
│   ├── Nav.tsx                # 네비게이션 바
│   └── Container.tsx          # 컨테이너 래퍼
├── styles/
│   └── globals.css            # 추가 전역 스타일
└── public/                    # 정적 파일
```

## 🔗 GitHub 연결 및 Push

### 1. GitHub 저장소 생성

1. [GitHub](https://github.com)에서 새 저장소 생성
2. 저장소 이름: `mckinsey-studio` (권장)
3. Public/Private 선택

### 2. 로컬에서 GitHub 연결

```bash
# Git 초기화 (아직 안 했다면)
git init

# 파일 추가
git add .
git commit -m "🎉 Initial commit: Mckinsey Studio website"

# GitHub 저장소 연결
git remote add origin https://github.com/your-username/mckinsey-studio.git

# 첫 번째 Push
git branch -M main
git push -u origin main
```

### 3. 이후 업데이트 Push

```bash
# 변경사항 확인
git status

# 파일 추가
git add .

# 커밋
git commit -m "✨ Add new feature"

# Push
git push
```

## 🚀 Vercel 배포 방법

### 1. Vercel 계정 생성 및 Import

1. [Vercel](https://vercel.com)에 GitHub 계정으로 로그인
2. **"New Project"** 클릭
3. **"Import Git Repository"** 선택
4. `mckinsey-studio` 저장소 선택

### 2. 프로젝트 설정

```javascript
// vercel.json (선택사항 - 루트에 생성)
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

### 3. 배포 실행

1. **"Deploy"** 버튼 클릭
2. 빌드 완료까지 2-3분 대기
3. 자동 생성된 URL 확인 (예: `mckinsey-studio-abc123.vercel.app`)

### 4. 커스텀 도메인 연결

1. Vercel 대시보드 → 프로젝트 선택
2. **"Settings"** → **"Domains"** 탭
3. **"Add Domain"** 클릭
4. 도메인 입력 (예: `mckineystudio.com`)
5. DNS 설정 안내에 따라 네임서버 변경:
   ```
   A Record: @ → 76.76.19.19
   CNAME: www → cname.vercel-dns.com
   ```

### 5. 자동 배포 설정

✅ GitHub Push 시 자동 배포  
✅ Preview 배포 (PR 생성 시)  
✅ 프로덕션 배포 (main 브랜치)

## ⚙️ 환경 변수 설정

실제 서비스 운영 시 필요한 환경 변수들:

```bash
# .env.local 파일 생성
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-account/session
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_KAKAO_CHAT_URL=https://pf.kakao.com/your-channel
```

Vercel 환경 변수 설정:

1. Vercel 대시보드 → 프로젝트 → Settings → Environment Variables
2. 변수명과 값 입력 후 저장
3. 재배포 실행

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image
- **Deployment**: Vercel
- **External APIs**: Calendly, Cloudinary

## 📞 지원 및 문의

- **이메일**: support@mckineystudio.com
- **카카오톡**: @mckinsey_studio
- **전화**: 02-1234-5678

## EmailJS 설정 및 테스트 방법

### 1. EmailJS 계정 설정

1. [EmailJS 공식 사이트](https://www.emailjs.com/)에서 계정 생성
2. 새 서비스 추가 (Gmail, Outlook 등)
3. 이메일 템플릿 생성
4. Public Key 생성

### 2. 환경변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_STUDIO_EMAIL=kazuya7x@naver.com
```

### 3. 이메일 템플릿 변수

EmailJS 템플릿에서 사용할 변수들:

```
{{to_email}} - 받을 이메일 주소
{{from_name}} - 신청자 이름
{{from_phone}} - 신청자 연락처
{{from_email}} - 신청자 이메일
{{shooting_option}} - 촬영 옵션
{{preferred_datetime1}} - 1순위 희망시간
{{preferred_datetime2}} - 2순위 희망시간
{{preferred_datetime3}} - 3순위 희망시간
{{message}} - 추가 문의사항
{{reply_to}} - 답장 이메일
```

### 4. 이메일 전송 테스트 방법

#### A. 브라우저 개발자 도구로 테스트

1. 웹사이트에서 F12 키로 개발자 도구 열기
2. Console 탭으로 이동
3. 예약 폼 작성 후 전송 버튼 클릭
4. 콘솔에서 다음 로그 확인:
   - `🚀 EmailJS 전송 시도:` - 전송 파라미터 확인
   - `✅ EmailJS 전송 성공!` - 성공 시
   - `❌ EmailJS 전송 실패:` - 실패 시 에러 내용

#### B. 실제 이메일 수신 테스트

1. 테스트용 이메일 주소로 예약 폼 작성
2. 모든 필드 정확히 입력
3. 전송 버튼 클릭
4. 설정한 이메일 주소로 메일 수신 확인
5. 자동 답장 설정 시 신청자 이메일로도 확인

#### C. EmailJS 대시보드에서 확인

1. EmailJS 대시보드 로그인
2. Email Logs 메뉴에서 전송 이력 확인
3. 성공/실패 상태 및 에러 메시지 확인

### 5. 문제 해결

**이메일이 안 옴:**

- 환경변수 설정 확인
- EmailJS 서비스/템플릿 ID 확인
- 스팸 폴더 확인
- 일일 전송 한도 확인

**폼 입력이 안 됨:**

- 브라우저 캐시 삭제
- 다른 브라우저에서 테스트
- 모바일/데스크톱 각각 테스트

## 로컬 개발

```bash
npm install
npm run dev
```

http://localhost:3000에서 확인

## 배포

Vercel, Netlify 등에 배포 시 환경변수도 함께 설정해야 합니다.

---

Made with ❤️ by Mckinsey Studio Team
