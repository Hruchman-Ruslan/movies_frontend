import Image from "next/image";

import { cn } from "@/utils/cn";

export default function Logo() {
  return (
    <div className={cn("center mb-8 gap-2.5")}>
      <Image
        src="/default.webp"
        alt="logo"
        width={24}
        height={24}
        sizes="24px"
        priority
      />
      <h1 className={cn("font-title text-secondary-text")}>My Demo</h1>
    </div>
  );
}
