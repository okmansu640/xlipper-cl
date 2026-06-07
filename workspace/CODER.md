<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## Key Architecture
- React Router v6 via BrowserRouter in src/index.tsx
- Routes defined in src/App.tsx: /, /brand, /product/list, /product/detail/:id, /board/review, /board/review/:id
- Layout.tsx: wraps all pages; renders <MainContent> on "/" and children (page components) on sub-routes
- Footer extracted to src/sections/Footer/index.tsx (previously inlined in App.tsx)

## Data Layer (JSON files in src/data/)
- hero-slides.json — 12 hero banner slides (desktopImg, mobileImg, title, subtitle, buttonText, textAlign)
- products.json — product catalog (id, imageUrl, productName, salePrice, discountRate, etc.)
- shorts.json — 5 YouTube Shorts (youtubeId, href, desktopImg, mobileImg)
- reviews.json — 8 photo reviews (id, reviewImages[], productImageUrl, rating, etc.)

## Carousel Pattern
- All 3 carousels (HeroCarousel, ShortsSection, PhotoReviewSection) use useState(currentIdx) + direct CSS translateX
- HeroCarousel: auto-plays every 4s via useEffect/setInterval, smooth opacity+translateY text animation
- ShortsSection: active card shows YouTube iframe embed; inactive cards show thumbnail
- PhotoReviewSection: simple translateX slide, dots and arrows both functional

## Gotchas
- Tailwind classes with opacity-0/opacity-100 were frozen from Swiper.js snapshot — replaced with dynamic state
- Footer was inlined in App.tsx body tag — now a proper component at src/sections/Footer/index.tsx
- src/data/*.json imported with "import x from '@/data/x.json'" — vite handles JSON imports natively
</coder>
