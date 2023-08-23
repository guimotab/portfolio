import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import { BiLogoCss3 } from "react-icons/bi"
import { BiLogoHtml5 } from "react-icons/bi"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoJava } from "react-icons/bi"
import { BiLogoGit } from "react-icons/bi"
import { BiLogoMongodb } from "react-icons/bi"
import InteractiveIcons from "../InteractiveIcons/InteractiveIcons"
import scrollWindow from "../../shared/utils/scrollWindow"

const Apresentation = () => {
    const logos = [
        {
            name: "Javascript",
            jsx: <BiLogoJavascript size={44} className="row-start-2 text-gray-400 hover:text-cor-secundaria" />
        }, {
            name: "Typescript",
            jsx: <BiLogoTypescript size={44} className="row-start-2 text-gray-400 hover:text-cor-secundaria" />
        }, {
            name: "Css",
            jsx: <BiLogoCss3 size={44} className="row-start-2 text-gray-400 hover:text-cor-secundaria" />
        }, {
            name: "Html",
            jsx: <BiLogoHtml5 size={44} className="row-start-2 text-gray-400 hover:text-cor-secundaria" />
        }, {
            name: "React",
            jsx: <BiLogoReact size={44} className="row-start-2 text-gray-400 hover:text-cor-secundaria" />
        }, {
            name: "Java",
            jsx: <BiLogoJava size={44} className="row-start-2 text-gray-400 hover:text-cor-secundaria" />
        }, {
            name: "Tailwind",
            jsx: <BiLogoTailwindCss size={44} className="row-start-2 text-gray-400 hover:text-cor-secundaria" />
        }, {
            name: "Git",
            jsx: <BiLogoGit size={44} className="row-start-2 text-gray-400 hover:text-cor-secundaria" />
        }, {
            name: "MongoDB",
            jsx: <BiLogoMongodb size={44} className="row-start-2 text-gray-400 hover:text-cor-secundaria" />
        }
    ]
    return (
        <section className="flex flex-col  w-full max-w-3xl mt-8">
            <div className="flex self-center items-center gap-5">
                <img src="../images/eu.jpg" alt="Minha Imagem" className="w-[15rem] rounded-full border-2 border-cor-terciaria" />
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl">Olá, eu sou Guilherme Mota</h1>
                    <h2 className="text-lg font-medium">Desenvolvedor Front-End</h2>
                    <a onClick={event => scrollWindow("#projects")} className="font-medium px-3 py-1 mt-2 bg-cor-terciaria w-fit text-white rounded-md">Meus Projetos</a>
                </div>
            </div>
            <div className="flex justify-between w-full max-w-3xl">
                {logos.map((logo, index) =>
                    <InteractiveIcons logo={logo} key={index} text={logo.name} />
                )}
            </div>
        </section>
    )
}

export default Apresentation