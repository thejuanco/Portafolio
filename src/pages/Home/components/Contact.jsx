const Contact = () => {
  return (
    <section id="contact" className="py-28">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            ¿Trabajamos Juntos?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-600">
            Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-slate-200 py-2 px-4 rounded-full hover:bg-gray-800">
                Enviar Correo
            </button>
            <button className="flex items-center gap-2 border border-gray-300 hover:bg-gray-100 text-slate-900 py-2 px-4 rounded-full">
                LinkedIn
            </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
