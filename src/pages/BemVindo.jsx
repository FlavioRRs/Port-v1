import { Typewriter } from "react-simple-typewriter";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { useOutletContext } from "react-router-dom";

export default function BemVindo() {
  const theme = useOutletContext();

  return (
    <section className="select-none mdmin:px-10 flex items-center justify-center mdmin:gap-24 mdmax:flex-col gap-20 h-screen">
      <div className=" mdmin:min-w-[430px] animate-appear">
        <p
          className={`text-2xl ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Salve ✌
        </p>
        <h1
          className={`mdmin:text-7xl text-6xl tnmax:text-4xl ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Eu sou Flavio,
        </h1>

        <span
          className={`mdmin:text-5xl text-4xl tnmax:text-3xl  ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <Typewriter
            words={["um estudante!", "web-developer!"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={70}
          />
        </span>
      </div>

      <div className="animate-[appear_1s_ease-out_0.4s_backwards]">
        <img
          src={theme === "dark" ? moon : sun}
          alt="Planeta terra!"
          className="mdmin:w-96 w-48 animate-swing"
        />
      </div>
    </section>
  );
}
