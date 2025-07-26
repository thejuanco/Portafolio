import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <span>Mi portafolio</span>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <span href="#projects" className="hover:text-foreground/80">
                Proyectos
              </span>
            </nav>
          </div>
        </div>
      </nav>

      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              Disponible para proyectos
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Juanco
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-gray-500 sm:text-xl mt-6">
                Desarrollador Full Stack apasionado por crear experiencias
                digitales excepcionales. Especializado en React, Next.js y
                tecnologías modernas.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
              <button className="bg-gray-900 text-slate-200 py-2 px-4 rounded-full">
                Ver Proyectos
              </button>
              <button className="flex items-center gap-2 bg-gray-100 text-slate-900 py-2 px-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Descargar CV
              </button>
            </div>
             <div className="flex items-center space-x-4">
              Botones de redes sociales
             </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos Destacados</h2>
            <p className="mx-auto max-w-[700px] text-slate-500">
              Una selección de mis trabajos más recientes y proyectos personales
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            Hola
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
