import { Link } from "react-router-dom";

const NOTICES = [
  {
    id: 1,
    title: "[공지] 2024 여름 시즌 신제품 출시 안내",
    date: "2024-06-01",
    views: 312,
  },
  {
    id: 2,
    title: "[공지] 배송 지연 안내 (6월 초 주문 건)",
    date: "2024-06-03",
    views: 198,
  },
  {
    id: 3,
    title: "[안내] 고객센터 운영시간 변경 안내",
    date: "2024-05-20",
    views: 245,
  },
  {
    id: 4,
    title: "[공지] 개인정보처리방침 개정 안내",
    date: "2024-05-10",
    views: 187,
  },
  {
    id: 5,
    title: "[이벤트] 창립 기념 특가 이벤트 안내",
    date: "2024-04-30",
    views: 421,
  },
  {
    id: 6,
    title: "[공지] 엑슬리퍼 공식 인스타그램 오픈",
    date: "2024-04-15",
    views: 534,
  },
];

export const NoticePage = () => {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <div className="mb-2">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 mt-4">
        공지사항
      </h1>
      <p className="text-zinc-500 mb-8 text-sm">
        엑슬리퍼의 새로운 소식을 알려드립니다.
      </p>

      <div className="border-t border-zinc-200">
        {NOTICES.map((notice, i) => (
          <div
            key={notice.id}
            className="flex items-center justify-between py-4 border-b border-zinc-100 hover:bg-zinc-50 px-2 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-zinc-400 text-sm w-6 text-center shrink-0">
                {NOTICES.length - i}
              </span>
              <p className="text-sm text-zinc-800 font-medium truncate">
                {notice.title}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0 ml-4">
              <span className="text-xs text-zinc-400">{notice.date}</span>
              <span className="text-xs text-zinc-400">조회 {notice.views}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
