import { cn } from "@/utils/cn";

import Pagination from "@/components/Pagination";
import Title from "@/components/Title";

export default function NowPlaying() {
  return (
    <div className={cn("mb-7 flex w-full items-center justify-between")}>
      <Title level={"h2"} className={cn("mb-0 font-title text-primary-text")}>
        Now Playing
      </Title>
      <Pagination />
    </div>
  );
}
