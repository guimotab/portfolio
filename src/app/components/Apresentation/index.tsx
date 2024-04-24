"use client"
import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoJava } from "react-icons/bi"
import { BiLogoGit } from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa6";
import scrollWindow from "@/utils/scrollWindow"
import { Button } from "@/components/ui/button"
import LogosTechnologies from "./LogosTechnologies"

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

        <img src="./guimotab.jpg" alt="Minha Imagem" className=" object-cover w-64 h-64 rounded-full  border-2 border-primary dark:border-cor-darkTerciaria" />

        <div className="flex flex-col items-center md:items-start min-w-fit">
          <h1 className="font-bold text-2xl dark:text-cor-darkTerciaria">Olá, sou Guilherme Mota</h1>
          <h2 className="text-lg font-medium dark:text-cor-darkTerciaria">Desenvolvedor Full-Stack</h2>
          <Button
            onClick={event => scrollWindow("projects")}
            className="font-medium px-3 py-1 mt-2 dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover w-fit cursor-pointer text-white rounded-md " >
            Meus Projetos
          </Button>
        </div>

      </div>

      <div className="flex flex-wrap justify-between w-full max-w-4xl">
        {logos.map((logo) =>
          <LogosTechnologies key={logo.class} logo={logo} />
        )}
      </div>

    </section>
  )
}

export default Apresentation