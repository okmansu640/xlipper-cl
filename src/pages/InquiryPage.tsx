import { useState } from "react";
import { Link } from "react-router-dom";

export const InquiryPage = () => {
  const [form, setForm] = useState({
    type: "상품문의",
    title: "",
    content: "",
    name: "",
    email: "",
    secret: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="max-w-[700px] mx-auto px-4 py-12">
      <div className="mb-2">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 mt-4">
        1:1 문의하기
      </h1>
      <p className="text-zinc-500 mb-8 text-sm">
        궁금한 점을 남겨주시면 영업일 기준 1~2일 이내에 답변드립니다.
      </p>

      {submitted ? (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-lg font-bold text-zinc-900 mb-2">
            문의가 접수되었습니다
          </h2>
          <p className="text-zinc-500 text-sm mb-6">
            영업일 기준 1~2일 이내에 답변드리겠습니다.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-700 transition-colors text-sm"
          >
            다시 문의하기
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
              문의 유형
            </label>
            <select
              className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300"
              value={form.type}
              onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
            >
              {["상품문의", "배송문의", "교환/환불", "주문취소", "기타"].map(
                (t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ),
              )}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
              제목 <span className="text-red-400">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="제목을 입력해주세요"
              className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300"
              value={form.title}
              onChange={(e) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
              내용 <span className="text-red-400">*</span>
            </label>
            <textarea
              required
              rows={6}
              placeholder="문의 내용을 입력해주세요"
              className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300 resize-none"
              value={form.content}
              onChange={(e) =>
                setForm((f) => ({ ...f, content: e.target.value }))
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
                이름 <span className="text-red-400">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="이름"
                className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
                이메일
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="secret"
              className="w-4 h-4 accent-zinc-900"
              checked={form.secret}
              onChange={(e) =>
                setForm((f) => ({ ...f, secret: e.target.checked }))
              }
            />
            <label htmlFor="secret" className="text-sm text-zinc-600">
              비밀 문의로 등록
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-zinc-900 text-white py-3 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors"
          >
            문의 등록
          </button>
        </form>
      )}
    </main>
  );
};
