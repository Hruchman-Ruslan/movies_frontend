"use client";

import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import Link, { LinkProps } from "next/link";

import { cn } from "@/utils/cn";

export interface NavItemProps extends LinkProps {
  children?: ReactNode;
  title?: string;
  icon?: ReactNode;
}

export default function NavItem({
  children,
  title,
  href,
  icon,
  ...props
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "flex items-center gap-x-5 text-xl font-medium transition-colors duration-200",
        isActive
          ? "text-red-600"
          : "text-white hover:text-red-600 focus:text-red-600",
      )}
    >
      {icon}
      {children || title}

      {isActive && (
        <span
          className={cn(
            "absolute right-0 h-7 w-[5px]",
            "rounded-tl-[10px] rounded-bl-[10px]",
            "bg-red-600",
          )}
        />
      )}
    </Link>
  );
}
