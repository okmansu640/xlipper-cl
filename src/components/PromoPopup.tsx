import { useState, useEffect, useCallback } from "react";

interface Slide {
  desktopImg: string;
  mobileImg: string;
  href: string;
}

const slides: Slide[] = [
  {
    href: "http://pf.kakao.com/_zbUxfn",
    desktopImg:
      "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/b4223e2f8d793aca9ce8201dbe332e1c.webp",
    mobileImg:
      "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/5214ebfe4c25e36457b50ad04b88652c.webp",
  },
  {
    href: "http://pf.kakao.com/_zbUxfn",
    desktopImg:
      "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/0577a49b09053439f45e25ea2868f4c6.webp",
    mobileImg:
      "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/f7116fca76b8c4d564d461e2e558f5b9.webp",
  },
  {
    href: "http://pf.kakao.com/_zbUxfn",
    desktopImg:
      "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/1540d38947440561c3f7d6db254f25df.webp",
    mobileImg:
      "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/bca3989af3487ea79d0561884b81dbe2.webp",
  },
  {
    href: "https://xlipper.com/board/gallery/list.html?board_no=8",
    desktopImg:
      "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/bb11c467d207a3fac89278a8267ad44a.webp",
    mobileImg:
      "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/0592a9dd2022a266f5b70a6b85d33973.webp",
  },
];

export const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(() => {
    return (
      localStorage.getItem("promopopup_hide_today") !==
      new Date().toDateString()
    );
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [isOpen, goNext]);

  const handleClose = () => setIsOpen(false);

  const handleHideToday = () => {
    localStorage.setItem("promopopup_hide_today", new Date().toDateString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const slide = slides[currentIndex];

  return (
    <section
      className="bg-black/40 fixed inset-0 z-[1000] caret-transparent"
      onClick={handleClose}
    >
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[500px] z-[1001]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-xl overflow-hidden border border-zinc-900">
          {/* Slide */}
          <div className="relative overflow-hidden">
            <a href={slide.href}>
              <img
                src={slide.desktopImg}
                className="hidden md:block w-full object-cover"
                alt="popup"
              />
              <img
                src={slide.mobileImg}
                className="block md:hidden w-full object-cover"
                alt="popup"
              />
            </a>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                goPrev();
              }}
              aria-label="Previous slide"
              className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 w-[25px] h-[25px] flex items-center justify-center rounded-full border border-transparent p-[5px]"
            >
              <img
                src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-10.svg"
                alt="prev"
                className="w-5 h-5 object-contain"
              />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                goNext();
              }}
              aria-label="Next slide"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 w-[25px] h-[25px] flex items-center justify-center rounded-full border border-transparent p-[5px]"
            >
              <img
                src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-9.svg"
                alt="next"
                className="w-5 h-5 object-contain"
              />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentIndex(i);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === currentIndex ? "bg-white scale-125" : "bg-white/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Footer buttons */}
          <div className="bg-white border-t border-gray-100 grid grid-cols-[1fr_1px_1fr]">
            <button
              onClick={handleHideToday}
              className="text-zinc-900 text-base h-10 flex items-center justify-center w-full cursor-pointer hover:bg-gray-50 transition-colors"
            >
              오늘 하루 열지 않기
            </button>
            <div className="bg-zinc-900 w-px h-4 self-center" />
            <button
              onClick={handleClose}
              className="text-zinc-900 text-base h-10 flex items-center justify-center w-full cursor-pointer hover:bg-gray-50 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
