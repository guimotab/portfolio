import { StructureCardProject } from '../../../../interface/StructureCardsProjects';
import findLogo from '../../../../shared/utils/findLogo'
import CardsProjects from '../CardsProjects'
const Projects = () => {
    const logos = [
        {
            folder: "IceCenter",
            imageName: "Icecenter",
            qtdImagesInFolder: 5,
            title: "Ice Center",
            subtitle: 'Aplicativo de gerenciamento de empresas e lojas de sorvetes que faz desde a criação da empresa até a visualização do site da loja criada. Obs.: Para utilizar o programa, necessita do backend rodando!',
            functionalities: [
                "Criação de empresas e redes de lojas.",
                "Gerenciamento completo da empresa e das lojas.",
                "Integração com ViaCep.",
                "Ingração com GoogleMapsApi.",
                "Login com Tokens e RefreshTokens.",
                "Integração com Email (Em breve).",
            ],
            altProject: "Projeto IceCenter",
            linkViewProject: "https://icecenter.vercel.app/",
            linkViewCode: "https://github.com/guimotab/iceCenter",
            logosTechnologies: findLogo(["Nextjs", "React",
                "Typescript", "Tailwind", "Postgre"])!,
            support: "Responsivo"
        }, {
            folder: "Trainfit",
            imageName: "Trainfit",
            qtdImagesInFolder: 2,
            title: "TrainFit",
            subtitle: 'Aplicativo para dispositivos móveis que te ajuda a analizar e registrar sua evolução/progressão na academia de forma dinâmica e personalizável.',
            functionalities: ["Divisão de grupos de treinos personalizados.", "Estilização para cada grupo de treino.", "Predefinição dos treinos para cada divisão de grupos.", "Download/upload de seus dados."],
            altProject: "Projeto Trainfit",
            downloadApp: "../apk/trainfit.apk",
            logosTechnologies: findLogo(["React", "Css", "Html", "Expo"])!,
            support: "Celular"
        }, {
            folder: "Guibank",
            imageName: "Guibank",
            qtdImagesInFolder: 5,
            title: "GuiBank",
            subtitle: 'Aplicativo de banco virtual que simula as funcionalidades de um banco virtual convencional.',
            functionalities: ["Sacar, depositar e transferir entre contas.", "Aba de investimentos de rendimento diário.", "Extratos.", "Edição de suas informações."],
            altProject: "Projeto GuiBank",
            linkViewProject: "https://guibank.vercel.app/",
            linkViewCode: "https://github.com/guimotab/GuiBank-Mongodb",
            logosTechnologies: findLogo(["Typescript", "Css", "Html", "Tailwind"])!,
            support: "Responsivo"
        }, {
            folder: "OrganoTable",
            imageName: "OrganoTable",
            qtdImagesInFolder: 4,
            title: "OrganoTable",
            subtitle: "Aplicativo de controle financeiro para te ajudar a medir e monitorar seus gastos de maneira simples, completa e dinâmica.",
            functionalities: ["Cálculos automáticos.", "Criação de novos gastos dinamicamente.", "Armazenamento local."],
            altProject: "Projeto OrganoTable",
            linkViewProject: "https://organo-table.vercel.app/",
            linkViewCode: "https://github.com/guimotab/OrganoTable",
            logosTechnologies: findLogo(["Typescript", "React", "Tailwind"])!,
            support: "Computador"
        }, {
            folder: "PongGame",
            imageName: "PongGame",
            qtdImagesInFolder: 4,
            title: "Pong Game",
            subtitle: "Recriação do jogo clássico Pong com mecânicas diferentes com disponibilidade para 2 players.",
            functionalities: ["Jogo multiplayer.", "Adição de poderes ao jogo."],
            altProject: "Projeto PongGame",
            linkViewProject: "https://pong-game-blue.vercel.app/",
            linkViewCode: "https://github.com/guimotab/Pong-Game",
            logosTechnologies: findLogo(["Javascript", "Css", "Html"])!,
            support: "Computador"
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