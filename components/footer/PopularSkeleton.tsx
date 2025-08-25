export default function PopularSkeleton() {
  return (
    <div className="mb-4 flex min-h-[280px] flex-col gap-4 px-4">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex h-28 items-center gap-2">
          <div className="h-[90px] w-[64px] animate-pulse rounded bg-gray-300" />
          <div className="flex flex-col gap-2">
            <div className="h-4 w-32 animate-pulse rounded bg-gray-300" />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300" />
            <div className="h-3 w-20 animate-pulse rounded bg-gray-300" />
          </div>
        </div>
      ))}

      <div className="h-10 w-32 animate-pulse rounded-xl bg-gray-300" />
    </div>
  );
}
