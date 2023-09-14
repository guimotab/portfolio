import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import { BiLogoCss3 } from "react-icons/bi"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoJava } from "react-icons/bi"
import { BiLogoGit } from "react-icons/bi"
import { BiLogoMongodb } from "react-icons/bi"

interface KnowledgeProps{
    setViewKnowledges: React.Dispatch<React.SetStateAction<string>>
}

const Knowledge = ({setViewKnowledges}:KnowledgeProps) => {
    const knowledgesLogo = [
        {
            name: "Typescript",
            logo: <BiLogoTypescript size={70} className="text-white mt-1" />
        }, {
            name: "Javascript",
            logo: <BiLogoJavascript size={70} className="text-white mt-1" />
        }, {
            name: "Tailwind",
            logo: <BiLogoTailwindCss size={70} className="text-white mt-1" />
        }, {
            name: "Css",
            logo: <BiLogoCss3 size={70} className="text-white mt-1" />
        }, {
            name: "React",
            logo: <BiLogoReact size={70} className="text-white mt-1" />
        }, 
        // {
        //     name: "MongoDB",
        //     logo: <BiLogoMongodb size={70} className="text-white mt-1" />
        // }, 
        {
            name: "Java",
            logo: <BiLogoJava size={70} className="text-white mt-1" />
        },{
            name: "Git",
            logo: <BiLogoGit size={70} className="text-white mt-1" />
        },

    ]
    return (
        <section id="knowledge" className="flex flex-col py-5 w-full gap-5">
            <h1 className="font-bold text-2xl dark:text-gray-200">Conhecimentos</h1>
            <div className="flex flex-wrap justify-evenly gap-4 lg:px-20">
                {knowledgesLogo.map((item, index) =>
                    <div
                        key={index}
                        onClick={event=>setViewKnowledges(item.name)}
                        className="flex flex-col items-center bg-cor-terciaria max-w-[14rem] w-full rounded-lg px-14 py-6 hover:shadow-[#0056b880] dark:hover:shadow-[#0077ff77] dark:shadow-lg hover:shadow-lg hover:animate-growKnowledges hover:cursor-pointer">
                        <div className="flex flex-col items-center">
                            <p className="text-white font-medium h-4">Certificado</p>
                            <h2 className="text-white font-medium text-2xl">{item.name}</h2>
                        </div>
                        {item.logo}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Knowledge