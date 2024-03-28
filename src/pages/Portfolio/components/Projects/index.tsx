import { StructureCardProject } from '../../../../interface/StructureCardsProjects';
import findLogo from '../../../../shared/utils/findLogo'
import CardsProjects from '../CardsProjects'
import { MdSmartphone } from "react-icons/md";
import { MdComputer } from "react-icons/md";
const Projects = () => {
    const logos = [
        {
            folder: "Trainfit",
            imageName: "Trainfit",
            qtdImagesInFolder: 2,
            title: "TrainFit",
            subtitle: 'Aplicativo para dispositivos móveis que te ajuda a analizar e registrar sua evolução/progressão na academia de forma dinâmica e personalizável.',
            altProject: "Projeto GuiBank",
            downloadApp: "../apk/trainfit.apk",
            logosTechnologies: findLogo(["React", "Css", "Html", "Expo"])!,
            support: [<MdSmartphone size={30} className='text-gray-400 dark:text-gray-200' />]
        }, {
            folder: "Guibank",
            imageName: "Guibank",
            qtdImagesInFolder: 5, 
            title: "GuiBank",
            subtitle: 'Aplicativo de banco virtual que te permite fazer todas as operações básicas como: sacar, depositar e transferir entre suas contas criadas, além de poder investir seu dinheiro na "caixinha" e fazê-lo render todos os dias.',
            altProject: "Projeto GuiBank",
            linkViewProject: "https://guibank.vercel.app/",
            linkViewCode: "https://github.com/guimotab/GuiBank-Mongodb",
            logosTechnologies: findLogo(["Typescript", "Css", "Html", "Tailwind", "MongoDB"])!,
            support: [<MdSmartphone size={30} className='text-gray-400 dark:text-gray-200' />, <MdComputer size={30} className='text-gray-400 dark:text-gray-200' />]
        }, {
            folder: "OrganoTable",
            imageName: "OrganoTable",
            qtdImagesInFolder: 5,
            title: "OrganoTable",
            subtitle: "Aplicativo de controle financeiro que vai te ajudar a medir e monitorar seus gastos de maneira simples, completa e dinâmica.",
            altProject: "Projeto OrganoTable",
            linkViewProject: "https://organo-table.vercel.app/",
            linkViewCode: "https://github.com/guimotab/OrganoTable",
            logosTechnologies: findLogo(["Typescript", "React", "Tailwind"])!,
            support: [<MdComputer size={30} className='text-gray-400 dark:text-gray-200' />]
        }, {
            folder: "PongGame",
            imageName: "PongGame",
            qtdImagesInFolder: 5,
            title: "Pong Game",
            subtitle: "Recriação do jogo clássico Pong com mecânicas diferentes com disponibilidade para 2 players.",
            altProject: "Projeto PongGame",
            linkViewProject: "https://pong-game-blue.vercel.app/",
            linkViewCode: "https://github.com/guimotab/Pong-Game",
            logosTechnologies: findLogo(["Javascript", "Css", "Html"])!,
            support: [<MdComputer size={30} className='text-gray-400 dark:text-gray-200' />]
        },
    ] as StructureCardProject[]
    return (
        <section id='projects' className="flex flex-col items-center w-full z-0">
            <div className='flex flex-col items-center gap-6 max-w-7xl w-full'>
                <h1 className='self-start font-bold text-2xl dark:text-gray-200'>Projetos</h1>
                <div className='grid grid-cols-1 w-full justify-between gap-5 lg:grid-cols-2'>
                    {logos.map((item, index) =>
                        <CardsProjects
                            key={index}
                            {...item}
                             />
                    )}
                </div>
            </div>
        </section >
    )
}

export default Projects