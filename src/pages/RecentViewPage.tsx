import { Link } from "react-router-dom";

export const RecentViewPage = () => {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-16 text-center">
      <div className="mb-8 text-left">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
        최근 본 상품
      </h1>
      <p className="text-zinc-400 text-sm mb-10">
        최근에 살펴보신 상품이 없습니다.
      </p>
      <Link
        to="/product/list"
        className="inline-flex items-center bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-700 transition-colors text-sm"
      >
        전체 상품 보기
      </Link>
    </main>
  );
};
