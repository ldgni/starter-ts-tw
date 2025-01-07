import { NavLink } from "react-router";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold sm:text-2xl">Vite Starter</h1>
        <nav>
          <ul className="flex items-center justify-between gap-4 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? "underline decoration-dark underline-offset-4 dark:decoration-light"
                      : "opacity-75 transition-opacity duration-300 hover:opacity-100"
                  }>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
