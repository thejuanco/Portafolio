import { Link } from "react-router";
import { projects } from "../../../helpers";

const Projects = () => {
  return (
    <section className="py-24">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Proyectos Destacados
          </h2>
          <p className="mx-auto max-w-[700px] text-slate-500">
            Una selección de mis trabajos más recientes y proyectos personales
          </p>
        </div>
        <div className="grid gap-8 mx-8 md:grid-cols-2">
        {projects.filter(project => project.featured).map((project, index) => (
          <div  key={index} className="overflow-hidden rounded-xl border border-gray-300">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.image || "/Placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="m-6">
              <div className="flex items-start space-y-2 justify-between">
                <div className="space-y-2">
                  <h2 className="font-medium text-xl">{project.title}</h2>
                </div>
                <div className="font-medium text-sm rounded-full px-1 bg-green-100">
                  <p className="text-green-900">En desarrollo</p>
                </div>
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
                  <Link
                    to={project.demo}
                    className="flex items-center gap-2 bg-slate-900 text-slate-200 px-3 py-1 rounded-full mr-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Demo
                  </Link>
                  <Link
                    to={project.github}
                    className="flex items-center gap-2 bg-slate-100 text-slate-900 border border-gray-200 px-3 py-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                    Código
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
        }
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">Otros Proyectos</h3>
          <div className="grid gap-6 md:grid-cols-2 mx-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-5">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
