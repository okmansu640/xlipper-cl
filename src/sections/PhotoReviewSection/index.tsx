import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import reviewsData from "@/data/reviews.json";

const GAP = 12;
const VISIBLE = 5;

export const PhotoReviewSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [cardW, setCardW] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = reviewsData.length;
  const maxIdx = total - VISIBLE;

  useEffect(() => {
    const calc = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setCardW((w - GAP * (VISIBLE - 1)) / VISIBLE);
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const goTo = (idx: number) =>
    setCurrentIdx(Math.max(0, Math.min(idx, maxIdx)));

  const translateX = currentIdx * (cardW + GAP);

  return (
    <section className="box-border caret-transparent max-w-full outline-[3px] no-underline w-[1600px] mt-[100px] mx-auto px-[9.375px] md:mt-[150px] md:px-8">
      <div className="caret-transparent outline-[3px] no-underline pb-6">
        <div className="caret-transparent outline-[3px] text-center no-underline">
          <h2 className="caret-transparent text-zinc-900 text-2xl font-semibold leading-[33.6px] outline-[3px] no-underline">
            PHOTO REVIEW
          </h2>
          <span className="caret-transparent text-zinc-500 block text-base font-light leading-[22.4px] outline-[3px] no-underline mt-1">
            엑슬리퍼를 사랑한 고객들의 솔직리뷰 입니다.
          </span>
        </div>
      </div>

      {/* Clipping wrapper — exactly VISIBLE cards wide */}
      <div ref={containerRef} className="relative overflow-hidden mt-6">
        {/* Track */}
        <ul
          className="flex h-full list-none relative z-[1] pl-0 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {reviewsData.map((review, i) => (
            <li
              key={review.id}
              role="group"
              aria-label={`${i + 1} / ${total}`}
              className="shrink-0 h-full list-none relative"
              style={{ width: cardW, marginRight: GAP }}
            >
              <Link
                to={review.href}
                className="caret-transparent block outline-[3px] no-underline"
                style={{ width: cardW }}
              >
                {/* Image area */}
                <div
                  className="border border-zinc-200 box-border overflow-hidden rounded-t-lg"
                  style={{ width: cardW }}
                >
                  {review.reviewImages.length > 0 ? (
                    <img
                      src={review.reviewImages[0]}
                      alt=""
                      className="aspect-square w-full object-cover"
                    />
                  ) : (
                    <img
                      src={review.productImageUrl}
                      alt=""
                      className="aspect-square w-full object-cover"
                    />
                  )}
                </div>

                {/* Text area */}
                <div
                  className="border border-b-0 border-zinc-200 box-border p-3"
                  style={{ width: cardW }}
                >
                  <div className="text-zinc-900 text-sm font-semibold leading-[16.8px] text-ellipsis break-all overflow-hidden mb-3 line-clamp-2">
                    {review.title}
                  </div>
                  <div className="text-zinc-600 text-sm leading-[22.4px] text-ellipsis break-all overflow-hidden mb-3 line-clamp-3">
                    {review.description}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-zinc-600 text-xs">{review.author}</div>
                    <div className="text-zinc-600 text-xs">{review.date}</div>
                  </div>
                  <img
                    src={review.ratingImageUrl}
                    alt={`${review.rating}점`}
                    className="inline align-top"
                  />
                </div>

                {/* Footer */}
                <div
                  className="border border-zinc-200 box-border overflow-hidden pb-3 px-3 rounded-b-lg"
                  style={{ width: cardW }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={review.productImageUrl}
                      alt=""
                      className="inline h-[50px] w-[50px] object-cover rounded-full"
                    />
                    <div className="text-zinc-900 text-sm leading-[16.8px] text-ellipsis break-all overflow-hidden line-clamp-2">
                      {review.productName}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Prev arrow */}
        <button
          onClick={() => goTo(currentIdx - 1)}
          disabled={currentIdx === 0}
          aria-label="Previous slide"
          className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[25px] h-[25px] rounded-full border border-transparent p-1 bg-white/80 hover:bg-zinc-100 shadow transition-all disabled:opacity-30"
        >
          <img
            src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-10.svg"
            alt="Prev"
            className="w-5 h-5 object-contain"
          />
        </button>

        {/* Next arrow */}
        <button
          onClick={() => goTo(currentIdx + 1)}
          disabled={currentIdx >= maxIdx}
          aria-label="Next slide"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[25px] h-[25px] rounded-full border border-transparent p-1 bg-white/80 hover:bg-zinc-100 shadow transition-all disabled:opacity-30"
        >
          <img
            src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-9.svg"
            alt="Next"
            className="w-5 h-5 object-contain"
          />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-5">
        {Array.from({ length: maxIdx + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`block h-1.5 rounded-[40px] border border-zinc-900 transition-all duration-300 ${i === currentIdx ? "bg-zinc-900 opacity-100 w-[25px]" : "bg-white opacity-80 w-1.5"}`}
          />
        ))}
      </div>
    </section>
  );
};
