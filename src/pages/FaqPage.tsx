import { useState } from "react";
import { Link } from "react-router-dom";

const FAQS = [
  {
    q: "사이즈는 어떻게 선택하나요?",
    a: "발 길이를 기준으로 선택하시면 됩니다. 발볼이 넓으신 분은 한 사이즈 크게 선택하시는 것을 권장드립니다. 사이즈 가이드 페이지를 참고해주세요.",
  },
  {
    q: "교환/환불은 어떻게 하나요?",
    a: "상품 수령 후 7일 이내에 고객센터(070-8211-1914)로 연락 주시거나 1:1 문의를 남겨주시면 담당자가 안내해 드립니다. 착용 흔적이 없는 상품에 한해 교환/환불이 가능합니다.",
  },
  {
    q: "배송은 얼마나 걸리나요?",
    a: "결제 확인 후 영업일 기준 1~3일 이내에 발송됩니다. 발송 후 택배 도착까지 보통 1~2일이 소요됩니다.",
  },
  {
    q: "족저근막염이 있는데 착용해도 되나요?",
    a: "엑슬리퍼는 족저근막염 완화를 위해 설계된 제품입니다. 단, 개인 상태에 따라 효과가 다를 수 있으므로 심한 경우 전문의와 상담 후 착용하시길 권장합니다.",
  },
  {
    q: "세탁 방법이 궁금합니다.",
    a: "중성세제를 이용한 손세탁을 권장합니다. 세탁기 및 건조기 사용은 제품 변형의 원인이 될 수 있으니 삼가주세요. 세탁 후 그늘에서 자연건조하세요.",
  },
  {
    q: "포인트/쿠폰은 어디서 확인하나요?",
    a: "로그인 후 마이쇼핑 > 적립금/쿠폰 메뉴에서 확인하실 수 있습니다.",
  },
  {
    q: "현금영수증 발급이 가능한가요?",
    a: "네, 무통장 입금 시 현금영수증 발급이 가능합니다. 주문 시 현금영수증 발급 정보를 입력해주시거나 고객센터로 문의해주세요.",
  },
];

export const FaqPage = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <div className="mb-2">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 mt-4">
        FAQ
      </h1>
      <p className="text-zinc-500 mb-8 text-sm">
        자주 묻는 질문을 모아두었습니다.
      </p>

      <div className="divide-y divide-zinc-100 border-t border-zinc-200">
        {FAQS.map((faq, i) => (
          <div key={i}>
            <button
              className="w-full flex items-center justify-between py-4 px-2 text-left hover:bg-zinc-50 transition-colors"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <span className="text-sm font-semibold text-zinc-800 flex items-center gap-2">
                <span className="text-zinc-400 font-bold">Q.</span>
                {faq.q}
              </span>
              <span
                className={`text-zinc-400 text-lg transition-transform duration-200 ${openIdx === i ? "rotate-45" : ""}`}
              >
                ＋
              </span>
            </button>
            {openIdx === i && (
              <div className="px-4 pb-5 text-sm text-zinc-600 leading-relaxed bg-zinc-50">
                <span className="font-bold text-zinc-400 mr-2">A.</span>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};
