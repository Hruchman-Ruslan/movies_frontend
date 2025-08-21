import Left from "@/assets/icons/left.svg";
import Right from "@/assets/icons/right.svg";

import { cn } from "@/utils/cn";

export default function Pagination() {
  return (
    <div className={cn("center gap-5")}>
      <Left />
      <Right />
    </div>
  );
}
