export type CompactProductCardProps = {
  ariaLabel: string;
  imageHref: string;
  imageAnchorName: string;
  imageSrc: string;
  productHref: string;
  productName: string;
  summary: string;
  consumerPrice: string;
  salePrice: string;
  discountRate: string;
  reviewCount: string;
  showGlobalIcon: boolean;
  showColorOptions: boolean;
};

export const CompactProductCard = (props: CompactProductCardProps) => {
  return (
    <li
      role="group"
      aria-label={props.ariaLabel}
      className="caret-transparent text-neutral-500 block shrink-0 h-full list-none min-h-[auto] min-w-[auto] outline-[3px] relative no-underline align-top w-[135.2px] mr-3 mb-0 md:h-[128px] md:w-full md:mr-0 md:mb-3"
    >
      <div className="caret-transparent gap-x-3 flex flex-col h-full outline-[3px] gap-y-3 no-underline md:gap-x-6 md:flex-row md:h-[128px] md:gap-y-6">
        <div className="aspect-square caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative text-center no-underline">
          <div className="aspect-square caret-transparent outline-[3px] no-underline">
            <a
              href={props.imageHref}
              name={props.imageAnchorName}
              className="caret-transparent text-black block outline-[3px] relative no-underline overflow-hidden rounded-[10px] before:accent-auto before:bg-black/0 before:caret-transparent before:text-black before:block before:text-[0px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[2] before:border-separate before:inset-0 before:font-pretendard"
            >
              <img
                src={props.imageSrc}
                alt=""
                className="aspect-square box-border caret-transparent inline max-w-full object-cover outline-[3px] relative no-underline w-full"
              />
            </a>
            <div className="items-center caret-transparent gap-x-1.5 flex outline-[3px] absolute gap-y-1.5 no-underline left-1.5 top-1.5 md:left-3">
              {props.showGlobalIcon && (
                <img
                  src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon_global_03.gif"
                  alt=""
                  className="box-border caret-transparent max-h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline md:max-h-none"
                />
              )}
            </div>
          </div>
        </div>
        <div className="caret-transparent text-xs leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          <div className="caret-transparent outline-[3px] no-underline mb-3">
            <a
              href={props.productHref}
              className="caret-transparent text-black text-[13px] outline-[3px] no-underline"
            >
              <span className="caret-transparent text-zinc-900 hidden text-sm font-semibold leading-[16.8px] outline-[3px] no-underline text-ellipsis break-all overflow-hidden mb-[17px] md:text-base md:leading-[19.2px]">
                <span className="caret-transparent flow-root text-sm leading-[16.8px] outline-[3px] no-underline text-ellipsis break-all overflow-hidden md:text-base md:leading-[19.2px]">
                  상품명
                </span>
                {" :"}
              </span>
              <span className="caret-transparent text-zinc-900 flow-root text-sm font-semibold leading-[16.8px] outline-[3px] no-underline text-ellipsis break-all overflow-hidden md:text-base md:leading-[19.2px]">
                {props.productName}
              </span>
            </a>
          </div>
          <ul className="caret-transparent list-[circle] outline-[3px] no-underline pl-0">
            <li className="caret-transparent leading-[19px] list-none outline-[3px] no-underline mb-3">
              <strong className="caret-transparent hidden font-bold outline-[3px] no-underline">
                <span className="caret-transparent text-neutral-600 outline-[3px] no-underline">
                  상품 요약설명
                </span>
                {" :"}
              </strong>
              <span className="caret-transparent text-zinc-600 flow-root text-sm font-light leading-[16.8px] outline-[3px] no-underline text-ellipsis overflow-hidden">
                {props.summary}
              </span>
            </li>
            <li className="caret-transparent inline-block leading-[19px] list-none outline-[3px] no-underline mr-[5px]">
              <strong className="caret-transparent hidden font-bold outline-[3px] no-underline">
                <span className="caret-transparent text-neutral-600 outline-[3px] no-underline">
                  소비자가
                </span>
                {" :"}
              </strong>
              <span className="caret-transparent text-zinc-600 text-sm font-light leading-[16.8px] outline-[3px] line-through">
                {props.consumerPrice}
              </span>
            </li>
            <li className="caret-transparent inline-block leading-[19px] list-none outline-[3px] no-underline">
              <strong className="caret-transparent hidden font-bold outline-[3px] no-underline">
                <span className="caret-transparent text-neutral-600 outline-[3px] no-underline">
                  판매가
                </span>
                {" :"}
              </strong>
              <span className="caret-transparent text-zinc-900 text-sm font-semibold leading-[16.8px] outline-[3px] no-underline">
                {props.salePrice}
              </span>
              <span className="caret-transparent text-zinc-900 inline-block text-sm font-semibold leading-[16.8px] outline-[3px] no-underline">
                <div className="caret-transparent text-red-700 outline-[3px] no-underline ml-[5px]">
                  {props.discountRate}
                </div>
              </span>
            </li>
            {props.showColorOptions && (
              <li className="caret-transparent leading-[19px] list-none outline-[3px] no-underline mt-2">
                <strong className="caret-transparent hidden font-bold outline-[3px] no-underline">
                  <span className="caret-transparent text-neutral-600 outline-[3px] no-underline">
                    상품색상
                  </span>
                  {" :"}
                </strong>
                <div className="items-center caret-transparent gap-x-1 flex leading-3 outline-[3px] gap-y-1 no-underline overflow-hidden">
                  <span
                    title="#4848C7"
                    className="bg-indigo-700 box-border caret-transparent block text-[0px] h-3 leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-3 rounded-[50%]"
                  ></span>
                  <span
                    title="#247036"
                    className="bg-green-800 box-border caret-transparent block text-[0px] h-3 leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-3 rounded-[50%]"
                  ></span>
                  <span
                    title="#B34BB3"
                    className="bg-fuchsia-700 box-border caret-transparent block text-[0px] h-3 leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-3 rounded-[50%]"
                  ></span>
                  <span
                    title="#FF6BC4"
                    className="bg-pink-400 box-border caret-transparent block text-[0px] h-3 leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-3 rounded-[50%]"
                  ></span>
                </div>
              </li>
            )}
            <ul className="items-center caret-transparent gap-x-3 flex list-[square] outline-[3px] gap-y-3 no-underline mt-2 pl-0">
              <li className="caret-transparent block list-none min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                <strong className="caret-transparent text-[0px] font-bold leading-[0px] outline-[3px] no-underline mb-[17px]">
                  <span className="caret-transparent text-zinc-600 inline-block text-sm font-normal leading-[14px] outline-[3px] no-underline">
                    리뷰
                  </span>
                  {" :"}
                </strong>
                <span className="caret-transparent text-zinc-600 inline-block text-sm outline-[3px] no-underline">
                  {props.reviewCount}
                </span>
              </li>
            </ul>
          </ul>
          <div className="items-center caret-transparent gap-x-2 flex outline-[3px] gap-y-2 no-underline mt-2">
            <div className="caret-transparent h-5 min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-5 z-[1] before:accent-auto before:bg-zinc-900 before:bg-size-[20px] before:caret-transparent before:text-neutral-500 before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:[mask-image:url(data:image/svg+xml,%3Csvg%20version=%271.1%27%20id=%27Layer_1%27%20xmlns=%27http://www.w3.org/2000/svg%27%20xmlns:xlink=%27http://www.w3.org/1999/xlink%27%20x=%270px%27%20y=%270px%27%20viewBox=%270%200%2041%2036%27%20style=%27enable-background:new%200%200%2041%2036;%27%20xml:space=%27preserve%27%3E%3Cg%3E%3Cpath%20d=%27M20.4,4.7c1.6-1.1,3-2.4,4.5-3.2c6.7-3.7,14,0.4,15.5,7.5c0.6,3-0.1,5.9-1.4,8.6c-1.3,2.6-3,5-5,7.1c-3.5,3.7-7.2,7.2-11.3,10.3c-1.8,1.4-2.6,1.4-4.4,0c-3.7-2.6-7-5.8-10.2-9.1c-2-2-3.9-4.2-5.3-6.6c-1.4-2.3-2.3-4.7-2.5-7.4C-0.1,6.6,3.7,1.1,9.5,0.1c4.1-0.7,7.4,1.1,10.3,3.9C20,4.3,20.3,4.5,20.4,4.7z%20M38.1,10.9c0-0.3-0.1-0.9-0.2-1.5C36.7,4.4,31.3,0.7,25.8,4c-1.4,0.9-2.6,2.1-3.8,3.3c-1.1,1.1-1.8,1.2-2.9,0c-0.5-0.6-1.1-1.2-1.7-1.8c-2.2-2.1-4.8-3.3-7.9-2.6c-4.3,1-7.1,5.2-6.6,9.4c0.3,2.4,1.3,4.5,2.6,6.4c3.8,5.4,8.7,9.7,13.9,13.7c1.1,0.8,1.4,0.8,2.4-0.1c2.3-2,4.6-3.9,6.8-6c2.4-2.2,4.8-4.5,6.5-7.3C36.7,16.7,38.1,14.2,38.1,10.9z%27/%3E%3C/g%3E%3C/svg%3E)] before:[mask-position:50%_50%] before:[mask-repeat:no-repeat] before:[mask-size:contain] before:outline-[3px] before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-pretendard">
              <img
                src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/btn_wish_before.png"
                alt="관심상품 등록 전"
                className="box-border caret-transparent inline h-[18px] max-w-full opacity-0 outline-[3px] no-underline w-[18px] md:h-5 md:w-5"
              />
            </div>
            <div className="caret-transparent h-5 min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-5 z-[1] before:accent-auto before:bg-zinc-900 before:bg-size-[20px] before:caret-transparent before:text-neutral-500 before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:[mask-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2032%2036%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M7.7%2C10.4C7.8%2C9%2C7.8%2C7.6%2C8.1%2C6.3c0.8-3.9%2C4.3-6.5%2C8.3-6.3c3.8%2C0.2%2C6.8%2C2.5%2C7.6%2C5.9c0.3%2C1.3%2C0.2%2C2.7%2C0.3%2C4c0%2C0.1%2C0%2C0.3%2C0%2C0.5c1.3%2C0%2C2.6%2C0%2C3.9%2C0c1%2C0%2C1.4%2C0.4%2C1.5%2C1.4c0.2%2C2.8%2C0.5%2C5.5%2C0.8%2C8.3c0.3%2C2.7%2C0.6%2C5.5%2C0.8%2C8.2c0.1%2C1.2%2C0.3%2C2.3%2C0.3%2C3.5c0.1%2C2.4-1.6%2C4.1-4%2C4.1c-7.7%2C0-15.4%2C0-23%2C0c-2.4%2C0-4.1-1.6-4.1-4c0-2.1%2C0.3-4.2%2C0.5-6.2c0.3-2.6%2C0.5-5.3%2C0.8-7.9c0.2-2.1%2C0.4-4.2%2C0.6-6.3c0.1-0.7%2C0.5-1.1%2C1.3-1.1C5%2C10.4%2C6.4%2C10.4%2C7.7%2C10.4z%20M4.7%2C12.8c0%2C0.5-0.1%2C0.9-0.1%2C1.3c-0.3%2C2.7-0.5%2C5.4-0.8%2C8.2c-0.3%2C2.7-0.5%2C5.4-0.9%2C8.2c-0.3%2C2.4%2C0.2%2C3.1%2C2.6%2C3.1c6.8%2C0%2C13.6%2C0%2C20.4%2C0c0.6%2C0%2C1.2%2C0%2C1.9-0.1c1-0.1%2C1.5-0.6%2C1.4-1.6c-0.2-2.8-0.5-5.6-0.8-8.4c-0.2-2.4-0.5-4.7-0.7-7.1c-0.1-1.2-0.3-2.4-0.4-3.6c-1%2C0-2%2C0-3.1%2C0c0%2C0.7%2C0%2C1.3%2C0%2C2c0%2C0.7-0.6%2C1.3-1.2%2C1.3c-0.7%2C0-1.2-0.5-1.2-1.3c0-0.6%2C0-1.3%2C0-1.9c-3.9%2C0-7.7%2C0-11.6%2C0c0%2C0.6%2C0%2C1.2%2C0%2C1.8c0%2C0.8-0.5%2C1.4-1.2%2C1.4c-0.7%2C0-1.2-0.6-1.3-1.5c0-0.6%2C0-1.2%2C0-1.8C6.7%2C12.8%2C5.7%2C12.8%2C4.7%2C12.8z%20M10.3%2C10.4c3.9%2C0%2C7.7%2C0%2C11.5%2C0c0-1.2%2C0.2-2.5%2C0-3.6c-0.5-2.5-2.2-3.8-4.6-4.2c-2.3-0.4-4.3%2C0.4-5.8%2C2.3C10%2C6.5%2C10.3%2C8.4%2C10.3%2C10.4z%22/%3E%3C/svg%3E)] before:[mask-position:50%_50%] before:[mask-repeat:no-repeat] before:[mask-size:contain] before:outline-[3px] before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-pretendard">
              <img
                src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/btn_list_cart.gif"
                alt="장바구니 담기"
                className="box-border caret-transparent h-[18px] max-w-full opacity-0 outline-[3px] no-underline w-[18px] z-[1] md:h-5 md:w-5"
              />
            </div>
            <div className="caret-transparent hidden h-5 outline-[3px] relative no-underline w-5"></div>
          </div>
        </div>
      </div>
    </li>
  );
};
