import { useState, useRef, useEffect } from "react";
import shortsData from "@/data/shorts.json";

const CARD_W = 230;
const GAP = 20;
const STEP = CARD_W + GAP;

// Build infinite array: [...last2, ...all, ...first2]
const CLONE_COUNT = 2;
const clonedBefore = shortsData.slice(-CLONE_COUNT);
const clonedAfter = shortsData.slice(0, CLONE_COUNT);
const infiniteList = [...clonedBefore, ...shortsData, ...clonedAfter];
const REAL_START = CLONE_COUNT; // index in infiniteList where real items begin

export const ShortsSection = () => {
  // activeIdx is an index into infiniteList; starts at REAL_START (= first real item)
  const [activeIdx, setActiveIdx] = useState(REAL_START);
  const [transitioning, setTransitioning] = useState(true);
  const isJumping = useRef(false);

  const goTo = (idx: number, withTransition = true) => {
    setTransitioning(withTransition);
    setActiveIdx(idx);
  };

  const prev = () => {
    if (isJumping.current) return;
    goTo(activeIdx - 1);
  };

  const next = () => {
    if (isJumping.current) return;
    goTo(activeIdx + 1);
  };

  // After sliding into a clone, silently jump to the real counterpart
  useEffect(() => {
    if (!transitioning) return;
    const total = shortsData.length;

    const handle = () => {
      // slid into cloned-before zone → jump to real end
      if (activeIdx < CLONE_COUNT) {
        isJumping.current = true;
        goTo(CLONE_COUNT + total - (CLONE_COUNT - activeIdx), false);
        requestAnimationFrame(() => {
          isJumping.current = false;
        });
      }
      // slid into cloned-after zone → jump to real start
      else if (activeIdx >= CLONE_COUNT + total) {
        isJumping.current = true;
        goTo(CLONE_COUNT + (activeIdx - (CLONE_COUNT + total)), false);
        requestAnimationFrame(() => {
          isJumping.current = false;
        });
      }
    };

    const timer = setTimeout(handle, 510); // slightly longer than transition duration
    return () => clearTimeout(timer);
  }, [activeIdx, transitioning]);

  // Real index (0-based into original shortsData) for dot highlighting
  const realIdx =
    (((activeIdx - CLONE_COUNT) % shortsData.length) + shortsData.length) %
    shortsData.length;

  return (
    <section className="caret-transparent outline-[3px] no-underline mt-[100px] md:mt-[150px]">
      <div className="box-border caret-transparent max-w-full outline-[3px] no-underline w-[1600px] mx-auto px-[9.375px] md:px-8">
        <div className="box-border caret-transparent outline-[3px] no-underline px-[9.375px] md:px-8">
          <div className="caret-transparent outline-[3px] no-underline pb-6">
            <h2 className="caret-transparent text-zinc-900 text-lg font-semibold leading-[25.2px] outline-[3px] text-center no-underline md:text-2xl md:leading-[33.6px]">
              Youtube Shorts{" "}
            </h2>
            <p className="caret-transparent text-zinc-700 text-sm font-light leading-[19.6px] outline-[3px] text-center no-underline mt-1 md:text-base md:leading-[22.4px]">
              전문가 Pick !!{" "}
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* Track */}
          <div
            className={`flex ${transitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{
              transform: `translateX(calc(50% - ${STEP * activeIdx + CARD_W / 2}px))`,
            }}
          >
            {infiniteList.map((short, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={`${short.id}-${i}`}
                  className="shrink-0 transition-all duration-500"
                  style={{ width: CARD_W, marginRight: GAP }}
                >
                  <a
                    href={short.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                    onClick={(e) => {
                      if (!isActive) e.preventDefault();
                    }}
                  >
                    <div className="relative overflow-hidden pb-[177%] rounded-[15px]">
                      <div
                        className="absolute overflow-hidden rounded-[15px] transition-all duration-500"
                        style={
                          isActive
                            ? { inset: 0 }
                            : { top: "7.5%", left: 0, right: 0, height: "85%" }
                        }
                      >
                        {isActive ? (
                          <>
                            <img
                              src={short.desktopImg}
                              className="hidden md:block w-full h-full object-cover opacity-0 absolute inset-0"
                              alt=""
                            />
                            <img
                              src={short.mobileImg}
                              className="block md:hidden w-full h-full object-cover opacity-0 absolute inset-0"
                              alt=""
                            />
                            <iframe
                              src={`https://www.youtube.com/embed/${short.youtubeId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${short.youtubeId}&rel=0`}
                              className="absolute inset-0 w-full h-full rounded-[15px]"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                            />
                          </>
                        ) : (
                          <div className="w-full h-full overflow-hidden rounded-[15px]">
                            <img
                              src={short.desktopImg}
                              className="hidden md:block w-full h-full object-cover"
                              alt=""
                            />
                            <img
                              src={short.mobileImg}
                              className="block md:hidden w-full h-full object-cover"
                              alt=""
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-1.5 md:left-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[25px] h-[25px] rounded-full border border-transparent p-1 hover:bg-zinc-100 transition-colors"
          >
            <img
              src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-10.svg"
              alt="Prev"
              className="w-5 h-5 object-contain"
            />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-1.5 md:right-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[25px] h-[25px] rounded-full border border-transparent p-1 hover:bg-zinc-100 transition-colors"
          >
            <img
              src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-9.svg"
              alt="Next"
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>

        {/* Dots — keyed to real index */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {shortsData.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(REAL_START + i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`block h-1.5 rounded-[40px] border border-zinc-900 transition-all duration-300 ${i === realIdx ? "bg-zinc-900 opacity-100 w-[25px]" : "bg-white opacity-80 w-1.5"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
