import { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  textColor?: string;
}

export default function Button({
  type = "button",
  bgColor = "bg-red-100",
  textColor = "text-black",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={cn(
        "mb-6 h-13 w-full rounded text-sm font-semibold",
        bgColor,
        textColor,
      )}
    >
      {children}
    </button>
  );
}
