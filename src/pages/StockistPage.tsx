import { Link } from "react-router-dom";

const STORES = [
  {
    region: "서울",
    name: "엑슬리퍼 강남점",
    address: "서울특별시 강남구 테헤란로 123 1층",
    tel: "02-1234-5678",
    hours: "10:00 ~ 20:00",
  },
  {
    region: "서울",
    name: "엑슬리퍼 홍대점",
    address: "서울특별시 마포구 어울마당로 45 2층",
    tel: "02-2345-6789",
    hours: "11:00 ~ 21:00",
  },
  {
    region: "부산",
    name: "엑슬리퍼 본사 쇼룸",
    address: "부산광역시 남구 유엔로74번길 5 (우암동) 1층",
    tel: "070-8211-1914",
    hours: "10:00 ~ 18:00 (주말·공휴일 휴무)",
  },
  {
    region: "부산",
    name: "엑슬리퍼 센텀시티점",
    address: "부산광역시 해운대구 센텀중앙로 55 B1층",
    tel: "051-3456-7890",
    hours: "10:30 ~ 20:30",
  },
  {
    region: "대구",
    name: "엑슬리퍼 동성로점",
    address: "대구광역시 중구 동성로 2길 17 1층",
    tel: "053-4567-8901",
    hours: "11:00 ~ 20:00",
  },
];

const REGIONS = ["전체", ...Array.from(new Set(STORES.map((s) => s.region)))];

import { useState } from "react";

export const StockistPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("전체");
  const filtered =
    selectedRegion === "전체"
      ? STORES
      : STORES.filter((s) => s.region === selectedRegion);

  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <div className="mb-2">
        <Link to="/" className="text-zinc-400 text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 mt-4">
        STOCKIST
      </h1>
      <p className="text-zinc-500 mb-8 text-sm">
        엑슬리퍼를 직접 만나볼 수 있는 오프라인 매장입니다.
      </p>

      {/* 지역 필터 */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {REGIONS.map((r) => (
          <button
            key={r}
            onClick={() => setSelectedRegion(r)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${selectedRegion === r ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-200 text-zinc-600 hover:border-zinc-400"}`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* 매장 목록 */}
      <div className="grid gap-4">
        {filtered.map((store, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl border border-zinc-100 hover:border-zinc-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="text-base font-bold text-zinc-900">
                {store.name}
              </h2>
              <span className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded-full shrink-0">
                {store.region}
              </span>
            </div>
            <p className="text-sm text-zinc-600 mb-1">📍 {store.address}</p>
            <p className="text-sm text-zinc-600 mb-1">📞 {store.tel}</p>
            <p className="text-sm text-zinc-500">🕐 {store.hours}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 bg-zinc-50 rounded-xl text-sm text-zinc-600 leading-relaxed">
        <p className="font-semibold text-zinc-900 mb-1">온라인 구매</p>
        <p>
          오프라인 매장 방문이 어려우신 분들은{" "}
          <Link
            to="/product/list"
            className="underline font-medium text-zinc-800"
          >
            온라인 스토어
          </Link>
          에서 편리하게 구매하실 수 있습니다.
        </p>
      </div>
    </main>
  );
};
