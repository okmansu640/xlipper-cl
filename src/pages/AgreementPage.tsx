import { Link } from "react-router-dom";

export const AgreementPage = () => {
  return (
    <main className="max-w-[800px] mx-auto px-4 py-12">
      <div className="mb-2">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-zinc-900 mb-6 mt-4">이용약관</h1>
      <div className="prose prose-sm text-zinc-600 space-y-6 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-zinc-900 mb-2">
            제1조 (목적)
          </h2>
          <p>
            이 약관은 주식회사 코어메이커스(이하 &quot;회사&quot;)가 운영하는
            엑슬리퍼 온라인 쇼핑몰(이하 &quot;쇼핑몰&quot;)에서 제공하는 인터넷
            관련 서비스(이하 &quot;서비스&quot;)를 이용함에 있어 회사와 이용자의
            권리·의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-bold text-zinc-900 mb-2">
            제2조 (정의)
          </h2>
          <p>
            &quot;쇼핑몰&quot;이란 회사가 재화 또는 용역(이하 &quot;재화
            등&quot;)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를
            이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말합니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-bold text-zinc-900 mb-2">
            제3조 (약관의 게시와 개정)
          </h2>
          <p>
            회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 쇼핑몰의 초기
            서비스화면에 게시합니다. 회사는 약관의 규제에 관한 법률,
            전자거래기본법, 전자서명법, 정보통신망 이용촉진 및 정보보호 등에
            관한 법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을
            개정할 수 있습니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-bold text-zinc-900 mb-2">
            제4조 (서비스의 제공 및 변경)
          </h2>
          <p>
            회사는 다음과 같은 업무를 수행합니다: 재화 또는 용역에 대한 정보
            제공 및 구매계약의 체결, 구매계약이 체결된 재화 또는 용역의 배송,
            기타 회사가 정하는 업무.
          </p>
        </section>
        <section>
          <h2 className="text-base font-bold text-zinc-900 mb-2">
            제5조 (서비스의 중단)
          </h2>
          <p>
            회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절
            등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수
            있습니다.
          </p>
        </section>
      </div>
    </main>
  );
};
