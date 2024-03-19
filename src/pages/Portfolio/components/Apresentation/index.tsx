import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoJava } from "react-icons/bi"
import { BiLogoGit } from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa6";
import scrollWindow from "../../../../shared/utils/scrollWindow"

const Apresentation = () => {
    const logos = [
        {
            class: "before:content-['JavaScript']",
            jsx: BiLogoJavascript,
        },
        {
            class: "before:content-['Typescript']",
            jsx: BiLogoTypescript,
        },
        {
            class: "before:content-['NextJs']",
            jsx: TbBrandNextjs,
        },
        {
            class: "before:content-['Angular']",
            jsx: FaAngular,
        },
        {
            class: "before:content-['React']",
            jsx: BiLogoReact,
        },
        {
            class: "before:content-['Java']",
            jsx: BiLogoJava,
        },
        {
            class: "before:content-['Tailwind']",
            jsx: BiLogoTailwindCss,
        },
        {
            class: "before:content-['Git']",
            jsx: BiLogoGit,
        },
    ]
    return (
        <section className="flex flex-col items-center w-full max-w-5xl mt-8">
            <div className="flex flex-col md:flex-row self-center items-center gap-5">
                <img src="../images/eu.jpg" alt="Minha Imagem" className="w-full max-w-[15rem] rounded-full border-2 border-cor-terciaria dark:border-cor-darkTerciaria" />
                <div className="flex flex-col items-center md:items-start min-w-fit">
                    <h1 className="font-bold text-2xl dark:text-cor-darkTerciaria">Olá, sou Guilherme Mota</h1>
                    <h2 className="text-lg font-medium dark:text-cor-darkTerciaria">Desenvolvedor Full-Stack</h2>
                    <p
                        onClick={event => scrollWindow("#projects")}
                        className="font-medium px-3 py-1 mt-2 bg-cor-terciaria dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover w-fit cursor-pointer text-white rounded-md hover:bg-cor-hover">
                        Meus Projetos
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-between w-full max-w-4xl">
                {logos.map((logo, index) =>
                    <div className="flex justify-center w-20 mt-10">
                        <div className={`w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 ${logo.class} before:text-center before:px-2 before:py-0.5 before:bg-cor-terciaria dark:before:bg-cor-darkSecundaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons`}>
                            {<logo.jsx className="row-start-2 w-12 h-12 text-gray-400 hover:text-cor-secundaria dark:text-gray-200 dark:hover:text-cor-darkHover" />}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Apresentation