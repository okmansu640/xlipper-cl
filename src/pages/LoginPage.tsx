import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [form, setForm] = useState({ id: "", pw: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("현재 데모 버전에서는 로그인 기능이 지원되지 않습니다.");
  };

  return (
    <main className="max-w-[420px] mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <Link to="/" className="inline-block">
          <span className="text-2xl font-black tracking-tighter text-zinc-900">
            XLIPPER
          </span>
        </Link>
      </div>

      <h1 className="text-xl font-bold text-zinc-900 mb-6 text-center">
        로그인
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="아이디"
          required
          className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
          value={form.id}
          onChange={(e) => setForm((f) => ({ ...f, id: e.target.value }))}
        />
        <input
          type="password"
          placeholder="비밀번호"
          required
          className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
          value={form.pw}
          onChange={(e) => setForm((f) => ({ ...f, pw: e.target.value }))}
        />
        <button
          type="submit"
          className="w-full bg-zinc-900 text-white py-3 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors"
        >
          로그인
        </button>
      </form>

      <div className="flex items-center justify-center gap-4 mt-5 text-sm text-zinc-500">
        <Link to="/member/join" className="hover:underline">
          회원가입
        </Link>
        <span className="text-zinc-200">|</span>
        <a href="#none" className="hover:underline">
          아이디 찾기
        </a>
        <span className="text-zinc-200">|</span>
        <a href="#none" className="hover:underline">
          비밀번호 찾기
        </a>
      </div>

      <div className="mt-8 p-4 bg-zinc-50 rounded-xl text-sm text-zinc-500 text-center">
        아직 회원이 아니신가요?{" "}
        <Link
          to="/member/join"
          className="font-semibold text-zinc-900 hover:underline"
        >
          회원가입하기
        </Link>
      </div>
    </main>
  );
};
