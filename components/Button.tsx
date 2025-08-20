import { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={cn(
        "mb-6 h-13 w-full cursor-pointer rounded bg-red-100 text-base font-bold text-black",
        "flex items-center justify-center transition-colors duration-200",
        "hover:bg-red-200 focus:ring-2 focus:ring-red-300",
      )}
    >
      {children}
    </button>
  );
}
