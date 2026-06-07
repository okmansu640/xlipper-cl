import { useState, useRef, useEffect } from "react";

const SLIDES = [
  {
    href: "https://www.instagram.com/p/DQskxA-Eux-/?img_index=1",
    img: "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/3c2dbd3bcdfc169ed7e116960b8e3db6.jpg",
  },
  {
    href: "https://www.instagram.com/p/DPpxe54kkFE/?img_index=1",
    img: "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/884dbda49d79ccb845ab287e92d6a43a.jpg",
  },
  {
    href: "",
    img: "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/7826753803b7fe1aafaacc1de844f99c.jpg",
  },
  {
    href: "",
    img: "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/d6b4646174854b356c4f321aebc9c9f0.jpg",
  },
  {
    href: "",
    img: "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/1456d308008ed11fc3790781f588498c.jpg",
  },
  {
    href: "https://www.instagram.com/p/DWAc77GD1dz/?img_index=1",
    img: "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/6c67c0ab506195bf5b997c0c7ede1a20.jpg",
  },
];

const GAP = 10;

export const InstagramSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideW, setSlideW] = useState(0);

  useEffect(() => {
    const calc = () => {
      if (!containerRef.current) return;
      const containerW = containerRef.current.offsetWidth;
      const isMd = window.innerWidth >= 768;
      if (isMd) {
        const w = (containerW - GAP * 4) / 5;
        setSlideW(w);
      } else {
        const w = (containerW - GAP * 1.2) / 2.2;
        setSlideW(w);
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const total = SLIDES.length;
  const visibleCount =
    slideW > 0 && containerRef.current
      ? Math.round((containerRef.current.offsetWidth + GAP) / (slideW + GAP))
      : 5;
  const maxIdx = Math.max(0, total - visibleCount);

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, maxIdx));
    setCurrentIdx(clamped);
  };

  const offset = currentIdx * (slideW + GAP);

  return (
    <section className="caret-transparent outline-[3px] no-underline mt-[100px] md:mt-[150px]">
      <div className="box-border caret-transparent max-w-full outline-[3px] no-underline w-[1600px] mx-auto px-[9.375px] md:px-8">
        <div className="caret-transparent outline-[3px] no-underline pb-6 px-[9.375px] md:px-8">
          <h2 className="caret-transparent text-zinc-900 text-lg font-semibold leading-[25.2px] outline-[3px] text-center no-underline md:text-2xl md:leading-[33.6px]">
            엑슬리퍼 공식 Instagram
          </h2>
          <a
            href="https://www.instagram.com/xlipper.official/"
            className="caret-transparent text-zinc-500 block text-sm font-light leading-[19.6px] outline-[3px] text-center no-underline mt-1 md:text-base md:leading-[22.4px]"
          >
            @xlipper.official
          </a>
        </div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <ul
            className="flex list-none p-0 m-0 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {SLIDES.map((slide, i) => (
              <li
                key={i}
                role="group"
                aria-label={`${i + 1} / ${total}`}
                className="shrink-0 list-none"
                style={{ width: slideW || 0, marginRight: GAP }}
              >
                <div className="overflow-hidden rounded-[15px]">
                  <a
                    href={slide.href || undefined}
                    className="block relative overflow-hidden"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={slide.img}
                      alt={`Instagram post ${i + 1}`}
                      className="w-full aspect-square object-cover align-top"
                    />
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={() => goTo(currentIdx - 1)}
            aria-label="Previous slide"
            disabled={currentIdx === 0}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[25px] h-[25px] rounded-full border border-transparent p-1 bg-white/80 hover:bg-zinc-100 shadow transition-colors disabled:opacity-30 disabled:cursor-default md:left-5"
          >
            <img
              src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-10.svg"
              alt="Prev"
              className="w-5 h-5 object-contain"
            />
          </button>

          <button
            onClick={() => goTo(currentIdx + 1)}
            aria-label="Next slide"
            disabled={currentIdx >= maxIdx}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[25px] h-[25px] rounded-full border border-transparent p-1 bg-white/80 hover:bg-zinc-100 shadow transition-colors disabled:opacity-30 disabled:cursor-default md:right-5"
          >
            <img
              src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-9.svg"
              alt="Next"
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
