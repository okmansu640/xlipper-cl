import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <main className="max-w-[600px] mx-auto px-4 py-24 text-center">
    <h1 className="text-6xl font-bold text-zinc-200 mb-4">404</h1>
    <h2 className="text-xl font-semibold text-zinc-900 mb-2">
      페이지를 찾을 수 없습니다
    </h2>
    <p className="text-zinc-500 mb-8">
      요청하신 페이지가 존재하지 않거나 이동되었습니다.
    </p>
    <Link
      to="/"
      className="inline-flex items-center bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-700 transition-colors"
    >
      홈으로 돌아가기
    </Link>
  </main>
);
