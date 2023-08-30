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
            jsx: <BiLogoJavascript className="row-start-2 w-12 h-12 text-gray-400 hover:text-cor-secundaria " />,
            div:"w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 before:content-['JavaScript'] before:text-center before:px-2 before:py-0.5 before:bg-cor-terciaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons"
        }, {
            jsx: <BiLogoTypescript className="row-start-2 w-12 h-12 text-gray-400 hover:text-cor-secundaria" />,
            div:"w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 before:content-['Typescript'] before:text-center before:px-2 before:py-0.5 before:bg-cor-terciaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons"
        }, {
            jsx: <BiLogoCss3 className="row-start-2 w-12 h-12 text-gray-400 hover:text-cor-secundaria" />,
            div:"w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 before:content-['Css'] before:text-center before:px-2 before:py-0.5 before:bg-cor-terciaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons"
        }, {
            jsx: <BiLogoHtml5 className="row-start-2 w-12 h-12 text-gray-400 hover:text-cor-secundaria" />,
            div:"w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 before:content-['Html'] before:text-center before:px-2 before:py-0.5 before:bg-cor-terciaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons"
        }, {
            jsx: <BiLogoReact className="row-start-2 w-12 h-12 text-gray-400 hover:text-cor-secundaria" />,
            div:"w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 before:content-['React'] before:text-center before:px-2 before:py-0.5 before:bg-cor-terciaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons"
        }, {
            jsx: <BiLogoJava className="row-start-2 w-12 h-12 text-gray-400 hover:text-cor-secundaria" />,
            div:"w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 before:content-['Java'] before:text-center before:px-2 before:py-0.5 before:bg-cor-terciaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons"
        }, {
            jsx: <BiLogoTailwindCss className="row-start-2 w-12 h-12 text-gray-400 hover:text-cor-secundaria" />,
            div:"w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 before:content-['Tailwind'] before:text-center before:px-2 before:py-0.5 before:bg-cor-terciaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons"
        }, {
            jsx: <BiLogoGit className="row-start-2 w-12 h-12 text-gray-400 hover:text-cor-secundaria" />,
            div:"w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 before:content-['Git'] before:text-center before:px-2 before:py-0.5 before:bg-cor-terciaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons"
        }, {
            jsx: <BiLogoMongodb className="row-start-2 w-12 h-12 text-gray-400 hover:text-cor-secundaria" />,
            div:"w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 before:content-['MongoDB'] before:text-center before:px-2 before:py-0.5 before:bg-cor-terciaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons"
        }
    ]
    return (
        <section className="flex flex-col items-center w-full max-w-5xl mt-8">
            <div className="flex self-center items-center gap-5">
                <img src="../images/eu.jpg" alt="Minha Imagem" className="w-[15rem] rounded-full border-2 border-cor-terciaria" />
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl">Olá, eu sou Guilherme Mota</h1>
                    <h2 className="text-lg font-medium">Desenvolvedor Front-End</h2>
                    <a onClick={event => scrollWindow("#projects")} className="font-medium px-3 py-1 mt-2 bg-cor-terciaria w-fit cursor-pointer text-white rounded-md hover:bg-cor-hover">Meus Projetos</a>
                </div>
            </div>
            <div className="flex justify-between w-full max-w-4xl">
                {logos.map((logo, index) =>
                    <InteractiveIcons logo={logo} divClass={logo.div} key={index}/>
                )}
            </div>
        </section>
    )
}

export default Apresentation