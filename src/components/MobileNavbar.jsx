import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

export default function MobileNavBar({ showMenu, active, theme }) {
  return (
    <ul
      className={
        active
          ? "flex flex-col items-center justify-center fixed inset-0 left-1/4 gap-8 p-8 bg-black/10 backdrop-blur-lg mdmin:hidden"
          : "hidden"
      }
    >
      <CloseIcon
        onClick={showMenu}
        className={`cursor-pointer ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      />
      <li>
        <Link
          className={theme === "dark" ? "text-white" : "text-black"}
          onClick={showMenu}
          to="/"
        >
          Bem-vindo
        </Link>
      </li>
      <li>
        <Link
          className={theme === "dark" ? "text-white" : "text-black"}
          onClick={showMenu}
          to="Sobre"
        >
          Sobre
        </Link>
      </li>
      <li>
        <Link
          className={theme === "dark" ? "text-white" : "text-black"}
          onClick={showMenu}
          to="Conhecimentos"
        >
          Conhecimentos
        </Link>
      </li>
      <li>
        <Link
          className={theme === "dark" ? "text-white" : "text-black"}
          onClick={showMenu}
          to="Projetos"
        >
          Projetos
        </Link>
      </li>
      <li>
        <Link
          className={theme === "dark" ? "text-white" : "text-black"}
          onClick={showMenu}
          to="Contato"
        >
          Contato
        </Link>
      </li>
    </ul>
  );
}
