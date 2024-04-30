"use client"

import Theme from "@/classes/Theme"
import { changeTheme } from "@/components/Theme"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import certificates from "@/const/certificates"
import nameCertificates from "@/types/nameCertificates"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BsFillSunFill, BsMoonFill, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io";

interface HeaderProps {
  nameCertificate: nameCertificates
}
const Header = ({ nameCertificate }: HeaderProps) => {
  const router = useRouter()

  function handleRedirect(url: nameCertificates) {
    router.push(url)
  }
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
    <header id="header" className="flex justify-center py-4 w-full sm:px-16 px-8">
      <div className="flex items-center gap-14 sm:justify-between w-full max-w-7xl">
        <div className="flex items-center gap-5">
          
          <div className="relative w-7 h-7">

            <div id="divWhiteMode" className="opacity-0 absolute dark:opacity-100 cursor-pointer z-0 dark:z-20" onClick={event => changeTheme("white")}>
              <BsFillSunFill id="themeWhite" className="text-primary  w-8 h-8 md:w-7 md:h-7 dark:text-white " />
            </div>

            <div id="divDarkMode" className="cursor-pointer absolute dark:opacity-0 z-20 dark:z-0" onClick={event => changeTheme("dark")}>
              <BsMoonFill id="themeDark" className="text-primary  w-7 h-7 md:w-6 md:h-6 dark:text-white" />
            </div>


          </div>

          <h1 className="hidden lg:block text-2xl font-semibold dark:text-cor-darkTerciaria">Certificados</h1>

        </div>

        <div className="flex gap-3 items-center">
          <Link href={`/`}
            className="relative text-lg  font-medium cursor-pointer animacao-risco-texto dark:text-cor-darkTerciaria ">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none relative cursor-pointer">
              <div className="flex items-center gap-1  animacao-risco-texto">
                <Label className="font-medium text-lg">Certificados</Label>
                <IoIosArrowDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {certificates.map(certificate =>
                certificate.name !== nameCertificate &&
                <DropdownMenuItem key={certificate.name} onClick={event => handleRedirect(certificate.name)}>
                  {certificate.name}
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden sm:flex gap-6 md:gap-3">
          {linksRedirect.map(link =>
            <a key={link.href} href={link.href} target="_blank">
              <link.icon className="w-8 md:w-6 h-8 md:h-6 text-gray-500 dark:text-gray-100 hover:text-secondary dark:hover:text-secondary " />
            </a>
          )}
        </div>

      </div>
    </header >
  )
}

export default Header