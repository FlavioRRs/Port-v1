import { useOutletContext } from "react-router-dom";

export default function Sobre() {
  const theme = useOutletContext();

  return (
    <section className="select-none flex justify-center items-center h-screen px-4 animate-appear">
      <div
        className={
          theme === "dark"
            ? "bg-black/80 border-4 border-white rounded-3xl text-white"
            : "bg-white/80 border-4 border-black rounded-3xl text-black"
        }
      >
        <p className="max-w-[800px] leading-4 py-6 px-8 text-sm font-bold mdmin:text-2xl">
          Me chamo Flavio Ribeiro, graduando no curso de Ciência da Computação
          pela UNIFESO e desenvolvedor web com foco atual em Front-end.
          <br /> No momento estou trabalhando com projetos dentro da própria
          faculdade e adquirindo experiência. <br />
          Hoje, na área de desenvolvimento, vivo o aprendizado contínuo,
          estudando as tecnologias mais atuais e me mantenho 100% atualizado.
          <br /> Busco oportunidades no mercado como dev e, em um futuro
          próximo, viso me tornar um desenvolvedor Full Stack.
        </p>
      </div>
    </section>
  );
}
