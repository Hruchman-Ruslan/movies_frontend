import Link from "next/link";

import { cn } from "@/utils/cn";

export default function MainHeader() {
  const links = ["Developer", "Developer", "Developer"];

  return (
    <div>
      <ul className={cn("center gap-4 py-3.5")}>
        {links.map((text, index) => (
          <li key={index}>
            <Link
              href="#"
              className={cn(
                "text-white transition-colors duration-200",
                "hover:text-red-600 focus:text-red-600",
              )}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
