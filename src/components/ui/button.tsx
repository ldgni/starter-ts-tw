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
      className="rounded bg-dark px-4 py-2 text-light opacity-75 transition-opacity duration-300 hover:opacity-100 dark:bg-light dark:text-dark">
      {children}
    </button>
  );
}
