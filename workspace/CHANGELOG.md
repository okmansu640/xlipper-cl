<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-06-07 (latest)
- FeaturedVideoProductsSection: 우측 세로 라인(스크롤바 트랙 `bg-white md:absolute md:w-px`) 제거

- FeaturedVideoProductsSection: 우측 컬럼 `height:0; minHeight:100%` 트릭으로 그리드 stretch 높이 정확히 상속 → overflow-y-auto가 비디오 높이 내 스크롤 정상 동작
- FeaturedVideoProductsSection: col-start-8 div에 `flex flex-col` + 내부 래퍼 `flex-1 min-h-0` 추가 → `overflow-y-auto`가 flex child로 올바르게 제한되어 비디오 높이 내 스크롤 정상 작동
- FeaturedVideoProductsSection: 아이템 컨테이너에서 `md:aspect-video` 제거 → 부모에 `self-stretch` + 래퍼에 `h-full` 적용 → 우측 패널이 비디오 높이와 동일하게 맞춰지고 overflow-y-auto 스크롤 작동
- FeaturedVideoProductsSection: 아이템 컨테이너 `md:h-auto` 제거(aspect-video 무효화 방지), `overflow-hidden` → `overflow-y-auto` 변경 → 아이템 영역이 영상 높이와 동일하게 맞춰지고 초과 아이템 스크롤 작동

- FeaturedVideoProductsSection: 영상 컬럼 `col-end-7` → `col-end-8`, 아이템 패널 `col-start-7` → `col-start-8` (50/50 → 7/5 비율)
- CompactProductCard: 카드/내부 래퍼 높이 `md:h-[104.667px]` → `md:h-[128px]` — 아이템 이미지·텍스트 영역 확장
- 스크롤바 인디케이터 높이 `md:h-[162.613px]` → `md:h-[195px]` — 새 패널 높이에 맞게 재산출

- HeroCarousel: `h-[400px] md:h-[433px]` → `h-[56vw] md:h-[calc(100vw*650/1920)]` (min 400px, max 650px) — 이미지 원본 비율(1920×650) 반응형 높이
- FeaturedVideoProductsSection: 상품 목록 컨테이너 `md:h-[337.5px]` → `md:aspect-video md:h-auto` — 영상과 동일한 16:9 비율로 높이 자동 확장

- PromoPopup.tsx: 정적 HTML 스냅샷을 React 상태 기반 슬라이더로 완전 재구현
- slides[] 배열(4개), currentIndex state, 4초 setInterval 자동 전환, 이전/다음 버튼, 하단 dots 추가
- 기존 isOpen + localStorage "오늘 하루 열지 않기" 로직 유지

- Header/index.tsx: AnnouncementBar 숨김 조건을 `isLight` → `scrolled`로 변경 → 서브페이지에서도 검은 바 항상 표시
- Layout.tsx: 서브페이지 콘텐츠를 `<main className="pt-[89px] pb-12">` 래퍼로 감싸 헤더(40px바+49px네비=89px) 높이만큼 상단 여백 확보

- Header/index.tsx: useLocation으로 isHome 감지, isLight = scrolled || !isHome 추가
- 서브페이지(/product/list 등)에서는 스크롤 전에도 bg-white shadow-md + 검정 텍스트/아이콘 즉시 적용
- 홈(/)에서는 기존 동작 유지: 최상단=투명+흰 텍스트+AnnouncementBar, 스크롤 시=흰 배경+검정 텍스트
- useEffect deps에 pathname 추가 → 라우트 변경 시 스크롤 상태 즉시 재평가
- Navbar에 scrolled={isLight} 전달하여 모든 하위 컴포넌트(로고/아이콘/뱃지) 색상 일괄 처리

