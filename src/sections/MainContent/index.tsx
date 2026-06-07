import { PromoPopup } from "@/components/PromoPopup";
import { HeroCarousel } from "@/sections/HeroCarousel";
import { ShortsSection } from "@/sections/ShortsSection";
import { BrandStorySection } from "@/sections/BrandStorySection";
import { CategoryShortcutSection } from "@/sections/CategoryShortcutSection";
import { BestProductsSection } from "@/sections/BestProductsSection";
import { EmptySection } from "@/sections/EmptySection";
import { BannerCarouselSection } from "@/sections/BannerCarouselSection";
import { FeaturedVideoProductsSection } from "@/sections/FeaturedVideoProductsSection";
import { HiddenCarouselSection } from "@/sections/HiddenCarouselSection";
import { PhotoReviewSection } from "@/sections/PhotoReviewSection";
import { InstagramSection } from "@/sections/InstagramSection";

export const MainContent = () => {
  return (
    <div className="caret-transparent list-disc max-w-full outline-[3px] relative no-underline w-full mx-auto">
      <div className="caret-transparent outline-[3px] no-underline mx-auto">
        <PromoPopup />
        <HeroCarousel />
        <ShortsSection />
        <BrandStorySection />
        <CategoryShortcutSection />
        <BestProductsSection />
        <EmptySection />
        <BannerCarouselSection />
        <FeaturedVideoProductsSection />
        <HiddenCarouselSection />
        <PhotoReviewSection />
        <InstagramSection />
      </div>
    </div>
  );
};
