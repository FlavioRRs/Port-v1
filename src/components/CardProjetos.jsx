import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useOutletContext } from "react-router-dom";

export default function CardProjetos({ nome, src, git, deploy }) {
  const theme = useOutletContext();
  return (
    <div
      className={` rounded-lg p-4 flex flex-col items-center w-[400px] gap-4 ${
        theme === "dark"
          ? "bg-black shadow shadow-[0px_0px_25px_-15px_white]"
          : "bg-white shadow-2xl"
      }`}
    >
      <div>
        <p
          className={`text-xl font-bold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {nome}
        </p>
      </div>
      <div>
        <img src={src} alt="imagem do projeto" className="" />
      </div>
      <div>
        <p
          className={`font-medium ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          HTML - CSS - JS - REACT
        </p>
      </div>
      <div className="flex gap-16">
        <a
          href={deploy}
          target="_blank "
          className="animate-pulse hover:animate-none"
        >
          <ArrowForwardIcon
            className={`scale-150 hover:transition-all hover:translate-y-[-2px] ${
              theme === "dark" ? "text-white" : "text-black "
            }`}
          />
        </a>
        <a
          href={git}
          target="_blank "
          className="animate-pulse hover:animate-none"
        >
          <GitHubIcon
            className={`scale-150 hover:transition-all hover:translate-y-[-2px] ${
              theme === "dark" ? "text-white" : "text-black "
            }`}
          />
        </a>
      </div>
    </div>
  );
}
