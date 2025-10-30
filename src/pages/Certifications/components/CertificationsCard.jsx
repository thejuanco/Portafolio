import { Link } from "react-router"
import { certifications } from "../../../helpers"

export default function CertificationsCard() {
    return (
        <section className="py-12">
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
                    {certifications.map((item, index) => (
                        <div key={index} className="p-8 border border-gray-300 rounded-xl">
                            <div className="">
                                <h2 className="font-medium text-lg">{item.title}</h2>
                                <p className="text-gray-600">{item.issuer}</p>
                                <div>
                                    <p>{item.date}</p>
                                    <span>{item.status}</span>
                                </div>
                                <p>{item.description}</p>
                                <div>
                                    <p>Habilidades Validadas:</p>
                                    {item.skills.map((skill, index) => (
                                        <div key={index} className="">
                                            <span className="">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link>Verficar</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
