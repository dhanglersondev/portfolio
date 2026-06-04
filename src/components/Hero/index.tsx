import perfil from "../../assets/images/perfil.png";

export function Hero() {
  return (
    <main className="flex w-full h-screen items-center justify-center">
      {/* Aumentando gap para espaçar mais as divs internas */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-3xl w-full">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow">
            Dhanglerson Barral
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-300 font-semibold mb-4">
            Desenvolvedor Web
          </h2>
          <p className="text-base md:text-lg text-zinc-300 mb-6">
            Sou um desenvolvedor web apaixonado por criar experiências digitais impactantes e escaláveis. Tenho experiência com as principais tecnologias do mercado como <span className="text-blue-300 font-semibold">Node.js</span>, <span className="text-blue-300 font-semibold">React</span> e <span className="text-blue-300 font-semibold">TypeScript</span>, focando em performance, qualidade de código e usabilidade. Utilizo <span className="text-blue-300 font-semibold">Tailwind CSS</span> para acelerar o desenvolvimento de interfaces modernas e responsivas.
          </p>
          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            {/* Instagram */}
            <a
              href="#"
              className="flex items-center justify-center group transition-colors"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2.163c3.204 0 3.584.013 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.176 15.647 2.163 15.267 2.163 12s.013-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.176 8.796 2.163 12 2.163zm0-2.163C8.738 0 8.332.013 7.052.07c-1.545.07-2.983.428-4.095 1.54C1.425 2.721 1.067 4.159.997 5.704.94 7.122.927 7.528.927 12s.013 4.878.07 6.296c.07 1.545.428 2.983 1.54 4.095 1.112 1.112 2.55 1.47 4.095 1.54 1.418.057 1.824.07 6.296.07s4.878-.013 6.296-.07c1.545-.07 2.983-.428 4.095-1.54 1.112-1.112 1.47-2.55 1.54-4.095.057-1.418.07-1.824.07-6.296s-.013-4.878-.07-6.296c-.07-1.545-.428-2.983-1.54-4.095C21.274.498 19.836.14 18.291.07 16.872.013 16.466 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-8 3.999 3.999 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                  className="fill-blue-300 transition-colors group-hover:fill-blue-400"
                />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="flex items-center justify-center group transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.77 24h20.46C23.206 24 24 23.226 24 22.271V1.728C24 .774 23.206 0 22.23 0zM7.119 20.452H3.56V9h3.559v11.452zM5.34 7.633a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM20.452 20.452h-3.555V14.62c0-1.392-.021-3.188-1.945-3.188-1.946 0-2.243 1.52-2.243 3.087v5.933h-3.555V9h3.414v1.561h.049c.476-.9 1.635-1.846 3.365-1.846 3.598 0 4.263 2.368 4.263 5.448v6.289h-.002z"
                  className="fill-blue-300 transition-colors group-hover:fill-blue-400"
                />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="#"
              className="flex items-center justify-center group transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 .296C5.375.296 0 5.67 0 12.297c0 5.293 3.438 9.772 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.727-4.033-1.416-4.033-1.416-.547-1.387-1.334-1.756-1.334-1.756-1.089-.746.084-.731.084-.731 1.205.084 1.84 1.236 1.84 1.236 1.07 1.836 2.807 1.306 3.492.998.108-.775.419-1.306.762-1.605-2.667-.305-5.467-1.333-5.467-5.93 0-1.309.467-2.381 1.236-3.222-.123-.304-.535-1.529.117-3.188 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.047.138 3.003.404 2.289-1.55 3.295-1.229 3.295-1.229.654 1.658.242 2.883.119 3.187.77.842 1.235 1.914 1.235 3.223 0 4.609-2.804 5.624-5.479 5.921.43.371.823 1.104.823 2.225v3.293c0 .32.218.694.825.576C20.565 22.065 24 17.587 24 12.297c0-6.627-5.373-12.001-12-12.001z"
                  className="fill-blue-300 transition-colors group-hover:fill-blue-400"
                />
              </svg>
            </a>
            {/* Email */}
            <a
              href="#"
              className="flex items-center justify-center group transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2L12 13 4 6h16zm0 12H4V8l8 7 8-7v10z"
                  className="fill-blue-300 transition-colors group-hover:fill-blue-400"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Espaço maior entre as duas divs por conta do gap-16 do section */}
        <div className="flex justify-center items-center">
          <img
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-300 object-cover shadow-lg"
            src={perfil}
            alt="Imagem de Perfil"
          />
        </div>
      </section>
    </main>
  );
}