import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { BsFillSunFill } from "react-icons/bs"
import { BsMoonFill } from "react-icons/bs"
import scrollWindow from "../../shared/utils/scrollWindow"
import { useState } from "react"
const Header = () => {
  const [darkmode, setDarkMode] = useState(false)
  // function changeTheme() {
  //   setDarkMode(!darkmode)
  // }
  function changeTheme(themeMode: string) {
    const whiteMode = document.getElementById("themeWhite")!
    const divDarkMode = document.getElementById("divDarkMode")!
    const darkMode = document.getElementById("themeDark")!
    const divWhiteMode = document.getElementById("divWhiteMode")!
    if (themeMode === "dark") {
      divDarkMode.className = "absolute animate-slideOutTheme top-0"
      divWhiteMode.className = "absolute animate-slideinTheme top-0"
    } else {
      divDarkMode.className = "absolute animate-slideinTheme top-0"
      divWhiteMode.className = "absolute animate-slideOutTheme top-0"
    }
  }
  return (
    <header id="header" className="flex items-center justify-between py-4 w-full max-w-7xl">
      <div className="flex items-center gap-5">
        <div className="w-7 h-7">
          <div className="relative">
            <div id="divWhiteMode" className="hidden">
              <BsFillSunFill id="themeWhite" onClick={event => changeTheme("white")} className="z-10 w-7 h-7" />
            </div>
            <div id="divDarkMode">
              <BsMoonFill id="themeDark" onClick={event => changeTheme("dark")} className="z-10 w-6 h-6" />
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Guilherme Mota</h1>
      </div>
      <div className="flex gap-3 items-center">
        <a onClick={event => scrollWindow("#about_me")} className="relative h-6 text-lg font-medium cursor-pointer after:content-[' '] animacao-risco-texto">Sobre Mim</a>
        <a onClick={event => scrollWindow("#knowledge")} className="relative h-6 text-lg font-medium cursor-pointer after:content-[' '] animacao-risco-texto">Conhecimentos</a>
        <a onClick={event => scrollWindow("#projects")} className="relative h-6 text-lg font-medium cursor-pointer after:content-[' '] animacao-risco-texto">Projetos</a>
        <a onClick={event => scrollWindow("#contacts")} className="relative h-6 text-lg font-medium cursor-pointer after:content-[' '] animacao-risco-texto">Contato</a>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/guimotab" target="_blank"><BsGithub size={26} className="text-gray-500 hover:text-cor-secundaria" /></a>
        <a href="https://www.linkedin.com/in/guimotab/" target="_blank"><BsLinkedin size={26} className="text-gray-500 hover:text-cor-secundaria" /></a>
        <a href="#" target="_blank"><BsWhatsapp size={26} className="text-gray-500 hover:text-cor-secundaria" /></a>
      </div>
    </header>
  )
}

export default Header