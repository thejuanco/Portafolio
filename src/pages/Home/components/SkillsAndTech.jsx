import { skills } from "../../../helpers"

const SkillsAndTech = () => {
  return (
    <section className="w-full py-24 bg-gray-100">
        <div className="w-full bg-slage-100">
            <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">Habilidades y Tecnologías</h2>
            <p className="text-center pt-4 text-slate-500">Tecnologías y herramientas que uso para crear soluciones digitales</p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 p-4 mt-4">
            {skills.map((skill, index) => (
                <div key={index} className="p-2 border border-gray-200 rounded-lg bg-slate-50">
                    <h2 className="font-medium text-lg">{skill.category}</h2>
                    <div className="flex flex-wrap gap-2 mt-2 p-2">
                        {skill.items.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex mt-2">
                                <span className="bg-gray-200 px-2 py-1 rounded-full font-medium text-sm">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default SkillsAndTech