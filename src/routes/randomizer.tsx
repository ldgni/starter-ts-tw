import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

export default function Randomizer() {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["randomImage"],
    queryFn: () =>
      fetch("https://picsum.photos/200/300").then((res) => res.url),
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-[300px] w-[200px] items-center justify-center">
        {isFetching ? (
          <Loader size={64} />
        ) : error ? (
          <span>Error loading image</span>
        ) : (
          <img
            src={data}
            alt="Random"
            className="rounded-sm border-2 border-black"
          />
        )}
      </div>
      <button
        onClick={() => refetch()}
        className="rounded bg-slate-500 px-4 py-2 text-white opacity-75 transition-opacity duration-300 hover:opacity-100">
        Randomize
      </button>
    </div>
  );
}
