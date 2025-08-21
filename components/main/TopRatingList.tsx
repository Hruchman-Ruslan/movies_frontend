import Link from "next/link";
import { StaticImageData } from "next/image";

import { cn } from "@/utils/cn";

export interface TopRatingItem {
  title: string;
  image: StaticImageData;
}

export interface TopRatingProps {
  topRatingData: TopRatingItem[];
}

export default function TopRatingList({ topRatingData }: TopRatingProps) {
  return (
    <ul
      className={cn("mx-auto grid w-full max-w-6xl gap-4")}
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {topRatingData.map((item, index) => (
        <li key={index}>
          <Link
            href="#"
            className={cn(
              "flex h-40 w-64 items-end justify-center bg-cover bg-center p-2",
            )}
            style={{ backgroundImage: `url(${item.image.src})` }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
