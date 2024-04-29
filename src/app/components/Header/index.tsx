"use client"

import Link from "next/link"
import { BsFillSunFill, BsMoonFill, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import scrollWindow from "../../../utils/scrollWindow"
import { changeTheme } from "@/components/Theme"
import { BiMenu } from "react-icons/bi"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface HeaderProps {
}
const Header = ({ }: HeaderProps) => {

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
    <header id="header" className="flex justify-center py-4 w-full sm:px-24 px-8">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center gap-5">

          <Sheet>
            <SheetTrigger>
              <BiMenu className="md:hidden w-12 h-12 text-primary dark:text-cor-darkTerciaria" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-xl">Acesso Rápido</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col items-center gap-3">
                    {linksScrollHeader.map(link =>
                      <Button variant={"ghost"} className="w-fit">
                        <Link href={`#${link.id}`} scroll={false} key={link.id}
                          onClick={event => scrollWindow(link.id)}
                          className="relative text-lg text-gray-300 font-medium cursor-pointer">
                          {link.name}
                        </Link>
                      </Button>
                    )}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>


          <div className="relative w-7 h-7">

            <div id="divWhiteMode" className="opacity-0 absolute dark:opacity-100 cursor-pointer z-0 dark:z-20" onClick={event => changeTheme("white")}>
              <BsFillSunFill id="themeWhite" className="text-primary  w-8 h-8 md:w-7 md:h-7 dark:text-white " />
            </div>

            <div id="divDarkMode" className="cursor-pointer absolute dark:opacity-0 z-20 dark:z-0" onClick={event => changeTheme("dark")}>
              <BsMoonFill id="themeDark" className="text-primary  w-7 h-7 md:w-6 md:h-6 dark:text-white" />
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
              <link.icon className="w-8 md:w-6 h-8 md:h-6 text-gray-500 dark:text-gray-100 hover:text-secondary dark:hover:text-secondary " />
            </a>
          )}
        </div>

      </div>
    </header>
  )
}
export default Header