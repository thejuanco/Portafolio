import { workplaceSkills } from "../../../helpers"

export default function WorkplaceSkills() {
  return (
    <section className="px-6">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3 p-4 mt-4">
            {workplaceSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                    <div key={index} className="p-4 rounded-lg border border-gray-200">
                        <div className="flex mb-2">
                            <span className="bg-gray-200 p-2 rounded-lg">
                                <Icon className="w-7 h-7"/>
                            </span>
                        </div>
                        <h2 className="text-start font-semibold text-2xl tracking-tighter">{skill.category}</h2>
                        <p className="text-start text-gray-500">{skill.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2 p-2">
                            {skill.skills.map((tSkill, index) => (
                                <div key={index} className="flex mt-2"> 
                                    <span className="bg-gray-200 px-2 py-1 rounded-full font-medium text-sm">{tSkill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
