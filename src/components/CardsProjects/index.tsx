import { BiCodeAlt } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";

export interface CardsProjectsProps {
    imageProject: string;
    title: string;
    subtitle: string;
    altProject: string;
    linkViewProject: string;
    linkViewCode: string;
    logosTechnologies: JSX.Element[];
    support: JSX.Element[];
    setOpenImage: React.Dispatch<React.SetStateAction<string>>
}
const CardsProjects = ({ imageProject, altProject, title, subtitle, linkViewProject, linkViewCode, logosTechnologies, support, setOpenImage }: CardsProjectsProps) => {

    function openImageOnScreen() {
        const body = document.getElementById('body')!
        setOpenImage(`${imageProject}`)
        body.classList.add("overflow-y-hidden") 
    }
    return (
        <div className="flex flex-col gap-4 border border-cor-terciaria h-full rounded-lg bg-white dark:bg-cor-terciaria px-8 py-4 shadow-gray-600 dark:shadow-none shadow-lg opacity-60 hover:opacity-100 hover:animate-growProjects">
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-xl dark:text-gray-200">{title}</h2>
                <img src={imageProject} alt={altProject} onClick={event => openImageOnScreen()} className="rounded-lg border-cor-terciaria dark:border-cor-darkHover border-2 dark:border-4 cursor-pointer hover:animate-shadowPopProject" />
            </div>
            <div className='flex flex-col gap-4 justify-between h-full'>
                <p className="dark:text-gray-200">{subtitle}</p>
                <div className='flex justify-between items-end'>
                    <div className="flex flex-col gap-4">
                        <div className='flex items-start gap-5'>
                            <a href={linkViewProject} target="_blank" className='bg-cor-terciaria py-1 px-3 rounded-lg hover:bg-cor-hover dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'><FaRegEye size={24} className="text-white dark:text-gray-200" /></a>
                            <a href={linkViewCode} target="_blank" className='bg-cor-terciaria py-1 px-3 rounded-lg hover:bg-cor-hover dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'><BiCodeAlt size={24} className="text-white dark:text-gray-200" /></a>
                        </div>
                        <div className='flex items-center'>
                            {logosTechnologies.map((item, index) =>
                                <div key={index}>
                                    {item}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-medium dark:text-gray-200">Suportado em:</p>
                        <div className="flex items-end justify-center gap-2">
                            {support.map((item, index) => <div key={index} className="h-fit">{item}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardsProjects