import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: 1,
    title: "여름 시즌 20% 할인 이벤트",
    period: "2024-06-01 ~ 2024-06-30",
    status: "진행중",
    img: "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/77643a5dbd6db5d70eca8f02b1646a89.png",
    desc: "엑슬리퍼 전 상품 20% 할인! 여름 시즌 한정 특가를 놓치지 마세요.",
  },
  {
    id: 2,
    title: "리뷰 작성 시 포인트 2배 적립",
    period: "2024-05-01 ~ 2024-05-31",
    status: "종료",
    img: "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/9c45f3b32bc7e4e6b8c9d1a2f3e4b5c6.png",
    desc: "구매 후 리뷰 작성 시 포인트 2배 적립 이벤트입니다.",
  },
  {
    id: 3,
    title: "첫 구매 고객 10% 쿠폰 증정",
    period: "2024-04-01 ~ 2024-12-31",
    status: "진행중",
    img: "https://c.animaapp.com/mq3f9bhuPsGnIl/assets/77643a5dbd6db5d70eca8f02b1646a89.png",
    desc: "첫 구매 고객님께 10% 할인 쿠폰을 드립니다. 회원가입 후 자동 지급됩니다.",
  },
];

export const EventPage = () => {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <div className="mb-2">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 mt-4">
        이벤트
      </h1>
      <p className="text-zinc-500 mb-8 text-sm">
        엑슬리퍼의 다양한 이벤트에 참여해보세요.
      </p>

      <div className="grid gap-6">
        {EVENTS.map((ev) => (
          <div
            key={ev.id}
            className="rounded-2xl border border-zinc-100 overflow-hidden hover:border-zinc-300 transition-colors flex flex-col md:flex-row"
          >
            <div className="w-full md:w-52 h-44 md:h-auto bg-zinc-100 shrink-0">
              <img
                src={ev.img}
                alt={ev.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="p-5 flex flex-col justify-center gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold ${ev.status === "진행중" ? "bg-zinc-900 text-white" : "bg-zinc-200 text-zinc-500"}`}
                >
                  {ev.status}
                </span>
              </div>
              <h2 className="text-base font-bold text-zinc-900">{ev.title}</h2>
              <p className="text-sm text-zinc-500">기간: {ev.period}</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{ev.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
