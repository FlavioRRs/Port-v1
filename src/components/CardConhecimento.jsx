import { useOutletContext } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function CardConhecimento({
  content,
  src,
  pb_color,
  pb_fill,
  animate,
}) {
  const theme = useOutletContext();

  return (
    <div
      className={`animate-[${animate}] rounded-xl p-10 flex items-center justify-between w-[80%] smmax:flex-col smmax:gap-4${
        theme === "dark"
          ? " text-white bg-black/60 border-4 border-white"
          : " text-black bg-white/60 border-4 border-black/70"
      }`}
    >
      <div>
        <img src={src} alt="ícone da tecnologia!" className="w-28" />
      </div>
      <div>
        <p className="text-3xl font-bold tnmax:text-2xl">{content}</p>
      </div>
      <div className="w-48 flex flex-col items-center gap-6">
        <p className="text-3xl font-bold tnmax:text-2xl">{pb_fill}%</p>
        <ProgressBar pb_color={pb_color} pb_fill={pb_fill} />
      </div>
    </div>
  );
}
