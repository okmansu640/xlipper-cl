import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "@/context/SearchContext";

const memberMenuItems = [
  { label: "로그인", href: "/member/login" },
  { label: "회원가입", href: "/member/join" },
  { label: "마이쇼핑", href: "/myshop/order/list.html" },
  { label: "주문조회", href: "/myshop/order/list.html" },
  { label: "최근 본 상품", href: "/product/recent" },
];

export const HeaderActions = () => {
  const { openSearch } = useSearch();
  const [memberOpen, setMemberOpen] = useState(false);

  return (
    <div className="items-center caret-transparent gap-x-3 grid grid-flow-col h-[43.9844px] justify-end min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 no-underline md:gap-x-6 md:h-[48.9844px] md:gap-y-6">
      {/* 검색 버튼 */}
      <div className="items-center caret-transparent flex h-[43.9844px] min-h-[auto] min-w-[auto] outline-[3px] relative no-underline md:h-[48.9844px]">
        <p className="caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          <button
            onClick={openSearch}
            aria-label="검색 열기"
            className="items-center caret-transparent flex outline-none cursor-pointer bg-transparent border-none p-0"
          >
            <img
              src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-3.svg"
              alt="검색"
              className="box-border caret-transparent text-zinc-900 h-[25px] outline-[3px] no-underline align-baseline w-[25px]"
            />
          </button>
        </p>
      </div>

      {/* 회원 버튼 + 드롭다운 */}
      <div
        className="items-center caret-transparent hidden h-[43.9844px] min-h-0 min-w-0 outline-[3px] relative no-underline md:flex md:h-[48.9844px] md:min-h-[auto] md:min-w-[auto]"
        onMouseEnter={() => setMemberOpen(true)}
        onMouseLeave={() => setMemberOpen(false)}
      >
        <p className="caret-transparent text-zinc-900 text-base font-semibold leading-[22.4px] min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto] cursor-pointer">
          <img
            src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-4.svg"
            alt="회원"
            className="box-border caret-transparent h-[25px] outline-[3px] no-underline align-baseline w-[25px]"
          />
        </p>

        {/* 드롭다운 메뉴 */}
        <div
          className={`absolute top-full right-0 mt-1 w-[140px] bg-white border border-zinc-200 shadow-md z-[500] transition-all duration-200 ${
            memberOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-1"
          }`}
        >
          <ul className="py-1">
            {memberMenuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 whitespace-nowrap no-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 장바구니 버튼 */}
      <div className="items-center caret-transparent flex h-[43.9844px] min-h-[auto] min-w-[auto] outline-[3px] relative no-underline md:h-[48.9844px]">
        <p className="caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          <Link
            to="/order/basket"
            className="items-center caret-transparent flex outline-[3px] relative no-underline"
          >
            <img
              src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-5.svg"
              alt="장바구니"
              className="box-border caret-transparent text-zinc-900 h-[25px] outline-[3px] no-underline align-baseline w-[25px]"
            />
            <span className="bg-zinc-900 box-border caret-transparent text-white block text-[10px] font-semibold h-[15px] leading-[13px] outline-[3px] absolute text-center no-underline w-[15px] border border-zinc-900 rounded-[50%] border-solid right-0 -bottom-1">
              0
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};
