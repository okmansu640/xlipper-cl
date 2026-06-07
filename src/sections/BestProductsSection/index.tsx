import { ProductCard } from "@/components/ProductCard";
import productsData from "@/data/products.json";

export const BestProductsSection = () => {
  return (
    <section className="caret-transparent max-w-full outline-[3px] no-underline w-[1600px] mt-[100px] mx-auto md:mt-[150px]">
      <div className="box-border caret-transparent outline-[3px] no-underline px-[9.375px] md:px-8">
        <div className="caret-transparent outline-[3px] no-underline pb-6">
          <h2 className="caret-transparent text-zinc-900 text-lg font-semibold leading-[25.2px] outline-[3px] text-center no-underline md:text-2xl md:leading-[33.6px]">
            베스트 상품
            <span className="caret-transparent text-zinc-600 block text-sm font-light leading-[19.6px] outline-[3px] no-underline mt-1 md:text-base md:leading-[22.4px]">
              Xlipper의 베스트 아이템을 소개합니다.{" "}
            </span>
          </h2>
        </div>
        <ul className="caret-transparent gap-x-3 grid text-[0px] grid-cols-[repeat(2,1fr)] leading-[0px] outline-[3px] gap-y-6 text-left no-underline pl-0 md:grid-cols-[repeat(4,1fr)]">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              badgeClassName={product.badgeClassName}
              detailHref={product.detailHref}
              anchorName={`anchorBoxName_${product.id}`}
              imageUrl={product.imageUrl}
              productHref={product.productHref}
              productName={product.productName}
              featureText={product.featureText}
              consumerPrice={product.consumerPrice}
              salePrice={product.salePrice}
              discountRate={product.discountRate}
              reviewCount={product.reviewCount}
              globalIconUrl={(product as any).globalIconUrl}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
