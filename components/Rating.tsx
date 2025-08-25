import { cn } from "@/utils/cn";

import Star from "@/assets/icons/star.svg";
import NoStar from "@/assets/icons/no-star.svg";
import HalfStar from "@/assets/icons/half_star.svg";

interface RatingProps {
  value: number;
  max?: number;
}

export default function Rating({ value, max = 5 }: RatingProps) {
  const normalized = (value / 10) * max;

  return (
    <div className={cn("flex gap-1")}>
      {Array.from({ length: max }, (_, i) => {
        const starIndex = i + 1;

        if (normalized >= starIndex) {
          return <Star key={i} />;
        } else if (normalized >= starIndex - 0.5) {
          return <HalfStar key={i} />;
        } else {
          return <NoStar key={i} />;
        }
      })}
    </div>
  );
}
