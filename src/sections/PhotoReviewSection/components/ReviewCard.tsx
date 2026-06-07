export type ReviewCardProps = {
  ariaLabel: string;
  href: string;
  reviewImages: string[];
  productImageUrl: string;
  hasReviewImages: string;
  title: string;
  description: React.ReactNode;
  author: string;
  date: string;
  ratingImageUrl: string;
  ratingAlt: string;
  productName: string;
};

export const ReviewCard = (props: ReviewCardProps) => {
  return (
    <li
      role="group"
      aria-label={props.ariaLabel}
      className="caret-transparent block shrink-0 h-full list-none min-h-[auto] outline-[3px] relative no-underline w-[172px] mr-3 md:w-[233.6px]"
    >
      <a
        href={props.href}
        className="caret-transparent block outline-[3px] no-underline w-[172px] md:w-[233.6px]"
      >
        <div className="border-l-zinc-200 border-r-zinc-200 border-t-zinc-200 box-border caret-transparent outline-[3px] no-underline w-[172px] overflow-hidden rounded-t-lg border-l border-r border-t md:w-[233.6px]">
          <div className="caret-transparent outline-[3px] no-underline w-[172px] md:w-[233.6px]">
            {props.hasReviewImages === "true" ? (
              <>
                <div className="caret-transparent outline-[3px] no-underline w-[172px] md:w-[233.6px]">
                  <div className="caret-transparent outline-[3px] relative no-underline w-full z-[1] overflow-hidden mx-auto">
                    <div className="caret-transparent flex h-full outline-[3px] relative no-underline w-full z-[1]">
                      {props.reviewImages.map((reviewImage, index) => (
                        <div
                          key={reviewImage}
                          role="group"
                          aria-label={`${index + 1} / ${props.reviewImages.length}`}
                          className="caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-[172px] md:w-[234px]"
                        >
                          <img
                            src={reviewImage}
                            alt=""
                            className="aspect-square box-border caret-transparent inline max-w-full object-cover outline-[3px] no-underline align-top w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="caret-transparent outline-[3px] absolute text-center no-underline z-10"></div>
                  </div>
                </div>
                <div className="caret-transparent outline-[3px] no-underline hidden">
                  <img
                    src={props.productImageUrl}
                    alt=""
                    className="aspect-square box-border caret-transparent inline max-w-full object-cover outline-[3px] no-underline align-top w-full"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="caret-transparent outline-[3px] no-underline w-[172px] md:w-[233.6px] hidden"></div>
                <div className="caret-transparent outline-[3px] no-underline">
                  <img
                    src={props.productImageUrl}
                    alt=""
                    className="aspect-square box-border caret-transparent inline max-w-full object-cover outline-[3px] no-underline align-top w-full"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="border-l-zinc-200 border-r-zinc-200 border-t-zinc-200 box-border caret-transparent outline-[3px] no-underline p-3 border-l border-r border-t">
          <div className="caret-transparent outline-[3px] no-underline">
            <div className="caret-transparent text-zinc-900 flow-root text-sm font-semibold leading-[16.8px] outline-[3px] no-underline text-ellipsis break-all overflow-hidden mb-3 md:text-base md:leading-[19.2px]">
              {props.title}
              <span className="caret-transparent text-sm leading-[16.8px] outline-[3px] no-underline break-all md:text-base md:leading-[19.2px]"></span>
            </div>
            <div className="caret-transparent text-zinc-600 flow-root text-sm leading-[22.4px] outline-[3px] no-underline text-ellipsis break-all overflow-hidden mb-3">
              {props.description}
            </div>
            <div className="caret-transparent outline-[3px] no-underline">
              <div className="items-center caret-transparent flex justify-between outline-[3px] no-underline mb-2">
                <div className="caret-transparent text-zinc-600 text-xs leading-[14.4px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-sm md:leading-[16.8px]">
                  {props.author}
                </div>
                <div className="caret-transparent text-zinc-600 text-xs leading-[14.4px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-sm md:leading-[16.8px]">
                  {props.date}
                </div>
              </div>
              <div className="caret-transparent outline-[3px] no-underline">
                <img
                  src={props.ratingImageUrl}
                  alt={props.ratingAlt}
                  className="box-border caret-transparent inline max-w-full outline-[3px] no-underline align-top"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-zinc-200 border-l-zinc-200 border-r-zinc-200 box-border caret-transparent outline-[3px] no-underline overflow-hidden pb-3 px-3 rounded-b-lg border-b border-l border-r">
          <div className="items-center caret-transparent gap-x-3 flex outline-[3px] gap-y-3 no-underline">
            <div className="caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              <img
                src={props.productImageUrl}
                alt=""
                className="box-border caret-transparent inline h-[50px] max-w-full object-cover outline-[3px] no-underline align-top w-[50px] rounded-[50%]"
              />
            </div>
            <div className="caret-transparent text-zinc-900 flow-root text-sm leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] no-underline text-ellipsis break-all overflow-hidden">
              {props.productName}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};
