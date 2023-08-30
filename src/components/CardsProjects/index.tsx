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
        body.className = "flex flex-col items-center h-full bg-cor-clara overflow-x-hidden overflow-y-hidden"
    }
    return (
        <>
            <div className="flex flex-col gap-4 border w-full border-cor-terciaria h-full rounded-lg bg-white px-8 py-4 shadow-gray-600 shadow-lg opacity-60 hover:opacity-100 hover:animate-growProjects">
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl">{title}</h2>
                    <img src={imageProject} alt={altProject} onClick={event => openImageOnScreen()} className="rounded-lg border-cor-terciaria border-2 cursor-pointer hover:animate-shadowPopProject" />
                </div>
                <div className='flex flex-col gap-4 justify-between h-full'>
                    <p>{subtitle}</p>
                    <div className='flex justify-between items-end'>
                        <div className="flex flex-col gap-4">
                            <div className='flex items-start gap-5'>
                                <a href={linkViewProject} target="_blank" className='bg-cor-terciaria py-1 px-3 rounded-lg hover:bg-cor-hover'><FaRegEye size={24} color='white' /></a>
                                <a href={linkViewCode} target="_blank" className='bg-cor-terciaria py-1 px-3 rounded-lg hover:bg-cor-hover'><BiCodeAlt size={24} color='white' /></a>
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
                            <p className="font-medium">Suportado em:</p>
                            <div className="flex items-end justify-center gap-2">
                                {support.map((item, index) => <div key={index} className="h-fit">{item}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default CardsProjects