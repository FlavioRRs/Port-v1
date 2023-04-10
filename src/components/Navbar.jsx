import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavBar from "./MobileNavbar";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ theme }) {
  const [active, setActive] = useState(false);

  function showMenu() {
    setActive(!active);
  }

  return (
    <header
      className={`select-none z-10 fixed top-0 w-full flex justify-between p-4 items-center ${
        theme === "dark" ? "text-white bg-black/40" : "text-[black] bg-white/80"
      }`}
    >
      <div>
        <p
          className={`font-Astloch text-5xl ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          F
        </p>
      </div>

      <nav>
        <div className="mdmin:hidden">
          <MenuIcon
            onClick={showMenu}
            className={`scale-150 ${
              theme === "dark" ? "text-white" : "text-[black]"
            }`}
          />
        </div>

        <ul className="hidden mdmin:flex gap-8 p-6">
          <li>
            <Link
              className={`after:transition-[width] after:content-[''] after:block after:w-0 after:h-[2px] hover:after:w-full ${
                theme === "dark"
                  ? "after:bg-white"
                  : "after:bg-black text-black"
              }`}
              to="/"
            >
              Bem-vindo
            </Link>
          </li>
          <li>
            <Link
              className={`after:transition-[width] after:content-[''] after:block after:w-0 after:h-[2px] hover:after:w-full ${
                theme === "dark"
                  ? "after:bg-white"
                  : "after:bg-black text-black"
              }`}
              to="Sobre"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              className={`after:transition-[width] after:content-[''] after:block after:w-0 after:h-[2px] hover:after:w-full ${
                theme === "dark"
                  ? "after:bg-white"
                  : "after:bg-black text-black"
              }`}
              to="Conhecimentos"
            >
              Conhecimentos
            </Link>
          </li>
          <li>
            <Link
              className={`after:transition-[width] after:content-[''] after:block after:w-0 after:h-[2px] hover:after:w-full ${
                theme === "dark"
                  ? "after:bg-white"
                  : "after:bg-black text-black"
              }`}
              to="Projetos"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              className={`after:transition-[width] after:content-[''] after:block after:w-0 after:h-[2px] hover:after:w-full ${
                theme === "dark"
                  ? "after:bg-white"
                  : "after:bg-black text-black"
              }`}
              to="Contato"
            >
              Contato
            </Link>
          </li>
        </ul>

        <MobileNavBar showMenu={showMenu} active={active} theme={theme} />
      </nav>
    </header>
  );
}
