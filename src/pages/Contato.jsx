import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import handshakew from "../assets/handshake-white.svg";
import handshaked from "../assets/handshake-dark.svg";
import { useOutletContext } from "react-router-dom";

export default function Contato() {
  const theme = useOutletContext();
  return (
    <section className="tnmax:scale-[90%] select-none flex flex-col h-screen gap-5 justify-center items-center animate-appear">
      <img
        src={theme === "dark" ? handshakew : handshaked}
        className="w-28 animate-swing"
      />

      <p
        className={`font-bold mb-2 text-3xl ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Vamos conversar!
      </p>

      <a
        title="mandar e-mail"
        href="mailto:flavioribeirorangel123@gmail.com"
        className={`flex gap-1 items-center font-bold duration-300 transition-colors py-2 px-4 rounded-xl ${
          theme === "dark"
            ? "hover:bg-white hover:text-black text-white"
            : "hover:bg-black hover:text-white text-black"
        }`}
      >
        <EmailIcon className="tnmin:scale-100 scale-75" />
        <p>FlavioRibeiroRangel123@gmail.com</p>
      </a>

      <a
        href="https://api.whatsapp.com/send/?phone=5521995855311&text=Ola%2C+vim+do+seu+portif%C3%B3lio%21&type=phone_number&app_absent=0"
        className={`flex gap-1 items-center font-bold duration-300 transition-colors py-2 px-4 rounded-xl ${
          theme === "dark"
            ? "hover:bg-white hover:text-black text-white"
            : "hover:bg-black hover:text-white text-black"
        }`}
        target="_blank"
      >
        <PhoneAndroidIcon className="tnmin:scale-100 scale-75" />
        <p>+55 21 99585-5311</p>
      </a>
    </section>
  );
}
