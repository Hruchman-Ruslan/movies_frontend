import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface ChuckNorrisButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "showMore" | "svg" | "watch now" | "add";
}

export default function ChuckNorrisButton({
  children,
  className,
  onClick,
  disabled,
  variant,
  ...props
}: ChuckNorrisButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        variant === "showMore" &&
          "h-14 w-full rounded-tr-sm bg-red-100 text-base font-bold text-black",
        variant === "watch now" &&
          "h-10 w-full rounded-lg bg-red-600/70 text-sm font-semibold text-white",
        variant === "svg" &&
          "flex items-center justify-center rounded-full bg-transparent",
        variant === "add" &&
          "h-10 w-11 rounded-lg bg-red-100/90 text-2xl text-black",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
