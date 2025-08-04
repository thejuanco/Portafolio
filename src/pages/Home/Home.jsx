import { Link } from "react-router";

import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="py-24 md:py-32">
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
                  Juan
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
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Descargar CV
              </button>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Link to="#" className="p-2 rounded-lg hover:bg-gray-100">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
