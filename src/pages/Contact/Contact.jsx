import React from "react";
import NavBar from "../../components/NavBar";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="py-24 md:py-32">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl">
            Envíame un correo
          </h2>

          <div className="flex justify-center items-center">
            <div className="md:w-1/4 sm:w-1/2 sm:m-10 border border-gray-100 p-6 rounded-xl shadow">
              <form>
                <div className="space-y-3">
                  <input
                    name="title"
                    type="text"
                    placeholder="Titulo del correo"
                    className="p-2 rounded-lg w-full border border-gray-300"
                  />

                  <input
                    name="to_name"
                    type="text"
                    placeholder="A quien va dirigido (nombre)"
                    className="p-2 rounded-lg w-full border border-gray-300"
                  />

                  <input
                    name="to_email"
                    type="email"
                    placeholder="Correo del destinatario"
                    className="p-2 rounded-lg w-full border border-gray-300"
                  />

                  <textarea
                    name="content"
                    className="rounded-lg p-2 w-full border border-gray-300"
                    placeholder="Escribe tu correo aquí..."
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
