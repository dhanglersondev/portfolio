import perfil from "../../assets/images/perfil.png";
import { useRef, useEffect, useState } from "react";

export function About() {
  const infoRef = useRef<HTMLDivElement | null>(null);
  const [, setSideCardHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Função para atualizar a altura (somente para telas md+)
    const updateHeight = () => {
      if (window.innerWidth >= 768 && infoRef.current) {
        setSideCardHeight(infoRef.current.offsetHeight);
      } else {
        setSideCardHeight(undefined);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <main
      className="flex justify-center items-center w-full bg-black px-0 sm:px-4 py-6 sm:py-8 md:py-12"
      style={{ minHeight: "100vh" }}
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 sm:gap-6 w-full max-w-4xl items-center justify-center">
        {/* Card com perfil - melhora responsividade para telas pequenas */}
        <div
          className={`
            flex flex-col items-center justify-center rounded-2xl shadow-lg
            w-full md:w-auto 
            px-4 py-6 
            md:min-w-[320px] md:max-w-sm md:px-8 md:py-10
            sm:min-w-[280px]
            max-w-full
            min-w-0
            relative
          `}
          style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
        >
   
          {/* Espaço superior imagem */}
          <div className="flex flex-col items-center justify-center w-full min-h-0">
            <div className="w-full flex flex-col justify-center items-center">
              <div
                className="flex items-center justify-center w-[96px] h-[96px] sm:w-[128px] sm:h-[128px] md:w-full md:h-auto"
                style={{
                  aspectRatio: "1/1",
                  margin: 0,
                  padding: 0,
                }}
              >
                <img
                  src={perfil}
                  alt="Foto de perfil"
                  className={`
                    w-[90px] h-[90px]
                    sm:w-[114px] sm:h-[114px]
                    md:w-full md:h-full
                    max-w-full max-h-full
                    object-cover rounded-md
                    transition-all
                    shadow-md
                  `}
                  style={{
                    // para telas pequenas as bordas arredondadas são maiores e ocupa menos espaço
                    borderRadius: "1rem",
                  }}
                />
              </div>
            </div>
          </div>
          {/* Conteúdo centralizado */}
          <div className="flex flex-col items-center w-full mt-4 md:mt-4">
            <h1
              className="
                text-base sm:text-lg md:text-xl 
                font-bold text-white 
                mb-1 sm:mb-1 md:mb-2 
                text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.17)]
                transition-all
              "
              style={{
                marginTop: 0,
                marginBottom: "0.25rem"
              }}
            >
              DHANGLERSON BARRAL
            </h1>
            <div className="w-full flex flex-col gap-0.5 text-center text-white font-semibold text-xs sm:text-sm md:text-base">
              <span className="block">Desenvolvedor Web</span>
              <span className="block">Implantação de Sistemas</span>
              <span className="block">Consultoria</span>
            </div>
          </div>
        </div>
        {/* Informações */}
        <div
          className="flex-1 flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center w-full"
          ref={infoRef}
        >
          {/* Título "Sobre Mim" */}
          <header className="w-full flex justify-center mb-1 sm:mb-2 md:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white mb-1 md:mb-2 tracking-tight text-center">
              Sobre <span className="text-cyan-400">Mim</span>
            </h2>
          </header>
          {/* Qualificações acadêmicas */}
          <section className="w-full flex flex-col items-center">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cyan-400 mb-1 sm:mb-2 md:mb-3">
              Qualificações Acadêmicas
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full items-center">
              <li className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="text-sm sm:text-base md:text-lg text-cyan-300 font-bold text-center">
                  Análise e Desenvolvimento de Sistemas
                </div>
                <div className="text-white text-xs sm:text-sm md:text-base text-center">
                  Instituto: <span className="font-medium">Anhanguera Educacional</span>
                  <br />
                  Período: 2022 – 2025
                  <br />
                  Status: <span className="text-cyan-300">Em andamento</span>
                </div>
              </li>
              <li className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="text-sm sm:text-base md:text-lg text-cyan-300 font-bold text-center">
                  Fullstack Pro
                </div>
                <div className="text-white text-xs sm:text-sm md:text-base text-center">
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
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cyan-400 mb-1 sm:mb-2 md:mb-3 text-center">
              Experiência Profissional
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full items-center">
              <li className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="text-sm sm:text-base md:text-lg text-cyan-300 font-bold text-center">
                  Estágio em Desenvolvimento Web
                </div>
                <div className="text-white text-xs sm:text-sm md:text-base text-center">
                  Empresa: <span className="font-medium">Conselho Regional de Farmácia</span>
                  <br />
                  Período: Jan/2024 – Jan/2025
                </div>
              </li>
              <li className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="text-sm sm:text-base md:text-lg text-cyan-300 font-bold text-center">
                  Implantação e Suporte Técnico
                </div>
                <div className="text-white text-xs sm:text-sm md:text-base text-center">
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