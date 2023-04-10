import { useOutletContext } from "react-router-dom";

export default function ProgressBar({ pb_color, pb_fill }) {
  //tive que usar utilizar este metodo por conta de um bug no TW
  const fill = {
    width: pb_fill + "%",
    height: "100%",
    backgroundColor: pb_color,
    borderRadius: "inherit",
  };

  const theme = useOutletContext();
  return (
    <div
      className={
        theme === "dark"
          ? "h-[18px] w-full bg-[#444] rounded-xl"
          : "h-[18px] w-full bg-[#ddd] rounded-xl"
      }
    >
      <div style={fill}></div>
    </div>
  );
}
