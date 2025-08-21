import { ElementType, HtmlHTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

export interface TitleProps extends HtmlHTMLAttributes<HTMLHeadElement> {
  level: ElementType;
  children: ReactNode;
}

export default function Title({
  level: Tag = "h1",
  children,
  ...props
}: TitleProps) {
  return (
    <Tag className={cn("mb-6 font-title text-primary-text")} {...props}>
      {children}
    </Tag>
  );
}
