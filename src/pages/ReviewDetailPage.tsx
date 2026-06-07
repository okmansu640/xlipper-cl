import { useParams, Link } from "react-router-dom";
import reviewsData from "@/data/reviews.json";

export const ReviewDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const review = reviewsData.find((r) => String(r.id) === id);

  if (!review) {
    return (
      <main className="max-w-[800px] mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-zinc-900 mb-4">
          리뷰를 찾을 수 없습니다
        </h1>
        <Link to="/board/review" className="text-zinc-600 hover:underline">
          리뷰 목록으로 →
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-[800px] mx-auto px-4 py-12">
      <div className="mb-4">
        <Link
          to="/board/review"
          className="text-zinc-500 text-sm hover:underline"
        >
          ← 리뷰 목록
        </Link>
      </div>
      <div className="border border-zinc-200 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-zinc-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-zinc-500">{review.author}</span>
            <span className="text-sm text-zinc-400">{review.date}</span>
          </div>
          <img
            src={review.ratingImageUrl}
            alt={`${review.rating}점`}
            className="mb-3"
          />
          <h1 className="text-lg font-bold text-zinc-900 mb-2">
            {review.title}
          </h1>
          <p className="text-zinc-600 leading-relaxed whitespace-pre-line">
            {review.description}
          </p>
        </div>
        {review.reviewImages.length > 0 && (
          <div className="p-6 flex gap-3 flex-wrap border-b border-zinc-100">
            {review.reviewImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`리뷰 이미지 ${i + 1}`}
                className="w-40 h-40 object-cover rounded-xl"
              />
            ))}
          </div>
        )}
        <div className="p-6 flex items-center gap-3">
          <img
            src={review.productImageUrl}
            alt="상품"
            className="w-14 h-14 rounded-full object-cover"
          />
          <p className="text-sm text-zinc-700">{review.productName}</p>
        </div>
      </div>
    </main>
  );
};
