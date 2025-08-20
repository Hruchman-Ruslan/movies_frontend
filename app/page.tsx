import MainHeader from "@/components/main/MainHeader";
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <div className={cn("flex h-screen w-full items-start justify-start pt-5")}>
      <MainHeader />
    </div>
  );
}
