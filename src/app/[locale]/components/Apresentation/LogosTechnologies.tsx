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
      <div className={`w-fit h-fit flex relative flex-col items-center 
      before:bottom-8 before:transition before:duration-500 hover:before:-translate-y-6 before:opacity-0 hover:before:opacity-100 ${logo.class} before:text-sm before:text-center before:px-2
       before:py-0.5 before:bg-primary dark:before:bg-cor-darkSecundaria before:rounded-md before:text-white before:font-medium hover:before:flex before:absolute `}>
        {<logo.jsx className="w-12 h-12 z-10 text-gray-400 hover:text-secondary dark:text-gray-200 dark:hover:text-secondary" />}
      </div>
    </div>
  )
}

export default LogosTechnologies