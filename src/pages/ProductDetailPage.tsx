import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "@/data/products.json";
import reviewsData from "@/data/reviews.json";

type Tab = "detail" | "review" | "delivery";

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = productsData.find((p) => String(p.id) === id);

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<Tab>("detail");
  const [thumbIdx, setThumbIdx] = useState(0);

  if (!product) {
    return (
      <main className="max-w-[1200px] mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-zinc-900 mb-4">
          상품을 찾을 수 없습니다
        </h1>
        <Link to="/product/list" className="text-zinc-600 hover:underline">
          ← 전체 상품 목록으로
        </Link>
      </main>
    );
  }

  const colors = (product as any).colors as string[] | undefined;
  const sizes = (product as any).sizes as string[] | undefined;
  const detailImages = (product as any).detailImages as string[] | undefined;
  const deliveryInfo = (product as any).deliveryInfo as string | undefined;
  const exchangeInfo = (product as any).exchangeInfo as string | undefined;

  const allImages =
    detailImages && detailImages.length > 0
      ? [
          product.imageUrl,
          ...detailImages.filter((img) => img !== product.imageUrl),
        ]
      : [product.imageUrl];

  const productReviews = reviewsData.filter(
    (r) => r.productName === product.productName,
  );

  const tabs: { key: Tab; label: string }[] = [
    { key: "detail", label: "상품 상세" },
    { key: "review", label: `리뷰 (${productReviews.length})` },
    { key: "delivery", label: "배송·교환·환불" },
  ];

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-zinc-400 mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-zinc-700 transition-colors">
          홈
        </Link>
        <span>/</span>
        <Link
          to="/product/list"
          className="hover:text-zinc-700 transition-colors"
        >
          전체 상품
        </Link>
        <span>/</span>
        <span className="text-zinc-700 line-clamp-1">
          {product.productName}
        </span>
      </nav>

      {/* Top area: image + info */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Left: image gallery */}
        <div>
          <div className="rounded-2xl overflow-hidden bg-zinc-50 aspect-square border border-zinc-100">
            <img
              src={allImages[thumbIdx]}
              alt={product.productName}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
          {allImages.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setThumbIdx(i)}
                  className={`shrink-0 w-[68px] h-[68px] rounded-lg overflow-hidden border-2 transition-all ${
                    i === thumbIdx
                      ? "border-zinc-900"
                      : "border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: product info */}
        <div>
          <p className="text-sm text-zinc-500 mb-2">{product.featureText}</p>
          <h1 className="text-xl md:text-2xl font-bold text-zinc-900 mb-5 leading-snug">
            {product.productName}
          </h1>

          {/* Price */}
          <div className="bg-zinc-50 rounded-xl p-4 mb-6">
            <div className="text-xs text-zinc-400 line-through mb-1">
              정가 {product.consumerPrice}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-zinc-900">
                {product.salePrice}
              </span>
              {product.discountRate !== "0%" && (
                <span className="text-lg font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-lg">
                  {product.discountRate} OFF
                </span>
              )}
            </div>
            <div className="text-xs text-zinc-500 mt-2">
              ⭐ 리뷰 {product.reviewCount}개
            </div>
          </div>

          {/* Color selector */}
          {colors && colors.length > 0 && (
            <div className="mb-5">
              <p className="text-sm font-semibold text-zinc-700 mb-2">
                색상
                {selectedColor && (
                  <span className="font-normal text-zinc-500 ml-2">
                    {selectedColor}
                  </span>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                      selectedColor === c
                        ? "border-zinc-900 bg-zinc-900 text-white font-semibold"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size selector */}
          {sizes && sizes.length > 0 && (
            <div className="mb-5">
              <p className="text-sm font-semibold text-zinc-700 mb-2">
                사이즈
                {selectedSize && (
                  <span className="font-normal text-zinc-500 ml-2">
                    {selectedSize}
                  </span>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                      selectedSize === s
                        ? "border-zinc-900 bg-zinc-900 text-white font-semibold"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-zinc-700 mb-2">수량</p>
            <div className="flex items-center gap-0 border border-zinc-200 rounded-lg w-fit overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-lg text-zinc-600 hover:bg-zinc-100 transition-colors"
              >
                −
              </button>
              <span className="w-12 h-10 flex items-center justify-center text-sm font-semibold text-zinc-900 border-l border-r border-zinc-200">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-lg text-zinc-600 hover:bg-zinc-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full bg-zinc-900 text-white py-4 rounded-xl text-base font-semibold hover:bg-zinc-700 transition-colors">
              장바구니에 담기
            </button>
            <button className="w-full bg-red-500 text-white py-4 rounded-xl text-base font-semibold hover:bg-red-600 transition-colors">
              바로 구매하기
            </button>
          </div>

          {/* Shipping badge */}
          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 bg-zinc-50 rounded-xl px-4 py-3">
            <span className="text-base">🚚</span>
            <span>무료배송</span>
            <span className="text-zinc-300">|</span>
            <span>2~3일 내 출고</span>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="border-b border-zinc-200 mb-8">
        <div className="flex gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3.5 text-sm font-semibold border-b-2 transition-all -mb-px ${
                activeTab === tab.key
                  ? "border-zinc-900 text-zinc-900"
                  : "border-transparent text-zinc-400 hover:text-zinc-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab: 상품 상세 */}
      {activeTab === "detail" && (
        <div className="flex flex-col items-center gap-0">
          {allImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`상품 상세 이미지 ${i + 1}`}
              className="w-full max-w-[860px] block"
            />
          ))}
        </div>
      )}

      {/* Tab: 리뷰 */}
      {activeTab === "review" && (
        <div>
          {productReviews.length === 0 ? (
            <div className="text-center py-20 text-zinc-400">
              <p className="text-4xl mb-4">🌟</p>
              <p className="text-base">아직 이 상품의 리뷰가 없습니다.</p>
              <p className="text-sm mt-1">구매 후 첫 리뷰를 남겨보세요!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {reviewsData.map((review) => (
                <Link
                  key={review.id}
                  to={review.href}
                  className="block border border-zinc-100 rounded-2xl p-5 hover:bg-zinc-50 transition-colors no-underline"
                >
                  <div className="flex items-start gap-4">
                    {review.reviewImages.length > 0 && (
                      <img
                        src={review.reviewImages[0]}
                        alt=""
                        className="w-[80px] h-[80px] object-cover rounded-xl shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1 gap-2">
                        <img
                          src={review.ratingImageUrl}
                          alt={`${review.rating}점`}
                          className="inline align-middle h-4"
                        />
                        <span className="text-xs text-zinc-400 shrink-0">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-zinc-900 mb-1">
                        {review.title}
                      </p>
                      <p className="text-sm text-zinc-600 line-clamp-2">
                        {review.description}
                      </p>
                      <p className="text-xs text-zinc-400 mt-2">
                        {review.author}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab: 배송·교환·환불 */}
      {activeTab === "delivery" && (
        <div className="max-w-[700px] flex flex-col gap-6">
          <div className="rounded-2xl border border-zinc-100 p-6">
            <h3 className="text-base font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <span>🚚</span> 배송 안내
            </h3>
            <ul className="text-sm text-zinc-600 flex flex-col gap-2 list-none p-0 m-0">
              <li>
                •{" "}
                {deliveryInfo ??
                  "제주/도서산간 제외 전국 무료배송 (2~3일 내 출고)"}
              </li>
              <li>• 오후 2시 이전 주문 시 당일 출고 (공휴일 제외)</li>
              <li>• 택배사: CJ대한통운</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-100 p-6">
            <h3 className="text-base font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <span>🔄</span> 교환·반품 안내
            </h3>
            <ul className="text-sm text-zinc-600 flex flex-col gap-2 list-none p-0 m-0">
              <li>• {exchangeInfo ?? "수령 후 7일 이내 교환/반품 가능"}</li>
              <li>• 단순 변심에 의한 반품 시 왕복 배송비 고객 부담</li>
              <li>• 상품 하자/오배송의 경우 100% 무료 교환·환불</li>
              <li>• 고객센터: 카카오채널 @엑슬리퍼 / 평일 09:00~18:00</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-100 p-6">
            <h3 className="text-base font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <span>⚠️</span> 교환·반품 불가 사유
            </h3>
            <ul className="text-sm text-zinc-600 flex flex-col gap-2 list-none p-0 m-0">
              <li>• 착용 흔적이 있거나 세탁된 상품</li>
              <li>• 택 제거 및 포장 훼손 상품</li>
              <li>• 구매 후 7일이 경과한 상품</li>
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};
