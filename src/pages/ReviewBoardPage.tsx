import { Link } from "react-router-dom";
import reviewsData from "@/data/reviews.json";

export const ReviewBoardPage = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
          PHOTO REVIEW
        </h1>
        <p className="text-zinc-500">
          엑슬리퍼를 사랑한 고객들의 솔직 리뷰입니다.
        </p>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reviewsData.map((review) => (
          <li key={review.id}>
            <Link to={review.href} className="block group">
              <div className="rounded-xl overflow-hidden bg-zinc-100 aspect-square mb-2">
                {review.reviewImages.length > 0 ? (
                  <img
                    src={review.reviewImages[0]}
                    alt={review.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <img
                    src={review.productImageUrl}
                    alt={review.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <p className="text-sm font-semibold text-zinc-900 line-clamp-1 mb-1">
                {review.title}
              </p>
              <p className="text-xs text-zinc-500 line-clamp-2 mb-1">
                {review.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">{review.author}</span>
                <span className="text-xs text-zinc-400">{review.date}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
