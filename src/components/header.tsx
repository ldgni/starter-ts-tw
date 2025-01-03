import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold sm:text-2xl">Vite Starter</h1>
        <nav>
          <ul className="flex items-center justify-between gap-4 sm:gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "" : "text-gray-500")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/randomizer"
                className={({ isActive }) => (isActive ? "" : "text-gray-500")}>
                Randomizer
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
