import Image from "next/image";

export default function Logo() {
  return (
    <div className="mb-8 flex justify-center gap-2.5 text-xl">
      <Image
        src="/default.webp"
        alt="logo"
        width={24}
        height={24}
        sizes="24px"
        priority
      />
      <h1 className="#FFF">My Demo Project</h1>
    </div>
  );
}
