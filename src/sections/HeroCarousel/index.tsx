import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import slidesData from "@/data/hero-slides.json";

const AUTOPLAY_MS = 4000;

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);
  const total = slidesData.length;

  const goTo = useCallback(
    (idx: number) => {
      setAnimating(false);
      setTimeout(() => {
        setCurrent((idx + total) % total);
        setAnimating(true);
      }, 50);
    },
    [total],
  );

  useEffect(() => {
    const t = setInterval(() => goTo(current + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [current, goTo]);

  const slide = slidesData[current];

  const textAlignClasses: Record<string, string> = {
    right: "text-right right-4 top-1/2 -translate-y-1/2 md:right-[57.6px]",
    left: "text-left left-4 top-1/2 -translate-y-1/2 md:left-[57.6px]",
    "center-bottom": "text-center left-1/2 -translate-x-1/2 bottom-10",
  };

  const posClass = textAlignClasses[slide.textAlign] ?? textAlignClasses.right;

  return (
    <section className="caret-transparent outline-[3px] no-underline relative overflow-hidden">
      <div className="relative h-[400px] md:h-[433px] overflow-hidden">
        {/* Slides */}
        {slidesData.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              src={s.desktopImg}
              className="hidden md:block w-full h-full object-cover"
              alt=""
            />
            <img
              src={s.mobileImg}
              className="block md:hidden w-full h-full object-cover"
              alt=""
            />
          </div>
        ))}

        {/* Text overlay */}
        <div
          className={`absolute z-20 pointer-events-none transition-all duration-700 ${posClass} ${animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <h2
            className="text-white text-xl md:text-2xl font-extrabold mb-3 drop-shadow-lg"
            dangerouslySetInnerHTML={{ __html: slide.title }}
          />
          <p className="text-white text-sm md:text-base mb-6 drop-shadow-md">
            {slide.subtitle}
          </p>
          <Link
            to={slide.buttonHref}
            className="pointer-events-auto inline-flex items-center bg-white text-zinc-900 text-sm md:text-base font-semibold h-[35px] px-4 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            {slide.buttonText}
          </Link>
        </div>

        {/* Prev / Next */}
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Previous slide"
          className="absolute left-1.5 md:left-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-[25px] h-[25px] rounded-full border border-transparent p-1 hover:bg-white/20 transition-colors"
        >
          <img
            src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-10.svg"
            alt="Prev"
            className="w-5 h-5 object-contain"
          />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Next slide"
          className="absolute right-1.5 md:right-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-[25px] h-[25px] rounded-full border border-transparent p-1 hover:bg-white/20 transition-colors"
        >
          <img
            src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-9.svg"
            alt="Next"
            className="w-5 h-5 object-contain"
          />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5 absolute bottom-3 inset-x-0 z-30">
        {slidesData.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`block h-1.5 rounded-[40px] border border-zinc-900 transition-all duration-300 ${i === current ? "bg-zinc-900 opacity-100 w-[25px]" : "bg-white opacity-80 w-1.5"}`}
          />
        ))}
      </div>
    </section>
  );
};
