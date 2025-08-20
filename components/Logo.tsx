import Image from "next/image";

import { cn } from "@/utils/cn";

export default function Logo() {
  return (
    <div
      className={cn("mb-8 flex items-center justify-center gap-2.5 text-xl")}
    >
      <Image
        src="/default.webp"
        alt="logo"
        width={24}
        height={24}
        sizes="24px"
        priority
      />
      <h1 className={cn("font-bold text-white")}>My Demo Project</h1>
    </div>
  );
}
