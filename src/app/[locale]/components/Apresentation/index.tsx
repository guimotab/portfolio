"use client"
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoJava } from "react-icons/bi"
import { BiLogoGit } from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import LogosTechnologies from "./LogosTechnologies"
import { FaGithub } from "react-icons/fa";
import { Label } from "@/components/ui/label"
import { FaRegLightbulb } from "react-icons/fa6";
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

const Apresentation = () => {
  const params = useParams<{ locale: string }>()
  const t = useTranslations('Apresentation');
  const logos = [
    {
      class: "before:content-['Javascript']",
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
    {
      class: "before:content-['PostgreSQL']",
      jsx: BiLogoPostgresql,
    },
  ]

  function handleDownloadApp() {
    const link = document.createElement('a');
    link.href = `../cv/profile(${params.locale}).pdf`;
    link.download = `profile(${params.locale}).pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="flex flex-col items-center w-full max-w-5xl mt-8">

      <div className="flex flex-col md:flex-row self-center items-center gap-5">

        <img src="./guimotab.jpg" alt="Minha Imagem" className="object-cover w-64 h-64 rounded-full border-2 border-primary dark:border-cor-darkTerciaria" />

        <div className="flex flex-col items-center md:items-start min-w-fit">
          <h1 className="font-bold text-2xl dark:text-cor-darkTerciaria">{t("h1")}</h1>
          <h2 className="text-lg font-medium dark:text-cor-darkTerciaria">{t("h2")}</h2>
          <div className="flex items-center gap-5">
            <Button
              onClick={handleDownloadApp}
              className="space-x-2 font-medium px-3 py-1 mt-2 dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover w-fit cursor-pointer text-white rounded-md " >
              <FaRegLightbulb className="text-xl dark:text-gray-200" />
              <Label>{t("btnDownloadCv")}</Label>
            </Button>
            <Link target="_blank" href={"https://github.com/guimotab/portfolio"}>
              <Button
                variant={"outline"}
                className="space-x-3 dark:text-gray-200 font-medium px-3 py-1 mt-2 dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover w-fit cursor-pointer rounded-md " >
                <FaGithub className="text-xl" />
                <Label>{t("btnCodePortfolio")}</Label>
              </Button>
            </Link>
          </div>
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