import { useState } from "react";

export const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(() => {
    return (
      localStorage.getItem("promopopup_hide_today") !==
      new Date().toDateString()
    );
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleHideToday = () => {
    localStorage.setItem("promopopup_hide_today", new Date().toDateString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <section
      className="bg-black/40 caret-transparent outline-[3px] fixed no-underline z-[1000] inset-0"
      onClick={handleClose}
    >
      <div
        className="caret-transparent max-w-[500px] outline-[3px] fixed no-underline translate-x-[-50.0%] translate-y-[-50.0%] w-[90%] z-[1001] left-2/4 top-2/4 md:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="box-border caret-transparent outline-[3px] no-underline mx-auto">
          <div className="caret-transparent outline-[3px] no-underline border border-zinc-900 overflow-hidden rounded-xl border-solid">
            <div className="caret-transparent outline-[3px] no-underline">
              <div className="caret-transparent list-none outline-[3px] relative no-underline z-[1] overflow-hidden mx-auto">
                <div className="caret-transparent flex h-full outline-[3px] relative no-underline translate-x-[-1008px] w-full z-[1] md:translate-x-[-1494px]">
                  <div
                    role="group"
                    aria-label="3 / 4"
                    className="caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-[336px] md:w-[498px]"
                  >
                    <a
                      href="http://pf.kakao.com/_zbUxfn"
                      className="caret-transparent outline-[3px] no-underline"
                    >
                      <div className="caret-transparent outline-[3px] no-underline">
                        <img
                          src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/1540d38947440561c3f7d6db254f25df.webp"
                          className="box-border caret-transparent hidden max-w-full outline-[3px] no-underline align-top md:block"
                        />
                        <img
                          src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/bca3989af3487ea79d0561884b81dbe2.webp"
                          className="box-border caret-transparent block max-w-full outline-[3px] no-underline align-top md:hidden"
                        />
                      </div>
                      <div className="caret-transparent hidden outline-[3px] absolute text-left no-underline left-[16.875px] top-[16.875px] md:block md:left-8 md:top-8">
                        <h2 className="caret-transparent text-white text-lg font-semibold leading-[21.6px] outline-[3px] no-underline mb-3 md:text-2xl md:leading-[28.8px]">
                          엑슬리퍼 고객센터
                        </h2>
                        <p className="caret-transparent text-white text-sm leading-[19.6px] outline-[3px] no-underline mb-6 md:text-lg md:leading-[25.2px]">
                          CS Center 여기로
                        </p>
                        <div className="items-center bg-zinc-900 box-border caret-transparent text-white inline-flex h-[35px] outline-[3px] no-underline overflow-hidden rounded-lg">
                          <p className="items-center bg-white box-border caret-transparent text-zinc-900 flex text-sm h-[35px] justify-center leading-[16.8px] min-h-0 min-w-0 outline-[3px] no-underline w-full px-3 md:min-h-[auto] md:min-w-[auto]">
                            link
                          </p>
                        </div>
                      </div>
                      <div className="caret-transparent block outline-[3px] absolute text-center no-underline translate-x-[-50.0%] left-2/4 bottom-[16.875px] md:hidden md:transform-none md:bottom-8">
                        <h2 className="caret-transparent text-white text-lg font-semibold leading-[21.6px] outline-[3px] no-underline mb-3 md:text-2xl md:leading-[28.8px]">
                          엑슬리퍼 고객센터
                        </h2>
                        <p className="caret-transparent text-white text-sm leading-[19.6px] outline-[3px] no-underline mb-6 md:text-lg md:leading-[25.2px]">
                          CS Center 여기로
                        </p>
                        <div className="items-center bg-zinc-900 box-border caret-transparent text-white inline-flex h-[35px] outline-[3px] no-underline overflow-hidden rounded-lg">
                          <p className="items-center bg-white box-border caret-transparent text-zinc-900 flex text-sm h-[35px] justify-center leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-3 md:min-h-0 md:min-w-0">
                            link
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    role="group"
                    aria-label="4 / 4"
                    className="caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-[336px] md:w-[498px]"
                  >
                    <a
                      href="https://xlipper.com/board/gallery/list.html?board_no=8"
                      className="caret-transparent outline-[3px] no-underline"
                    >
                      <div className="caret-transparent outline-[3px] no-underline">
                        <img
                          src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/bb11c467d207a3fac89278a8267ad44a.webp"
                          className="box-border caret-transparent hidden max-w-full outline-[3px] no-underline align-top md:block"
                        />
                        <img
                          src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/0592a9dd2022a266f5b70a6b85d33973.webp"
                          className="box-border caret-transparent block max-w-full outline-[3px] no-underline align-top md:hidden"
                        />
                      </div>
                      <div className="caret-transparent hidden outline-[3px] absolute text-center no-underline transform-none left-2/4 top-[16.875px] md:block md:translate-x-[-50.0%] md:top-8">
                        <h2 className="caret-transparent text-zinc-900 text-lg font-semibold leading-[21.6px] outline-[3px] no-underline mb-3 md:text-2xl md:leading-[28.8px]">
                          엑슬리퍼 사이즈 가이드
                        </h2>
                        <p className="caret-transparent text-zinc-900 text-sm leading-[19.6px] outline-[3px] no-underline mb-6 md:text-lg md:leading-[25.2px]">
                          SIZE Guide 여기로{" "}
                        </p>
                        <div className="items-center bg-zinc-950 box-border caret-transparent text-white inline-flex h-[35px] outline-[3px] no-underline overflow-hidden rounded-lg">
                          <p className="items-center bg-white box-border caret-transparent text-zinc-950 flex text-sm h-[35px] justify-center leading-[16.8px] min-h-0 min-w-0 outline-[3px] no-underline w-full px-3 md:min-h-[auto] md:min-w-[auto]">
                            link
                          </p>
                        </div>
                      </div>
                      <div className="caret-transparent block outline-[3px] absolute text-center no-underline translate-x-[-50.0%] left-2/4 top-[16.875px] md:hidden md:transform-none md:top-8">
                        <h2 className="caret-transparent text-zinc-900 text-lg font-semibold leading-[21.6px] outline-[3px] no-underline mb-3 md:text-2xl md:leading-[28.8px]">
                          엑슬리퍼 사이즈 가이드
                        </h2>
                        <p className="caret-transparent text-zinc-900 text-sm leading-[19.6px] outline-[3px] no-underline mb-6 md:text-lg md:leading-[25.2px]">
                          SIZE Guide 여기로{" "}
                        </p>
                        <div className="items-center bg-zinc-950 box-border caret-transparent text-white inline-flex h-[35px] outline-[3px] no-underline overflow-hidden rounded-lg">
                          <p className="items-center bg-white box-border caret-transparent text-zinc-950 flex text-sm h-[35px] justify-center leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-3 md:min-h-0 md:min-w-0">
                            link
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    role="group"
                    aria-label="1 / 4"
                    className="caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-[336px] md:w-[498px]"
                  >
                    <a
                      href="http://pf.kakao.com/_zbUxfn"
                      className="caret-transparent outline-[3px] no-underline"
                    >
                      <div className="caret-transparent outline-[3px] no-underline">
                        <img
                          src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/b4223e2f8d793aca9ce8201dbe332e1c.webp"
                          className="box-border caret-transparent hidden max-w-full outline-[3px] no-underline align-top md:block"
                        />
                        <img
                          src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/5214ebfe4c25e36457b50ad04b88652c.webp"
                          className="box-border caret-transparent block max-w-full outline-[3px] no-underline align-top md:hidden"
                        />
                      </div>
                      <div className="caret-transparent hidden outline-[3px] absolute no-underline md:block">
                        <h2 className="caret-transparent text-white hidden text-lg font-semibold leading-[21.6px] outline-[3px] no-underline mb-3 md:text-2xl md:leading-[28.8px]"></h2>
                        <p className="caret-transparent text-white hidden text-sm leading-[19.6px] outline-[3px] no-underline mb-6 md:text-lg md:leading-[25.2px]"></p>
                        <div className="items-center bg-zinc-900 box-border caret-transparent text-white hidden h-[35px] outline-[3px] no-underline overflow-hidden rounded-lg">
                          <p className="items-center bg-white box-border caret-transparent text-zinc-900 flex text-sm h-[35px] justify-center leading-[16.8px] outline-[3px] no-underline w-full px-3"></p>
                        </div>
                      </div>
                      <div className="caret-transparent block outline-[3px] absolute no-underline md:hidden">
                        <h2 className="caret-transparent text-white hidden text-lg font-semibold leading-[21.6px] outline-[3px] no-underline mb-3 md:text-2xl md:leading-[28.8px]"></h2>
                        <p className="caret-transparent text-white hidden text-sm leading-[19.6px] outline-[3px] no-underline mb-6 md:text-lg md:leading-[25.2px]"></p>
                        <div className="items-center bg-zinc-900 box-border caret-transparent text-white hidden h-[35px] outline-[3px] no-underline overflow-hidden rounded-lg">
                          <p className="items-center bg-white box-border caret-transparent text-zinc-900 flex text-sm h-[35px] justify-center leading-[16.8px] outline-[3px] no-underline w-full px-3"></p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    role="group"
                    aria-label="2 / 4"
                    className="caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-[336px] md:w-[498px]"
                  >
                    <a
                      href="http://pf.kakao.com/_zbUxfn"
                      className="caret-transparent outline-[3px] no-underline"
                    >
                      <div className="caret-transparent outline-[3px] no-underline">
                        <img
                          src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/0577a49b09053439f45e25ea2868f4c6.webp"
                          className="box-border caret-transparent hidden max-w-full outline-[3px] no-underline align-top md:block"
                        />
                        <img
                          src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/f7116fca76b8c4d564d461e2e558f5b9.webp"
                          className="box-border caret-transparent block max-w-full outline-[3px] no-underline align-top md:hidden"
                        />
                      </div>
                      <div className="caret-transparent hidden outline-[3px] absolute text-left no-underline left-[16.875px] top-[16.875px] md:block md:left-8 md:top-8">
                        <h2 className="caret-transparent text-white hidden text-lg font-semibold leading-[21.6px] outline-[3px] no-underline mb-3 md:text-2xl md:leading-[28.8px]"></h2>
                        <p className="caret-transparent text-white hidden text-sm leading-[19.6px] outline-[3px] no-underline mb-6 md:text-lg md:leading-[25.2px]"></p>
                        <div className="items-center bg-zinc-900 box-border caret-transparent text-white inline-flex h-[35px] outline-[3px] no-underline overflow-hidden rounded-lg">
                          <p className="items-center bg-white box-border caret-transparent text-zinc-900 flex text-sm h-[35px] justify-center leading-[16.8px] min-h-0 min-w-0 outline-[3px] no-underline w-full px-3 md:min-h-[auto] md:min-w-[auto]">
                            link
                          </p>
                        </div>
                      </div>
                      <div className="caret-transparent block outline-[3px] absolute text-center no-underline translate-x-[-50.0%] left-2/4 bottom-[16.875px] md:hidden md:transform-none md:bottom-8">
                        <h2 className="caret-transparent text-white hidden text-lg font-semibold leading-[21.6px] outline-[3px] no-underline mb-3 md:text-2xl md:leading-[28.8px]"></h2>
                        <p className="caret-transparent text-white hidden text-sm leading-[19.6px] outline-[3px] no-underline mb-6 md:text-lg md:leading-[25.2px]"></p>
                        <div className="items-center bg-zinc-900 box-border caret-transparent text-white inline-flex h-[35px] outline-[3px] no-underline overflow-hidden rounded-lg">
                          <p className="items-center bg-white box-border caret-transparent text-zinc-900 flex text-sm h-[35px] justify-center leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-3 md:min-h-0 md:min-w-0">
                            link
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  role="button"
                  aria-label="Next slide"
                  className="items-center caret-transparent text-blue-600 flex h-[25px] justify-center outline-[3px] absolute no-underline translate-y-[-18.5px] w-[25px] z-10 border p-[5px] rounded-[50%] border-solid border-transparent right-[5.625px] top-2/4 md:right-[19.2px] after:accent-auto after:caret-transparent after:text-blue-600 after:hidden after:text-[44px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[44px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-swiper_icons"
                >
                  <img
                    src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-9.svg"
                    alt="Icon"
                    className="box-border caret-transparent text-zinc-900 h-5 object-contain outline-[3px] no-underline align-baseline w-5"
                  />
                </div>
                <div
                  role="button"
                  aria-label="Previous slide"
                  className="items-center caret-transparent text-blue-600 flex h-[25px] justify-center outline-[3px] absolute no-underline translate-y-[-18.5px] w-[25px] z-10 border p-[5px] rounded-[50%] border-solid border-transparent left-[5.625px] top-2/4 md:left-[19.2px] after:accent-auto after:caret-transparent after:text-blue-600 after:hidden after:text-[44px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[44px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-swiper_icons"
                >
                  <img
                    src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-10.svg"
                    alt="Icon"
                    className="box-border caret-transparent text-zinc-900 h-5 object-contain outline-[3px] no-underline align-baseline w-5"
                  />
                </div>
              </div>
            </div>
            <div className="items-center bg-white border-t-gray-100 caret-transparent grid grid-cols-[1fr_1px_1fr] outline-[3px] no-underline border-t">
              <button
                onClick={handleHideToday}
                className="items-center bg-white caret-transparent text-zinc-900 flex text-base h-10 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full cursor-pointer hover:bg-gray-50 transition-colors"
              >
                오늘 하루 열지 않기
              </button>
              <div className="items-center bg-zinc-900 caret-transparent text-zinc-900 text-base h-4 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-px"></div>
              <button
                onClick={handleClose}
                className="items-center bg-white caret-transparent text-zinc-900 flex text-base h-10 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full cursor-pointer hover:bg-gray-50 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
