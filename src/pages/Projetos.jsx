import CardProjetos from "../components/CardProjetos";

export default function Projetos() {
  return (
    <section className=" overflow-auto select-none flex gap-10 flex-wrap justify-center items-center h-screen px-4 mdmin:py-[106px] mdmax:py-[80px] animate-appear">
      <CardProjetos
        src="https://live.staticflickr.com/65535/53037659163_dac9ee1f45_h.jpg"
        nome="TO-DO"
        git="https://github.com/FlavioRRs/to-do-v2"
        deploy="https://to-do-c613d.web.app/"
        tecnologias="React - FireBase - TailWindCSS"
      />
      <CardProjetos
        src="https://live.staticflickr.com/65535/52709587218_d0fa46fd7b_h.jpg"
        nome="Pesquise o clima atual"
        git="https://github.com/FlavioRRs/Clima"
        deploy="https://clima-o22x.vercel.app/"
        tecnologias="HTML - TailWindCSS - React - API"
      />
      <CardProjetos
        src="https://live.staticflickr.com/65535/52604147618_1308a675cc_h.jpg"
        nome="Pokedex"
        git="https://github.com/FlavioRRs/Pokedex"
        deploy="https://pokedex-flavio.vercel.app/"
        tecnologias="HTML - TailWindCSS - React - API"
      />
      <CardProjetos
        src="https://live.staticflickr.com/65535/52709512615_820292c843_h.jpg"
        nome="Calculadora INSS"
        git="https://github.com/FlavioRRs/calculadora-INSS"
        deploy="https://flaviorrs.github.io/calculadora-INSS/"
        tecnologias="HTML - CSS - JS"
      />
    </section>
  );
}
