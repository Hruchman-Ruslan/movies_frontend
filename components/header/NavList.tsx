import NavItem, { NavItemProps } from "./NavItem";

import { cn } from "@/utils/cn";

interface NavListProps {
  data: NavItemProps[];
}

export default function NavList({ data }: NavListProps) {
  return (
    <ul className={cn("mb-4 flex flex-col gap-y-4 pl-6")}>
      {data.map(({ href, children, ...props }) => (
        <NavItem key={href.toString()} href={href} {...props}>
          {children}
        </NavItem>
      ))}
    </ul>
  );
}
