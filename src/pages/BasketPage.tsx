import { Link } from "react-router-dom";
import { useState } from "react";
import productsData from "@/data/products.json";

type CartItem = (typeof productsData)[0] & { qty: number };

export const BasketPage = () => {
  const [items, setItems] = useState<CartItem[]>([
    { ...productsData[0], qty: 1 },
    { ...productsData[1], qty: 1 },
  ]);

  const parsePrice = (str: string) =>
    parseInt(str.replace(/[^0-9]/g, ""), 10) || 0;

  const total = items.reduce(
    (sum, item) => sum + parsePrice(item.salePrice) * item.qty,
    0,
  );

  const updateQty = (id: number, delta: number) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it,
      ),
    );

  const remove = (id: number) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

  return (
    <main className="max-w-[1000px] mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8">
        장바구니
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-zinc-400 mb-6">장바구니가 비어 있습니다.</p>
          <Link
            to="/product/list"
            className="inline-block bg-zinc-900 text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-zinc-700 transition-colors"
          >
            쇼핑 계속하기
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col divide-y divide-zinc-100">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 py-5">
                <Link to={item.detailHref} className="shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.productName}
                    className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-xl bg-zinc-100"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={item.detailHref}>
                    <p className="text-xs text-zinc-400 mb-1">
                      {item.featureText}
                    </p>
                    <p className="text-sm font-semibold text-zinc-900 leading-snug line-clamp-2 mb-2">
                      {item.productName}
                    </p>
                  </Link>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base font-bold text-zinc-900">
                      {item.salePrice}
                    </span>
                    {item.discountRate !== "0%" && (
                      <span className="text-xs font-bold text-red-500">
                        {item.discountRate}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-zinc-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-zinc-700 hover:bg-zinc-100 transition-colors text-lg"
                      >
                        −
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center text-sm font-medium text-zinc-900">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-zinc-700 hover:bg-zinc-100 transition-colors text-lg"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => remove(item.id)}
                      className="text-xs text-zinc-400 hover:text-red-500 transition-colors underline underline-offset-2"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-zinc-200 pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-zinc-500">상품 합계</span>
              <span className="text-sm font-semibold text-zinc-900">
                {total.toLocaleString()}원
              </span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-zinc-500">배송비</span>
              <span className="text-sm font-semibold text-zinc-900">무료</span>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-200 pt-4 mb-6">
              <span className="text-base font-bold text-zinc-900">
                결제 금액
              </span>
              <span className="text-xl font-bold text-zinc-900">
                {total.toLocaleString()}원
              </span>
            </div>
            <button className="w-full bg-zinc-900 text-white py-4 rounded-xl text-base font-semibold hover:bg-zinc-700 transition-colors">
              주문하기
            </button>
            <Link
              to="/product/list"
              className="block w-full text-center mt-3 bg-zinc-100 text-zinc-900 py-4 rounded-xl text-base font-semibold hover:bg-zinc-200 transition-colors"
            >
              쇼핑 계속하기
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};
