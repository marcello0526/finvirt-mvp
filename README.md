# finvirt-mvp

이 프로젝트는 Finvirt 부동산 직거래 플랫폼의 MVP(최소기능제품)입니다.

## 프로젝트 개요

- **기술 스택**: Next.js, TypeScript, Tailwind CSS, Supabase, Netlify
- **핵심 기능**:
  - 매물 등록/검색
  - Supabase 연동
  - AI 기반 검증(향후 추가)
  - 사용자 친화적 네비게이션

## 개발 및 실행 방법

1. 의존성 설치  
2. 개발 서버 실행  
브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

3. 환경 변수 설정  
- 프로젝트 루트에 `.env.local` 파일 생성
- 아래 내용 추가
  ```
  NEXT_PUBLIC_SUPABASE_URL=여기에_복사한_URL
  NEXT_PUBLIC_SUPABASE_ANON_KEY=여기에_복사한_KEY
  ```

## 배포

- **Netlify**를 사용하여 GitHub와 연동, 자동 배포
- 환경 변수는 Netlify 대시보드에서 추가

## 참고

- Next.js 공식문서: [https://nextjs.org/docs](https://nextjs.org/docs)
- Supabase 공식문서: [https://supabase.com/docs](https://supabase.com/docs)
- Netlify 공식문서: [https://docs.netlify.com/](https://docs.netlify.com/)