- ReviewModal 별점 img 클래스 수정: `inline-block mb-4` → `mb-4 w-[74px] h-[17px] object-contain` (Tailwind Preflight max-width:100% 강제 확대 버그 수정)
- PhotoReviewSection: Link→button 교체, selectedReview state + ReviewModal 컴포넌트 추가
- ReviewModal: 오버레이 팝업, 다중 이미지 썸네일 + 좌우 전환, ESC 키/배경 클릭 닫기 지원
- AnnouncementBar: 정적 translate 제거 → marquee keyframes(18s linear infinite) 적용, 아이템 2세트 복제로 seamless loop
- tailwind.config.js: keyframes.marquee + animation.marquee 추가
- HeaderActions.tsx: 카트 Link to="/basket" → to="/order/basket" 경로 수정

## 2026-06-07
- SearchContext 신규 생성 (src/context/SearchContext.tsx): isSearchOpen / openSearch / closeSearch
- Layout.tsx: SearchProvider로 전체 감싸기
- SearchDrawer.tsx: useSearch() 연결, isSearchOpen 기반 right 토글 + 백드롭 + 닫기 버튼 onClick 추가
- HeaderActions.tsx: 검색 아이콘 → <button onClick={openSearch}>, 회원 아이콘 → hover 드롭다운(로그인/회원가입/마이쇼핑/주문조회/최근 본 상품) 구현

## 2026-06-07
- Added 9 missing pages: NoticePage, EventPage, FaqPage, InquiryPage, StockistPage, LoginPage, JoinPage, MyShopPage, RecentViewPage
- App.tsx: registered routes for /board/free, /board/event, /board/faq, /board/product, /map, /member/login, /member/join, /myshop/*, /product/recent
- SideMenuNavigation: 이벤트 href → internal /board/event
- SideMenuAccount: login /member/login.html → /member/login, join /member/join.html → /member/join, recent /product/recent_view_product.html → /product/recent

## 2026-06-07
- ProductDetailPage: full rebuild with thumbnail gallery, color/size selector, quantity stepper, 3-tab UI (상품상세/리뷰/배송교환환불), reviews from JSON
- products.json: added colors[], sizes[], detailImages[], deliveryInfo, exchangeInfo fields to all 6 products
- InstagramSection: removed stray __ANIMA_DBG__ console.log calls
- PhotoReviewSection: useRef containerRef measures actual DOM width → cardW = (containerW - GAP×4) / 5
- InstagramSection: rewrote as useState+useRef 5-up carousel matching same pattern

## 2026-06-07
- SideMenu: created MenuContext (src/context/MenuContext.tsx), wired MobileMenuButton onClick→open(), SideMenu translates on isOpen, backdrop overlay + close button added
- ShortsSection: clone-based infinite loop (prepend last-2, append first-2), silent snap-back after transition, dots track realIdx

## 2026-06-07
- Added React Router with BrowserRouter in index.tsx; pages: /brand, /product/list, /product/detail/:id, /board/review, /board/review/:id, 404
- JSON data files: src/data/hero-slides.json, products.json, shorts.json, reviews.json
- HeroCarousel: full useState/useEffect auto-play carousel, opacity-0 text overlay fixed, arrows+dots wired
- ShortsSection: useState activeIdx, active card shows iframe, arrows+dots wired
- PhotoReviewSection: useState currentIdx, arrows+dots wired, JSON-driven
- BestProductsSection: now reads from src/data/products.json
- Layout.tsx: accepts children, renders MainContent on /, page component on other routes
- Footer extracted to src/sections/Footer/index.tsx

## 2026-06-07
- Fixed PromoPopup close button: added useState for visibility, fixed z-index (backdrop z-[1000] < popup z-[1001]), replaced div buttons with <button> + onClick handlers
- "오늘 하루 열지 않기" now persists via localStorage
- File: src/components/PromoPopup.tsx

## 2026-06-07
- Initial project import from xlipper.com
- 48 files generated including Header, Footer, HeroCarousel, ProductCard, SearchDrawer, SideMenu, etc.
- Stack: React + TypeScript + Tailwind CSS + Vite

## 2026-06-07
- Initial project import from xlipper.com
- 48 files generated including Header, Footer, HeroCarousel, ProductCard, SearchDrawer, SideMenu, etc.
- Stack: React + TypeScript + Tailwind CSS + Vite
- User confirmed to use the project as-is, started dev server
</changelog>
