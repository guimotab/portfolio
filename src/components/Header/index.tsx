import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { BsFillSunFill } from "react-icons/bs"
import { BsMoonStarsFill } from "react-icons/bs"
import scrollWindow from "../../shared/utils/scrollWindow"
const Header = () => {
  function mouseEnter(idDiv: string) {
    const div = document.getElementById(idDiv)!
    div.className = "border-cor-terciaria border-b animate-growToRight"
  }
  function mouseLeave(idDiv: string) {
    const div = document.getElementById(idDiv)!
    div.className = "hidden"
  }
  return (
    <header className="flex items-center justify-between py-4 font-primaria">
      <div className="flex items-end gap-5">
        <div className="border-2 border-cor-terciaria rounded-xl p-1">
          <BsMoonStarsFill size={18} />
        </div>
        <h1 className="text-xl font-medium">Guilherme Mota</h1>
      </div>
      <div className="flex gap-3 items-center">
        <a onClick={event => scrollWindow("#about_me")} className="relative h-6 cursor-pointer after:content-[' '] animacao-risco-texto">Sobre Mim</a>
        <a onClick={event => scrollWindow("#knowledge")} className="relative h-6 cursor-pointer after:content-[' '] animacao-risco-texto">Conhecimentos</a>
        <a onClick={event => scrollWindow("#projects")} className="relative h-6 cursor-pointer after:content-[' '] animacao-risco-texto">Projetos</a>
        <a onClick={event => scrollWindow("#contacts")} className="relative h-6 cursor-pointer after:content-[' '] animacao-risco-texto">Contato</a>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/guimotab" target="_blank"><BsGithub size={23} className="text-gray-500 hover:text-cor-secundaria" /></a>
        <a href="#" target="_blank"><BsLinkedin size={23} className="text-gray-500 hover:text-cor-secundaria" /></a>
        <a href="#" target="_blank"><BsWhatsapp size={23} className="text-gray-500 hover:text-cor-secundaria" /></a>
      </div>
    </header>
  )
}

export default Header