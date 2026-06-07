import { Link } from "react-router-dom";

export const CrewPage = () => {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <div className="mb-2">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 mt-4">
        Xlipper Crew
      </h1>
      <p className="text-zinc-500 mb-10 text-sm">
        엑슬리퍼를 함께 즐기는 크루 커뮤니티입니다.
      </p>

      <div className="grid gap-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex gap-4 p-5 border border-zinc-100 rounded-2xl hover:border-zinc-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold shrink-0">
              {i}
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900 mb-1">
                크루 활동 게시글 {i}
              </p>
              <p className="text-xs text-zinc-400">
                엑슬리퍼 크루의 일상과 착용 후기를 공유합니다.
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
