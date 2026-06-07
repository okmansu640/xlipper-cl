export const SideMenuAccount = () => {
  return (
    <div className="caret-transparent outline-[3px] no-underline">
      <div className="border-t-zinc-200 caret-transparent outline-[3px] no-underline mt-6 py-6 border-t">
        <div className="caret-transparent outline-[3px] no-underline mb-6">
          <h2 className="caret-transparent text-zinc-900 text-lg font-medium leading-[21.6px] outline-[3px] no-underline mb-3">
            로그인 후 이용하세요
          </h2>
          <p className="caret-transparent text-zinc-600 text-sm font-medium leading-[16.8px] outline-[3px] no-underline">
            회원가입 후 다양한 혜택 받아가세요
          </p>
        </div>
        <div className="caret-transparent outline-[3px] no-underline">
          <ul className="caret-transparent gap-x-3 grid grid-cols-[repeat(3,auto)] outline-[3px] gap-y-3 no-underline pl-0">
            <li className="caret-transparent text-zinc-600 list-none min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              <a
                href="/member/login"
                className="caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline"
              >
                로그인
              </a>
              /{" "}
              <a
                href="/member/join"
                className="caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline"
              >
                회원가입
              </a>
            </li>
            <li className="caret-transparent text-zinc-600 list-none min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              <a
                href="/myshop/order/list.html"
                className="caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline"
              >
                주문조회
              </a>
            </li>
            <li className="caret-transparent text-zinc-600 list-none min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              <a
                href="/product/recent"
                className="caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline"
              >
                최근 본 상품
              </a>
            </li>
            <li className="caret-transparent text-zinc-600 list-none min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              <a
                href="/myshop/wish_list.html"
                className="caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline"
              >
                관심상품
              </a>
            </li>
            <li className="caret-transparent text-zinc-600 list-none min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              <a
                href="/order/basket.html"
                className="caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline"
              >
                장바구니
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
