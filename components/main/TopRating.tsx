import Pagination from "@/components/Pagination";
import Title from "@/components/Title";

import { cn } from "@/utils/cn";

export default function TopRating() {
  return (
    <div className={cn("mb-7 flex w-full items-center justify-between")}>
      <Title level={"h2"} className={cn("mb-0 font-title text-primary-text")}>
        Top Rated Movies
      </Title>
      <Pagination />
    </div>
  );
}
