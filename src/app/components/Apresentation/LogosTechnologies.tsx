"use client"
import { IconType } from "react-icons";

interface LogosTechnologiesProps {
  logo: {
    class: string;
    jsx: IconType;
  }
}
const LogosTechnologies = ({ logo }: LogosTechnologiesProps) => {
  return (
    <div className="flex justify-center w-20 mt-10">
      <div className={`w-fit h-fit flex relative flex-col items-center row-start-2 before:hidden before:-top-8 ${logo.class} before:text-sm before:text-center before:px-2 before:py-0.5 before:bg-primary dark:before:bg-cor-darkSecundaria before:rounded-lg before:text-white before:font-medium hover:before:flex hover:before:absolute hover:before:animate-slideTopIcons`}>
        {<logo.jsx className="row-start-2 w-12 h-12 text-gray-400 hover:text-secondary dark:text-gray-200 dark:hover:text-cor-darkHover" />}
      </div>
    </div>
  )
}

export default LogosTechnologies