import { ButtonHTMLAttributes, ReactNode } from "react";

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
      className="mb-6 h-13 w-full cursor-pointer justify-start rounded bg-red-100 text-base font-bold text-black"
      {...props}
    >
      {children}
    </button>
  );
}
