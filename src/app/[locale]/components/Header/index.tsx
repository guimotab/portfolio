"use client"

import Link from "next/link"
import { BsFillSunFill, BsMoonFill, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { changeTheme } from "@/components/Theme"
import { BiMenu } from "react-icons/bi"
import { Button } from "@/components/ui/button"
import SheetRedirect from "./Sheet"
import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import scrollWindow from "@/utils/scrollWindow"
import { useTranslations } from "next-intl"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BR, US } from 'country-flag-icons/react/3x2'
import { getCookie, setCookie } from 'cookies-next'
import { useRouter } from "next/navigation"
interface HeaderProps { }
const Header = ({ }: HeaderProps) => {
  const t = useTranslations('HeaderIndex');
  const router = useRouter()
  const currentLanguage = getCookie("NEXT_LOCALE")
  const [closeSheet, setCloseSheet] = useState(false)
  const body = document.getElementsByTagName("body")[0]!

  const linksScrollHeader = [
    {
      id: "about_me",
      name: t("aboutMe"),
    }, {
      id: "certificates",
      name: t("certificates"),
    }, {
      id: "projects",
      name: t("projects"),
    }, {
      id: "contacts",
      name: t("contacts"),
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

  function handleCloseSheet() {
    body.classList.remove("overflow-y-hidden")
    setCloseSheet(false)
  }
  function handleOpenSheet() {
    body.classList.add("overflow-y-hidden")
    setCloseSheet(true)
  }
  function handleScrollWindow(id: string) {
    scrollWindow(id)
    handleCloseSheet()
  }
  function switchLocale(newLanguage: "en" | "pt") {
    setCookie("NEXT_LOCALE", newLanguage)
    router.replace(`/${newLanguage}`)
  }

  return (
    <header id="header" className="flex justify-center py-4 w-full sm:px-10 px-8">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center gap-5">

          {closeSheet &&
            <SheetRedirect closeSheet={handleCloseSheet}>
              <div className="flex flex-col items-center pt-5 gap-5">
                <Label className="text-lg font-medium">{t("titleSheet")}</Label>
                <div className="flex flex-col items-center gap-3">
                  {linksScrollHeader.map(link =>
                    <Link href={`#${link.id}`} scroll={false} key={link.id}
                      onClick={event => handleScrollWindow(link.id)} className="w-full">
                      <Button variant={"outline"} className="w-full">
                        {link.name}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </SheetRedirect>
          }

          <BiMenu onClick={handleOpenSheet} className="md:hidden w-10 h-10 text-primary dark:text-white" />

          <div className="relative w-7 h-7">
            <div id="divWhiteMode" className="opacity-0 absolute dark:opacity-100 cursor-pointer z-0 dark:z-20" onClick={event => changeTheme("white")}>
              <BsFillSunFill id="themeWhite" className="text-primary  w-8 h-8 md:w-7 md:h-7 dark:text-white " />
            </div>
            <div id="divDarkMode" className="cursor-pointer absolute dark:opacity-0 z-20 dark:z-0" onClick={event => changeTheme("dark")}>
              <BsMoonFill id="themeDark" className="text-primary  w-7 h-7 md:w-6 md:h-6 dark:text-white" />
            </div>
          </div>

          <h1 className="hidden lg:block text-2xl font-semibold dark:text-cor-darkTerciaria">Guilherme Mota</h1>

          <Select onValueChange={event => switchLocale(event as "en" | "pt")} defaultValue={currentLanguage}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pt">
                <div className="flex items-center gap-2">
                  <BR title="Brasil" className="h-6 w-6" /><Label>PT</Label>
                </div>
              </SelectItem>
              <SelectItem value="en">
                <div className="flex items-center gap-2">
                  <US title="United States" className="h-6 w-6" /><Label>EN</Label>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="hidden md:flex gap-3 items-center">
          {linksScrollHeader.map(link =>
            <Link href={`#${link.id}`} scroll={false} key={link.id}
              onClick={event => scrollWindow(link.id)}
              className={`relative text-lg font-medium cursor-pointer animacao-risco-texto dark:text-cor-darkTerciaria`}>
              {link.name}
            </Link>
          )}
        </div>

        <div className="flex gap-6 md:gap-3">
          {linksRedirect.map(link =>
            <a key={link.href} href={link.href} target="_blank">
              <link.icon className="w-6 h-6 text-gray-500 dark:text-gray-100 hover:text-secondary dark:hover:text-secondary " />
            </a>
          )}
        </div>


      </div>
    </header >
  )
}
export default Header