import { Link } from "react-router-dom";

export const PrivacyPage = () => {
  return (
    <main className="max-w-[800px] mx-auto px-4 py-12">
      <div className="mb-2">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-zinc-900 mb-6 mt-4">
        개인정보처리방침
      </h1>
      <div className="space-y-6 text-sm text-zinc-600 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-zinc-900 mb-2">
            1. 개인정보의 처리 목적
          </h2>
          <p>
            주식회사 코어메이커스(이하 &quot;회사&quot;)는 다음의 목적을 위하여
            개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
            용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 개인정보
            보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
            예정입니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>회원 가입 및 관리</li>
            <li>재화 또는 서비스 제공</li>
            <li>고충 처리</li>
          </ul>
        </section>
        <section>
          <h2 className="text-base font-bold text-zinc-900 mb-2">
            2. 개인정보의 처리 및 보유 기간
          </h2>
          <p>
            회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
            개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서
            개인정보를 처리·보유합니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-bold text-zinc-900 mb-2">
            3. 정보주체의 권리·의무 및 행사방법
          </h2>
          <p>
            정보주체는 회사에 대해 언제든지 개인정보 열람, 정정·삭제, 처리정지
            요구 등의 권리를 행사할 수 있습니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-bold text-zinc-900 mb-2">
            4. 개인정보보호 책임자
          </h2>
          <p>
            개인정보보호 책임자: 주식회사 코어메이커스
            <br />
            이메일: coremakers@coremakers.kr
            <br />
            전화: 070-8211-1914
          </p>
        </section>
      </div>
    </main>
  );
};
