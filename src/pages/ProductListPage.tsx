import { Link } from "react-router-dom";
import productsData from "@/data/products.json";

export const ProductListPage = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
          전체 상품
        </h1>
        <p className="text-zinc-500">엑슬리퍼의 모든 제품을 만나보세요.</p>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productsData.map((product) => (
          <li key={product.id}>
            <Link to={product.detailHref} className="block group">
              <div className="rounded-xl overflow-hidden bg-zinc-100 aspect-square mb-3">
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-zinc-500 mb-1 line-clamp-1">
                {product.featureText}
              </p>
              <p className="text-sm font-semibold text-zinc-900 mb-1 line-clamp-2">
                {product.productName}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-zinc-900">
                  {product.salePrice}
                </span>
                {product.discountRate !== "0%" && (
                  <span className="text-xs text-red-500 font-bold">
                    {product.discountRate}
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-400 line-through">
                {product.consumerPrice}
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                리뷰 {product.reviewCount}개
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
