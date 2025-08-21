import { cn } from "@/utils/cn";

export default function Add() {
  return (
    <button
      className={cn(
        "flex h-13 w-16 cursor-pointer items-center justify-center rounded-lg bg-red-100/90 text-2xl text-black",
      )}
    >
      +
    </button>
  );
}
