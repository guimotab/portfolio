import findLogo from '../../shared/utils/findLogo'
import CardsProjects from '../CardsProjects'
import { MdSmartphone } from "react-icons/md";
import { MdComputer } from "react-icons/md";

const Projects = () => {

    const logos = [
        {
            imageProject: "../images/Guibank.jpg",
            title: "GuiBank",
            subtitle: "Aplicativo de banco para sacar, depositar, transferir entre contas, depositar e investir.",
            altProject: "Projeto GuiBank",
            linkViewProject: "https://guibank.vercel.app/",
            linkViewCode: "",
            logosTechnologies: findLogo(["Typescript", "Css", "Html", "Tailwind", "MongoDB"])!,
            support: [<MdSmartphone size={30} className='text-gray-400'/>, <MdComputer size={30} className='text-gray-400'/>]
        }, {
            imageProject: "../images/OrganoTable.jpg",
            title: "OrganoTable",
            subtitle: "Aplicativo para medir e monitorar seus gastos de maneira simples, completa e dinâmica.",
            altProject: "Projeto OrganoTable",
            linkViewProject: "https://organo-table.vercel.app/",
            linkViewCode: "",
            logosTechnologies: findLogo(["Typescript", "React", "Tailwind"])!,
            support: [<MdComputer size={30} className='text-gray-400'/>]
        }, {
            imageProject: "../images/PongGame.jpg",
            title: "Pong Game",
            subtitle: "Recriação do jogo clássico Pong com mecânicas diferentes.",
            altProject: "Projeto PongGame",
            linkViewProject: "https://pong-game-blue.vercel.app/",
            linkViewCode: "",
            logosTechnologies: findLogo(["Javascript", "Css", "Html"])!,
            support: [<MdComputer size={30} className='text-gray-400'/>]
        },
    ]
    return (
        <section id='projects' className="flex flex-col w-full gap-6 ">
            <h1 className='font-bold text-2xl'>Projetos</h1>
            <div className='grid grid-cols-2 justify-between gap-5'>
                {logos.map((item, index) =>
                    <CardsProjects
                        key={index}
                        imageProject={item.imageProject}
                        altProject={item.altProject}
                        title={item.title}
                        subtitle={item.subtitle}
                        linkViewProject={item.linkViewProject}
                        linkViewCode={item.linkViewCode}
                        logosTechnologies={item.logosTechnologies} 
                        support={item.support}/>
                )}
            </div>
        </section >
    )
}

export default Projects