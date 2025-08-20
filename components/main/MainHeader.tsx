import Link from "next/link";

export default function MainHeader() {
  return (
    <div>
      <ul className="flex items-center justify-center gap-4 py-2.5">
        <li>
          <Link href={"#"}>Developer</Link>
        </li>
        <li>
          <Link href={"#"}>Developer</Link>
        </li>
        <li>
          <Link href={"#"}>Developer</Link>
        </li>
      </ul>
    </div>
  );
}
