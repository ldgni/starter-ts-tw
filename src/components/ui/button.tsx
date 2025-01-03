export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded bg-slate-500 px-4 py-2 text-white opacity-75 transition-opacity duration-300 hover:opacity-100">
      {children}
    </button>
  );
}
