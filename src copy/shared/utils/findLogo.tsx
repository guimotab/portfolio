import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import { BiLogoCss3 } from "react-icons/bi"
import { BiLogoHtml5 } from "react-icons/bi"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoMongodb } from "react-icons/bi"
import { SiExpo } from "react-icons/si";
import { arrayFindLogos } from "../../types/arrayFindLogo"
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

export default function findLogo(array: arrayFindLogos[]) {
    const possibleLogos = [
        <BiLogoJavascript size={36} className="row-start-2 text-gray-400 dark:text-gray-200" />,
        <BiLogoTypescript size={36} className="row-start-2 text-gray-400 dark:text-gray-200" />,
        <BiLogoCss3 size={36} className="row-start-2 text-gray-400 dark:text-gray-200" />,
        <BiLogoHtml5 size={36} className="row-start-2 text-gray-400 dark:text-gray-200" />,
        <BiLogoReact size={36} className="row-start-2 text-gray-400 dark:text-gray-200" />,
        <BiLogoTailwindCss size={36} className="row-start-2 text-gray-400 dark:text-gray-200" />,
        <BiLogoMongodb size={36} className="row-start-2 text-gray-400 dark:text-gray-200" />,
        <SiExpo size={27} className="row-start-2 text-gray-400 dark:text-gray-200" />,
        <TbBrandNextjs size={34} className="row-start-2 text-gray-400 dark:text-gray-200" />,
        <BiLogoPostgresql size={34} className="row-start-2 text-gray-400 dark:text-gray-200" />
    ]
    const nameLogos = [
        "Javascript",
        "Typescript",
        "Css", 
        "Html",
        "React",
        "Tailwind",
        "MongoDB",
        "Expo",
        "Nextjs",
        "Postgre"
    ] as arrayFindLogos[]

    let logos: JSX.Element[] = []
    array.forEach(item => {
        for (let i = 0; i < nameLogos.length; i++) {
            if (item === nameLogos[i]) {
                logos.push(possibleLogos[i])
            }
        }
    })
    if (logos[0]) {
        return logos
    }
}