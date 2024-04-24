"use client"

import Link from "next/link"
import { BsFillSunFill, BsMoonFill, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import scrollWindow from "../../../utils/scrollWindow"

interface HeaderProps {
  // aside usado para responsividade
  // setAside: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({ }: HeaderProps) => {


  function changeTheme(themeMode: string) {
    const body = document.getElementsByTagName("body")[0]!
    const divDarkMode = document.getElementById("divDarkMode")!
    const divWhiteMode = document.getElementById("divWhiteMode")!

    if (themeMode === "dark") {
      changeClasses(body, "add", ["overflow-x-hidden", "dark"])
      changeClasses(body, "remove", ["overflow-x-opacity-0"])

      changeClasses(divDarkMode, "remove", ["opacity-100", "animate-slideinTheme", "z-20"])
      changeClasses(divDarkMode, "add", ["opacity-0", "animate-slideOutTheme", "z-0"])

      changeClasses(divWhiteMode, "remove", ["opacity-0", "animate-slideOutTheme", "z-0"])
      changeClasses(divWhiteMode, "add", ["opacity-100", "animate-slideinTheme", "z-20"])
    } else {
      changeClasses(body, "add", ["overflow-x-opacity-0"])
      changeClasses(body, "remove", ["overflow-x-hidden", "dark"])

      changeClasses(divDarkMode, "remove", ["opacity-0", "animate-slideOutTheme", "z-0"])
      changeClasses(divDarkMode, "add", ["opacity-100", "animate-slideinTheme", "z-20"])

      changeClasses(divWhiteMode, "remove", ["opacity-100", "animate-slideinTheme", "z-20"])
      changeClasses(divWhiteMode, "add", ["opacity-0", "animate-slideOutTheme", "z-0"])
    }
  }

  function changeClasses(element: HTMLElement, type: "remove" | "add", classNames: string[]) {
    if (classNames && type === "add") {
      classNames.forEach(className =>
        element.classList.add(className)
      )
    } else if (classNames && type === "remove") {
      classNames.forEach(className =>
        element.classList.remove(className)
      )
    }
  }

  const linksScrollHeader = [
    {
      id: "about_me",
      name: "Sobre Mim",
    }, {
      id: "certificates",
      name: "Certificados",
    }, {
      id: "projects",
      name: "Projetos",
    }, {
      id: "contacts",
      name: "Contatos",
    },
  ]

  const linksRedirect = [
    {
      href: "https://github.com/guimotab",
      icon: BsGithub,
    }, {
      href: "https://www.linkedin.com/in/guimotab/",
      icon: BsLinkedin,
    }, {
      href: "https://wa.me/5569992687447",
      icon: BsWhatsapp,
    },
  ]

  return (
    <header id="header" className="flex justify-center py-4 w-full dark:bg-[#000e20] sm:px-24 px-8">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center gap-5">
          {/* <BiMenu className="md:hidden w-12 h-12 text-primary dark:text-cor-darkTerciaria" onClick={event => setAside(true)} /> */}
          <div className="relative w-7 h-7">

            <div id="divWhiteMode" className="opacity-0 absolute dark:block" onClick={event => changeTheme("white")}>
              <BsFillSunFill id="themeWhite" className="text-primary z-0 w-8 h-8 md:w-7 md:h-7 dark:text-cor-darkTerciaria " />
            </div>

            <div id="divDarkMode" className="cursor-pointer absolute dark:opacity-0" onClick={event => changeTheme("dark")}>
              <BsMoonFill id="themeDark" className="text-primary z-20 w-7 h-7 md:w-6 md:h-6 dark:text-cor-darkTerciaria cursor-pointer" />
            </div>

          </div>

          <h1 className="hidden lg:block text-2xl font-semibold dark:text-cor-darkTerciaria">Guilherme Mota</h1>

        </div>

        <div className="hidden md:flex gap-3 items-center">
          {linksScrollHeader.map(link =>
            <Link href={`#${link.id}`} scroll={false} key={link.id}
              onClick={event => scrollWindow(link.id)}
              className="relative text-lg  font-medium cursor-pointer animacao-risco-texto dark:text-cor-darkTerciaria ">
              {link.name}
            </Link>
          )}
        </div>

        <div className="flex gap-6 md:gap-3">
          {linksRedirect.map(link =>
            <a key={link.href} href={link.href} target="_blank">
              <link.icon className="w-8 md:w-6 h-8 md:h-6 text-gray-500 hover:text-secondary dark:text-cor-darkTerciaria dark:hover:text-cor-darkHover" />
            </a>
          )}
        </div>

      </div>
    </header>
  )
}

export default Header