const NavBar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 border-b border-gray-300 backdrop-blur">
        <div className="flex h-14 items-center px-4 md:px-8">
            <div className="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <span className="font-bold">Mi portafolio</span>
            </div>
            <div className="flex flex-1 items-center justify-center space-x-2 md:justify-end">
                <nav className="flex items-center space-x-6 text-sm font-medium">
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
  )
}

export default NavBar