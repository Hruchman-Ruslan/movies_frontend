import { StaticImageData } from "next/image";

import Link from "next/link";

import Button from "@/components/Button";
import Add from "@/components/Add";

import { cn } from "@/utils/cn";

export interface NowPlayingItem {
  title: string;
  image: StaticImageData;
}

export interface NowPlayingProps {
  nowPlayingData: NowPlayingItem[];
}

export default function NowPlayingList({ nowPlayingData }: NowPlayingProps) {
  return (
    <ul
      className={cn("mb-6 grid w-full gap-4")}
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      }}
    >
      {nowPlayingData.map((item, index) => (
        <li key={index} className={cn("h-72 w-full")}>
          <Link
            href="#"
            className={cn(
              "flex h-full flex-col justify-between rounded-lg bg-cover bg-center p-4 text-xl font-bold",
            )}
            style={{ backgroundImage: `url(${item.image.src})` }}
          >
            <div className={cn("ml-auto")}>
              <Add />
            </div>
            <div>
              <Button bgColor="bg-red-600/70">Watch Now</Button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
