import perfil from "../../assets/images/perfil.png";

export function About() {
  return (
    <main
      className="flex justify-center items-center w-full bg-black px-4 py-8 md:py-12"
      style={{ minHeight: "100vh" }}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-3xl items-center justify-center">
        {/* Card com perfil */}
        <div className="flex flex-col items-center rounded-2xl shadow-lg px-5 py-8 md:px-8 md:py-10 md:min-w-[320px] max-w-sm w-full relative bg-[#01b6fd10]">
          {/* Espaço superior */}
          <div className="h-4 md:h-6" /> {/* Espaço no topo */}
          <div className="w-28 h-28 md:w-56 md:h-74 lg:w-96 lg:h-96 flex items-center justify-center mb-4 md:mb-0">
            <img
              src={perfil}
              alt="Foto de perfil"
              className="w-28 h-28 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover rounded-md"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <h1 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.17)]">
            DHANGLERSON BARRAL
          </h1>
          <div className="w-full flex flex-col gap-0.5 text-center text-white font-semibold text-base">
            <span className="block">Desenvolvedor Web</span>
            <span className="block">Implantação de Sistemas</span>
            <span className="block">Consultoria</span>
          </div>
          {/* Espaço inferior igual ao espaço superior */}
          <div className="h-4 md:h-6" /> {/* Espaço embaixo */}
        </div>
        {/* Informações */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 justify-center items-center">
          {/* Título "Sobre Mim" */}
          <header className="w-full flex justify-center mb-2 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-1 md:mb-2 tracking-tight text-center">
              Sobre <span className="text-cyan-400">Mim</span>
            </h2>
          </header>
          {/* Qualificações acadêmicas */}
          <section className="w-full flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2 md:mb-3">
              Qualificações Acadêmicas
            </h3>
            <ul className="flex flex-col gap-3 md:gap-4 w-full items-center">
              <li className="w-full max-w-md">
                <div className="text-base md:text-lg text-cyan-300 font-bold text-center">
                  Análise e Desenvolvimento de Sistemas
                </div>
                <div className="text-white text-sm md:text-base text-center">
                  Instituto: <span className="font-medium">Anhanguera Educacional</span>
                  <br />
                  Período: 2022 – 2025
                  <br />
                  Status: <span className="text-cyan-300">Em andamento</span>
                </div>
              </li>
              <li className="w-full max-w-md">
                <div className="text-base md:text-lg text-cyan-300 font-bold text-center">
                  Fullstack Pro
                </div>
                <div className="text-white text-sm md:text-base text-center">
                  Instituto: <span className="font-medium">Sujeito Programador</span>
                  <br />
                  Período: 2024 – Atual
                  <br />
                  Status: <span className="text-cyan-300">Cursando</span>
                </div>
              </li>
            </ul>
          </section>
          {/* Experiência Profissional */}
          <section className="w-full flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2 md:mb-3 text-center">
              Experiência Profissional
            </h3>
            <ul className="flex flex-col gap-3 md:gap-4 w-full items-center">
              <li className="w-full max-w-md">
                <div className="text-base md:text-lg text-cyan-300 font-bold text-center">
                  Estágio em Desenvolvimento Web
                </div>
                <div className="text-white text-sm md:text-base text-center">
                  Empresa: <span className="font-medium">Conselho Regional de Farmácia</span>
                  <br />
                  Período: Jan/2024 – Jan/2025
                </div>
              </li>
              <li className="w-full max-w-md">
                <div className="text-base md:text-lg text-cyan-300 font-bold text-center">
                  Implantação e Suporte Técnico
                </div>
                <div className="text-white text-sm md:text-base text-center">
                  Empresa: <span className="font-medium">HLH Serviços e Tecnologia</span>
                  <br />
                  Período: Mai/2025 – Atualmente
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}