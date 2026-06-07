import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const JoinPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "",
    pw: "",
    pwConfirm: "",
    name: "",
    email: "",
    phone: "",
    agree: false,
    agreePrivacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.id) e.id = "아이디를 입력해주세요.";
    if (form.pw.length < 8) e.pw = "비밀번호는 8자 이상이어야 합니다.";
    if (form.pw !== form.pwConfirm)
      e.pwConfirm = "비밀번호가 일치하지 않습니다.";
    if (!form.name) e.name = "이름을 입력해주세요.";
    if (!form.email.includes("@")) e.email = "올바른 이메일을 입력해주세요.";
    if (!form.agree) e.agree = "이용약관에 동의해주세요.";
    if (!form.agreePrivacy) e.agreePrivacy = "개인정보처리방침에 동의해주세요.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    alert("현재 데모 버전에서는 회원가입 기능이 지원되지 않습니다.");
  };

  const field = (
    key: keyof typeof form,
    label: string,
    type = "text",
    placeholder = "",
  ) => (
    <div>
      <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
        {label} <span className="text-red-400">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder || label}
        className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300"
        value={form[key] as string}
        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
      />
      {errors[key] && (
        <p className="text-red-400 text-xs mt-1">{errors[key]}</p>
      )}
    </div>
  );

  return (
    <main className="max-w-[500px] mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <Link to="/" className="inline-block">
          <span className="text-2xl font-black tracking-tighter text-zinc-900">
            XLIPPER
          </span>
        </Link>
      </div>
      <h1 className="text-xl font-bold text-zinc-900 mb-6 text-center">
        회원가입
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {field("id", "아이디", "text", "영문 소문자, 숫자 6~20자")}
        {field("pw", "비밀번호", "password", "영문+숫자 조합 8자 이상")}
        {field(
          "pwConfirm",
          "비밀번호 확인",
          "password",
          "비밀번호를 다시 입력해주세요",
        )}
        {field("name", "이름")}
        {field("email", "이메일", "email", "email@example.com")}
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
            휴대폰 번호
          </label>
          <input
            type="tel"
            placeholder="010-0000-0000"
            className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
        </div>

        <div className="space-y-2 pt-2">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="mt-0.5 accent-zinc-900"
              checked={form.agree}
              onChange={(e) =>
                setForm((f) => ({ ...f, agree: e.target.checked }))
              }
            />
            <span className="text-sm text-zinc-600">
              <Link
                to="/member/agreement"
                className="font-semibold text-zinc-900 underline"
              >
                이용약관
              </Link>
              에 동의합니다. (필수)
            </span>
          </label>
          {errors.agree && (
            <p className="text-red-400 text-xs ml-6">{errors.agree}</p>
          )}
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="mt-0.5 accent-zinc-900"
              checked={form.agreePrivacy}
              onChange={(e) =>
                setForm((f) => ({ ...f, agreePrivacy: e.target.checked }))
              }
            />
            <span className="text-sm text-zinc-600">
              <Link
                to="/member/privacy"
                className="font-semibold text-zinc-900 underline"
              >
                개인정보처리방침
              </Link>
              에 동의합니다. (필수)
            </span>
          </label>
          {errors.agreePrivacy && (
            <p className="text-red-400 text-xs ml-6">{errors.agreePrivacy}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-zinc-900 text-white py-3 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors"
        >
          회원가입
        </button>
      </form>

      <p className="text-center text-sm text-zinc-500 mt-5">
        이미 회원이신가요?{" "}
        <Link
          to="/member/login"
          className="font-semibold text-zinc-900 hover:underline"
        >
          로그인
        </Link>
      </p>
    </main>
  );
};
