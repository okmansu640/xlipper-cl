<instructions>
This file powers chat suggestion chips. Keep it focused and actionable.

# Be proactive
- Suggest ideas and things the user might want to add *soon*. 
- Important things the user might be overlooking (SEO, more features, bug fixes). 
- Look specifically for bugs and edge cases the user might be missing (e.g., what if no user has logged in).

# Rules
- Each task must be wrapped in a "<todo id="todo-id">" and "</todo>" tag pair.
- Inside each <todo> block:
  - First line: title (required)
  - Second line: description (optional)
- The id must be a short stable identifier for the task and must not change when you rewrite the title or description.
- You should proactively review this file after each response, even if the user did not explicitly ask, maintain it if there were meaningful changes (new requirement, task completion, reprioritization, or stale task cleanup).
- Think BIG: suggest ambitious features, UX improvements, technical enhancements, and creative possibilities.
- Balance quick wins with transformative ideas — include both incremental improvements and bold new features.
- Aim for 3-5 high-impact tasks that would genuinely excite the user.
- Tasks should be specific enough to act on, but visionary enough to inspire.
- Remove or rewrite stale tasks when completed, obsolete, or clearly lower-priority than current work.
- Re-rank by impact and user value, not just urgency.
- Draw inspiration from the project's existing features — what would make them 10x better?
- Don't be afraid to suggest features the user hasn't explicitly mentioned.
</instructions>

<todo id="cart-localStorage">
장바구니 localStorage 연동
장바구니 상태를 localStorage에 저장해서 새로고침 후에도 유지되도록 구성
</todo>
<todo id="category-filter">
카테고리별 상품 필터링
CategoryPage에서 cate_no 파라미터에 따라 products.json을 실제로 필터링
</todo>
<todo id="notice-data">
공지사항/이벤트 데이터 JSON화
NoticePage, EventPage의 하드코딩된 데이터를 src/data/ JSON 파일로 분리
</todo>
<todo id="seo">
Add meta tags and SEO basics
Set page title per route, description, og:image, and structured data for products using react-helmet
</todo>
<todo id="mobile-polish">
Polish mobile responsiveness
Test and fix layout on small screens, especially the side menu and carousel sections
</todo>
