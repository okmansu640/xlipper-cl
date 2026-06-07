import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnnouncementBar } from "@/sections/Header/components/AnnouncementBar";
import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // 서브페이지에서는 스크롤 여부와 무관하게 isLight=true (흰 배경+검정 텍스트)
  const isLight = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    // 라우트 변경 시 스크롤 위치 초기화 반영
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`caret-transparent list-disc outline-[3px] fixed no-underline w-full z-[100] left-0 top-0 transition-colors duration-300 ${
        isLight ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="caret-transparent outline-[3px] no-underline">
        <div
          className={`overflow-hidden transition-all duration-300 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <AnnouncementBar />
        </div>
        <Navbar scrolled={isLight} />
      </div>
    </header>
  );
};
