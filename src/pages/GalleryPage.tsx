import { Link } from "react-router-dom";

const SIZE_GUIDE = [
  { size: "S", length: "240~250mm", width: "86mm", fits: "220~235" },
  { size: "M", length: "255~265mm", width: "90mm", fits: "240~250" },
  { size: "L", length: "270~280mm", width: "96mm", fits: "255~265" },
  { size: "XL", length: "285~295mm", width: "100mm", fits: "270~280" },
  { size: "XXL", length: "300~310mm", width: "105mm", fits: "285~295" },
];

export const GalleryPage = () => {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <div className="mb-2">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 mt-4">
        사이즈 가이드
      </h1>
      <p className="text-zinc-500 mb-8 text-sm">
        아래 사이즈표를 참고하여 정확한 사이즈를 선택해주세요.
      </p>

      <div className="overflow-x-auto rounded-xl border border-zinc-200">
        <table className="w-full text-sm text-center">
          <thead className="bg-zinc-900 text-white">
            <tr>
              {["사이즈", "전장", "폭", "권장 발 사이즈"].map((h) => (
                <th key={h} className="py-3 px-4 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SIZE_GUIDE.map((row, i) => (
              <tr
                key={row.size}
                className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}
              >
                <td className="py-3 px-4 font-bold text-zinc-900">
                  {row.size}
                </td>
                <td className="py-3 px-4 text-zinc-600">{row.length}</td>
                <td className="py-3 px-4 text-zinc-600">{row.width}</td>
                <td className="py-3 px-4 text-zinc-600">{row.fits}mm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-5 bg-zinc-50 rounded-xl text-sm text-zinc-600 leading-relaxed">
        <p className="font-semibold text-zinc-900 mb-2">📌 사이즈 선택 TIP</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>발볼이 넓으신 분은 한 사이즈 크게 선택하세요.</li>
          <li>
            장시간 착용 시 발이 부을 수 있어 여유 있는 사이즈를 권장합니다.
          </li>
          <li>측정값이 두 사이즈 경계에 걸리면 큰 사이즈를 선택해주세요.</li>
        </ul>
      </div>
    </main>
  );
};
