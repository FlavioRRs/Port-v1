import html from "../assets/html.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import REACT from "../assets/REACT.svg";
import type from "../assets/type.svg";
import Tailwind from "../assets/Tailwind.svg";
import CardConhecimento from "../components/CardConhecimento";

export default function Conhecimentos() {
  return (
    <section className="select-none flex flex-col items-center gap-5 pb-10 mdmin:pt-[106px] mdmax:pt-[80px] animate-appear">
      <CardConhecimento
        content="HTML 5"
        src={html}
        pb_color="#E44D26"
        pb_fill={86}
      />
      <CardConhecimento
        content="CSS 3"
        src={CSS}
        pb_color="#264DE4"
        pb_fill={85}
      />
      <CardConhecimento
        content="JavaScript"
        src={JS}
        pb_color="#F7DF1E"
        pb_fill={85}
      />
      <CardConhecimento
        content="REACT"
        src={REACT}
        pb_color="#00D8FF"
        pb_fill={83}
      />
      <CardConhecimento
        content="TailWind"
        src={Tailwind}
        pb_color="#44A8B3"
        pb_fill={80}
      />
      <CardConhecimento
        content="TypeScript"
        src={type}
        pb_color="#007ACC"
        pb_fill={72}
      />
    </section>
  );
}
