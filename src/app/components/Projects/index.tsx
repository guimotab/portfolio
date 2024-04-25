import { projectFolderImages } from "@/types/projectFolderImages"
import handleLogosTechnologies from "@/utils/handleLogosTechnologies"
import ProjectCard from "./ProjectCard"
import { useEffect, useRef, useState } from "react"

export interface StructureCardProject {
  folder: projectFolderImages,
  imageName: string
  qtdImagesInFolder: number,
  title: string,
  subtitle: string,
  functionalities: string[]
  altProject: string,
  linkViewProject?: string,
  linkViewCode?: string,
  downloadApp?: string,
  logosTechnologies: JSX.Element[],
  support: "Celular" | "Computador" | "Responsivo"
}

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
      logosTechnologies: handleLogosTechnologies(["Nextjs", "React",
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
      logosTechnologies: handleLogosTechnologies(["React", "Typescript", "Css", "Html", "Expo"])!,
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
      logosTechnologies: handleLogosTechnologies(["Typescript", "Css", "Html", "Tailwind"])!,
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
      logosTechnologies: handleLogosTechnologies(["Typescript", "React", "Tailwind"])!,
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
      logosTechnologies: handleLogosTechnologies(["Javascript", "Css", "Html"])!,
      support: "Computador"
    },
  ] as StructureCardProject[]

  const [mouseOverProject, setMouseOverProject] = useState<string>("")

  useEffect(() => {
    const idProjects = logos.map(logo => logo.title)

    const findedId = idProjects.find(id => id === mouseOverProject)
    if (findedId) {
      idProjects.forEach(id => {
        if (id !== findedId) {
          const element = document.getElementById(id)
          element?.classList.add("opacity-40")
        } else {
          const element = document.getElementById(id)
          element?.classList.remove("opacity-40")
        }
      })
    } else {
      idProjects.forEach(id => {
        const element = document.getElementById(id)
        element?.classList.remove("opacity-40")
      })
    }
  }, [mouseOverProject])

  return (
    <section id='projects' className="flex flex-col items-center w-full z-0">
      <div className='flex flex-col items-center gap-6 max-w-7xl w-full'>
        <h1 className='self-start font-bold text-2xl dark:text-gray-200'>Projetos</h1>
        <div className='grid grid-cols-1 w-full justify-between gap-5 lg:grid-cols-2'>
          {logos.map((item, index) =>
            <ProjectCard
              key={index}
              setMouseOverProject={setMouseOverProject}
              item={item}
            />
          )}
        </div>
      </div>
    </section >
  )
}

export default Projects