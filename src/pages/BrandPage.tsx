import { Link } from "react-router-dom";

export const BrandPage = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          브랜드 스토리
        </h1>
        <p className="text-zinc-500 text-base">
          엑슬리퍼(Xlipper)는 발 건강을 위한 혁신적인 슬리퍼 브랜드입니다.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">우리의 미션</h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            엑슬리퍼는 족저근막염, 평발, 아치 붕괴 등 발 건강 문제로 고통받는
            분들을 위해 탄생했습니다. 1mm의 정밀한 설계를 통해 자연스러운 보행을
            돕고, 발의 피로를 최소화합니다.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-6">
            주식회사 코어메이커스는 2024년 부산에서 설립되어, 전문적인 발 건강
            연구를 바탕으로 최고 품질의 기능성 슬리퍼를 개발하고 있습니다.
          </p>
          <Link
            to="/product/list"
            className="inline-flex items-center bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-700 transition-colors"
          >
            제품 보러가기
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden bg-zinc-100 aspect-square flex items-center justify-center">
          <img
            src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/77643a5dbd6db5d70eca8f02b1646a89.png"
            alt="Xlipper Brand"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "특허 기술",
            desc: "자세 교정 및 족저근막염 완화를 위한 특허받은 아치 서포트 기술",
          },
          {
            title: "검증된 품질",
            desc: "2,000명 이상의 고객 리뷰로 증명된 편안함과 내구성",
          },
          {
            title: "전문가 추천",
            desc: "정형외과 전문의와 물리치료사가 추천하는 기능성 슬리퍼",
          },
        ].map((item) => (
          <div key={item.title} className="bg-zinc-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-zinc-900 mb-2">
              {item.title}
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
