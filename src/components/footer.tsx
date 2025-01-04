import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8 flex justify-center">
      <a
        href="https://github.com/ldgni/vite-starter"
        target="_blank"
        aria-label="GitHub repository">
        <Github className="opacity-50 transition-opacity duration-300 hover:opacity-100" />
      </a>
    </footer>
  );
}
