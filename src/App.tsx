import { Routes, Route } from "react-router-dom";
import { SkipLinks } from "@/components/navigation/SkipLinks";
import { Layout } from "@/components/Layout";
import { BrandPage } from "@/pages/BrandPage";
import { ProductListPage } from "@/pages/ProductListPage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { ReviewBoardPage } from "@/pages/ReviewBoardPage";
import { ReviewDetailPage } from "@/pages/ReviewDetailPage";
import { BasketPage } from "@/pages/BasketPage";
import { CategoryPage } from "@/pages/CategoryPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { CrewPage } from "@/pages/CrewPage";
import { AgreementPage } from "@/pages/AgreementPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { NoticePage } from "@/pages/NoticePage";
import { EventPage } from "@/pages/EventPage";
import { FaqPage } from "@/pages/FaqPage";
import { InquiryPage } from "@/pages/InquiryPage";
import { StockistPage } from "@/pages/StockistPage";
import { LoginPage } from "@/pages/LoginPage";
import { JoinPage } from "@/pages/JoinPage";
import { MyShopPage } from "@/pages/MyShopPage";
import { RecentViewPage } from "@/pages/RecentViewPage";

export const App = () => {
  return (
    <div className="bg-white min-h-screen font-pretendard">
      <SkipLinks />
      <Layout>
        <Routes>
          {/* 홈 */}
          <Route path="/" element={null} />

          {/* 브랜드 */}
          <Route path="/brand" element={<BrandPage />} />

          {/* 상품 목록 — 경로 및 .html 레거시 경로 모두 처리 */}
          <Route path="/product/list" element={<ProductListPage />} />
          <Route path="/product/list.html" element={<ProductListPage />} />

          {/* 상품 상세 */}
          <Route path="/product/detail/:id" element={<ProductDetailPage />} />

          {/* 카테고리 — /category/:slug/:id 패턴 */}
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/category/:slug/:id" element={<CategoryPage />} />

          {/* 장바구니 */}
          <Route path="/order/basket.html" element={<BasketPage />} />
          <Route path="/order/basket" element={<BasketPage />} />

          {/* 리뷰 게시판 */}
          <Route path="/board/review" element={<ReviewBoardPage />} />
          <Route path="/board/review/list.html" element={<ReviewBoardPage />} />
          <Route path="/board/review/:id" element={<ReviewDetailPage />} />

          {/* 사이즈 가이드 (갤러리 게시판) */}
          <Route path="/board/gallery/list.html" element={<GalleryPage />} />
          <Route path="/board/gallery" element={<GalleryPage />} />

          {/* 크루 게시판 */}
          <Route path="/board/crew/list.html" element={<CrewPage />} />
          <Route path="/board/crew" element={<CrewPage />} />

          {/* 멤버 / 약관 */}
          <Route
            path="/member/mall_agreement.html"
            element={<AgreementPage />}
          />
          <Route path="/member/agreement" element={<AgreementPage />} />
          <Route path="/member/privacy.html" element={<PrivacyPage />} />
          <Route path="/member/privacy" element={<PrivacyPage />} />

          {/* 로그인 / 회원가입 */}
          <Route path="/member/login" element={<LoginPage />} />
          <Route path="/member/login.html" element={<LoginPage />} />
          <Route path="/member/join" element={<JoinPage />} />
          <Route path="/member/join.html" element={<JoinPage />} />

          {/* 마이쇼핑 */}
          <Route path="/myshop" element={<MyShopPage />} />
          <Route path="/myshop/*" element={<MyShopPage />} />

          {/* 커뮤니티 */}
          <Route path="/board/free" element={<NoticePage />} />
          <Route path="/board/free/list.html" element={<NoticePage />} />
          <Route path="/board/event" element={<EventPage />} />
          <Route
            path="/board/free/list.html?board_no=2"
            element={<EventPage />}
          />
          <Route path="/board/faq" element={<FaqPage />} />
          <Route path="/board/faq/list.html" element={<FaqPage />} />
          <Route path="/board/product" element={<InquiryPage />} />
          <Route path="/board/product/list.html" element={<InquiryPage />} />

          {/* STOCKIST */}
          <Route path="/map" element={<StockistPage />} />

          {/* 최근 본 상품 */}
          <Route
            path="/product/recent_view_product.html"
            element={<RecentViewPage />}
          />
          <Route path="/product/recent" element={<RecentViewPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
};
