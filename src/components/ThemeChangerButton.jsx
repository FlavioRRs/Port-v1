import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeChanger({ changeTheme, theme }) {
  return (
    <button
      onClick={changeTheme}
      className={`outline-none mdmax:bottom-4 left-4 mdmin:top-28 fixed border-2 rounded-3xl py-1 px-2 ${
        theme === "dark" ? "border-[white] bg-black" : "border-[black] bg-white"
      }`}
    >
      <div
        className={`transition-all absolute rounded-xl top-[5px] z-[1] w-6 h-6 ${
          theme === "dark" ? "left-[5px] bg-white" : "left-[36px] bg-black"
        }`}
      ></div>
      <DarkModeIcon
        className={`scale-90 translate-y-[-1px] translate-x-[-3px] ${
          theme === "dark" ? "text-[white]" : "text-[black]"
        }`}
      />
      <LightModeIcon
        className={`scale-90 translate-y-[-1px] translate-x-[3px] relative ${
          theme === "dark" ? "text-[white]" : "text-[black]"
        }`}
      />
    </button>
  );
}
