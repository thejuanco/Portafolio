import "./App.css";

function App() {
  const projects = [
    {
      title: "Moneta-Flow",
      description: "Plataforma completa para administrar tu dinero de manera efectiva e inteligente.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/usuario/ecommerce",
      demo: "https://ecommerce-demo.com",
      featured: true,
    },
    {
      title: "Taski",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/usuario/task-app",
      demo: "https://task-app-demo.com",
      featured: true,
    },
    {
      title: "App Móvil Clima",
      description: "Aplicación móvil del clima que muestra el clima según la ciudad consultada y alertas climaticas.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
      github: "https://github.com/usuario/weather-app",
      demo: "https://weather-dashboard-demo.com",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "Sitio web de portafolio personal con diseño responsivo y animaciones suaves.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/usuario/portfolio",
      demo: "https://mi-portfolio.com",
      featured: false,
    },
  ]


  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 w-full border-b border-gray-300 backdrop-blur">
        <div className="container flex h-14 items-center">
          <div className="mx-8 flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <span className="font-bold">Mi portafolio</span>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 mx-8 text-sm font-medium">
              <span href="#projects" className="hover:text-foreground/80">
                Proyectos
              </span>
              <span href="#projects" className="hover:text-foreground/80">
                Habilidades
              </span>
              <span href="#projects" className="hover:text-foreground/80">
                Contacto
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
                className="size-6 mr-2"
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
                Ver Perfil en GitHub
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
          <div className="grid gap-8 mx-8 md:grid-cols-2">
            {projects.filter((project) => project.featured).map((project, index) => (
              <div key={index} className="overflow-hidden">
                <div>
                  Imagen aqui
                </div>
                <div className="flex items-start space-y-2 justify-between">
                  <div className="space-y-2">
                    <h2 className="font-medium text-xl">{project.title}</h2>
                  </div>
                  <span className="font-medium text-sm rounded-full px-1 bg-slate-200">Destacado</span>
                </div>
                <p className="text-slate-500">{project.description}</p>
                <div className="space-y-4 mt-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="px-2 border border-gray-200 rounded-full">
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row">
                    <button className="flex items-center gap-2 bg-slate-900 text-slate-200 px-3 py-1 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      Demo
                    </button>
                    <button className="flex items-center gap-2 bg-slate-100 text-slate-900 border border-gray-200 px-3 py-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                      </svg>
                      Código
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Otros Proyectos</h3>
            <div className="grid gap-6 md:grid-cols-2 mx-8">
              {projects.filter((project) => !project.featured).map((project, index) => (
                <div key={index} className="border border-gray-300 rounded-lg p-5">
                  <div className="">
                    <div className="flex flex-row justify-between space-y-2">
                      <h2 className="font-medium text-lg">{project.title}</h2>
                      <div className="space-x-2">
                        <button className="border border-gray-200 px-2 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        </button>
                        <button className="border border-gray-200 px-2 py-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-500">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="px-2 border border-gray-200 rounded-full">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
