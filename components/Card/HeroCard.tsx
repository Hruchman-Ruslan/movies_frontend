import Image from "next/image";

import { BackdropSize, MovieProps } from "@/types/movie";

import { getSizes } from "@/utils/getSizes";

export default function HeroCard({
  backdrop,
  backdropSize,
  title,
}: MovieProps & { backdropSize: BackdropSize }) {
  const backdropUrl = backdrop || "/default.webp";

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
      <Image
        src={backdropUrl}
        alt={title || "default image"}
        fill
        priority
        className="rounded object-cover"
        sizes={getSizes(backdropSize)}
      />
    </div>
  );
}
