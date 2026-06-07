import { Link } from "react-router-dom";

const MENU_ITEMS = [
  {
    label: "주문/배송 조회",
    icon: "📦",
    href: "/myshop/order",
    desc: "주문 현황과 배송 상태를 확인하세요.",
  },
  {
    label: "취소/교환/환불",
    icon: "🔄",
    href: "/myshop/return",
    desc: "취소·환불·교환 내역을 조회합니다.",
  },
  {
    label: "관심상품",
    icon: "❤️",
    href: "/myshop/wish",
    desc: "찜한 상품 목록을 확인하세요.",
  },
  {
    label: "적립금",
    icon: "💰",
    href: "/myshop/point",
    desc: "적립금 내역 및 잔액을 확인하세요.",
  },
  {
    label: "쿠폰",
    icon: "🎟",
    href: "/myshop/coupon",
    desc: "보유 쿠폰을 확인하고 사용하세요.",
  },
  {
    label: "회원정보 수정",
    icon: "👤",
    href: "/myshop/info",
    desc: "개인정보 및 비밀번호를 변경하세요.",
  },
];

export const MyShopPage = () => {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <div className="mb-2">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 mt-4">
        마이쇼핑
      </h1>
      <p className="text-zinc-500 mb-8 text-sm">
        로그인 후 이용 가능한 서비스입니다.
      </p>

      {/* 로그인 유도 배너 */}
      <div className="mb-8 p-6 bg-zinc-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-base mb-1">
            로그인이 필요한 서비스입니다.
          </p>
          <p className="text-zinc-400 text-sm">
            로그인 후 주문이력, 적립금, 쿠폰 등 다양한 서비스를 이용해보세요.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link
            to="/member/login"
            className="bg-white text-zinc-900 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-100 transition-colors"
          >
            로그인
          </Link>
          <Link
            to="/member/join"
            className="border border-white text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-zinc-900 transition-colors"
          >
            회원가입
          </Link>
        </div>
      </div>

      {/* 메뉴 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="p-5 rounded-2xl border border-zinc-100 hover:border-zinc-300 transition-colors flex flex-col gap-2"
          >
            <span className="text-2xl">{item.icon}</span>
            <p className="text-sm font-bold text-zinc-900">{item.label}</p>
            <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};
