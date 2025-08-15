import { useState } from "react";
import NavBar from "../../components/NavBar";

const Contact = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      console.log("Desde el formulario")
    } catch(ex){
      console.log(ex)
    }
  }

  return (
    <>
      <NavBar />
      <div className="py-18 md:py-20">
        <div className="text-center">
          <div className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
            ¡Hablemos!
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl">
            Envíame un {''}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Correo
            </span>
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-600 mt-1">
            Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos!
          </p>

          <div className="flex justify-center items-center">
            <div className="md:w-1/4 sm:w-1/2 sm:m-10 border border-gray-100 p-6 rounded-xl shadow">
              <form onSubmit={handleSubmit} className="flex flex-col mt-1">
                
                <button className="bg-gray-800 text-white p-2 font-medium rounded-3xl my-3">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
