import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { BsFillSunFill } from "react-icons/bs"
import { BsMoonFill } from "react-icons/bs"
import { BiMenu } from "react-icons/bi"
import scrollWindow from "../../shared/utils/scrollWindow"
import { Link } from "react-router-dom"

interface HeaderProps {
  setAside: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({ setAside }: HeaderProps) => {
  function changeTheme(themeMode: string) {
    const body = document.getElementById("body")!
    const divDarkMode = document.getElementById("divDarkMode")!
    const divWhiteMode = document.getElementById("divWhiteMode")!
    if (themeMode === "dark") {
      body.className = "overflow-x-hidden dark"
      divDarkMode.className = "absolute animate-slideOutTheme top-0 z-0 cursor-pointer"
      divWhiteMode.className = "absolute animate-slideinTheme top-0 z-20 cursor-pointer"
    } else {
      body.className = "overflow-x-hidden"
      divDarkMode.className = "absolute animate-slideinTheme top-0 z-20 cursor-pointer"
      divWhiteMode.className = "absolute animate-slideOutTheme top-0 z-0 cursor-pointer"
    }
  }
  return (
    <header id="header" className="flex justify-center py-4 w-screen dark:bg-[#000e20] sm:px-24 px-8">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center gap-5">
          <BiMenu className="md:hidden w-12 h-12 text-cor-terciaria dark:text-cor-darkTerciaria" onClick={event => setAside(true)} />
          <div className="relative w-7 h-7">
            <div id="divWhiteMode" className="hidden dark:block" onClick={event => changeTheme("white")}>
              <BsFillSunFill id="themeWhite" className="text-cor-terciaria z-10 w-8 h-8 md:w-7 md:h-7 dark:text-cor-darkTerciaria " />
            </div>
            <div id="divDarkMode" className="cursor-pointer dark:hidden" onClick={event => changeTheme("dark")}>
              <BsMoonFill id="themeDark" className="text-cor-terciaria z-10 w-7 h-7 md:w-6 md:h-6 dark:text-cor-darkTerciaria cursor-pointer" />
            </div>
          </div>
          <h1 className="hidden lg:block text-2xl font-semibold dark:text-cor-darkTerciaria">Guilherme Mota</h1>
        </div>
        <div className="hidden md:flex gap-3 items-center">
          <Link to={"/#about_me"} onClick={event => scrollWindow("#about_me")} className="relative h-6 text-lg font-medium cursor-pointer after:content-[' '] animacao-risco-texto dark:text-cor-darkTerciaria ">Sobre Mim</Link>
          <Link to={"/#knowledge"} onClick={event => scrollWindow("#knowledge")} className="relative h-6 text-lg font-medium cursor-pointer after:content-[' '] animacao-risco-texto dark:text-cor-darkTerciaria">Conhecimentos</Link>
          <Link to={"/#projects"} onClick={event => scrollWindow("#projects")} className="relative h-6 text-lg font-medium cursor-pointer after:content-[' '] animacao-risco-texto dark:text-cor-darkTerciaria">Projetos</Link>
          <Link to={"/#contacts"} onClick={event => scrollWindow("#contacts")} className="relative h-6 text-lg font-medium cursor-pointer after:content-[' '] animacao-risco-texto dark:text-cor-darkTerciaria">Contato</Link>
        </div>
        <div className="flex gap-6 md:gap-3">
          <a href="https://github.com/guimotab" target="_blank">
            <BsGithub className="w-8 md:w-6 h-8 md:h-6 text-gray-500 hover:text-cor-secundaria dark:text-cor-darkTerciaria dark:hover:text-cor-darkHover" />
          </a>
          <a href="https://www.linkedin.com/in/guimotab/" target="_blank">
            <BsLinkedin className="w-8 md:w-6 h-8 md:h-6 text-gray-500 hover:text-cor-secundaria dark:text-cor-darkTerciaria dark:hover:text-cor-darkHover" />
          </a>
          <a href="https://wa.me/5569992687447" target="_blank">
            <BsWhatsapp className="w-8 md:w-6 h-8 md:h-6 text-gray-500 hover:text-cor-secundaria dark:text-cor-darkTerciaria dark:hover:text-cor-darkHover" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header