import ICardProject from "@/interface/ICardProject";
import handleLogosTechnologies from "@/utils/handleLogosTechnologies";

const projects = [
  {
    slug: "iceCenter",
    title: "Ice Center",
    resume: "Aplicativo de gerenciamento de empresas e lojas de sorvetes que faz desde a criação da empresa até a visualização do site da loja criada.",
    functionalities: [
      "Criação de empresas e redes de lojas.",
      "Gerenciamento completo da empresa e das lojas.",
      "Integração com ViaCep.",
      "Integração com GoogleMapsApi.",
      "Login com Tokens e RefreshTokens.",
      "Integração com Email (Em breve).",
    ],
    altProject: "Projeto IceCenter",
    linkViewProject: "https://icecenter.vercel.app/",
    linkViewCode: "https://github.com/guimotab/iceCenter",
    needBackend: true,
    logosTechnologies: handleLogosTechnologies(["Nextjs", "React", "Typescript", "Tailwind", "Postgre"])!,
    support: "Responsivo"
  },
  {
    slug: "trainFit",
    title: "TrainFit",
    resume: 'Aplicativo para dispositivos móveis que te ajuda a analizar e registrar sua evolução/progressão na academia de forma dinâmica e personalizável.',
    functionalities: ["Divisão de grupos de treinos personalizados.", "Estilização para cada grupo de treino.", "Predefinição dos treinos para cada divisão de grupos.", "Download/upload de seus dados."],
    altProject: "Projeto Trainfit",
    linkViewCode: "https://github.com/guimotab/trainFit.git",
    downloadApp: "../apk/trainfit.apk",
    logosTechnologies: handleLogosTechnologies(["React", "Typescript", "Css", "Html", "Expo"])!,
    support: "Celular"
  },
  {
    slug: "guiBank",
    title: "GuiBank",
    resume: 'Aplicativo de banco virtual que simula as funcionalidades de um banco virtual convencional.',
    functionalities: ["Informações salvas no localstorage.", "Sacar, depositar e transferir entre contas.", "Aba de investimentos de rendimento diário.", "Extratos.", "Edição de suas informações."],
    altProject: "Projeto GuiBank",
    linkViewProject: "https://guibank.vercel.app/",
    linkViewCode: "https://github.com/guimotab/GuiBank-Mongodb",
    logosTechnologies: handleLogosTechnologies(["Typescript", "Css", "Html", "Tailwind"])!,
    support: "Responsivo"
  },
  {
    slug: "organoTable",
    title: "OrganoTable",
    resume: "Aplicativo de controle financeiro para te ajudar a medir e monitorar seus gastos de maneira simples, completa e dinâmica.",
    functionalities: ["Informações salvas no localstorage.", "Cálculos automáticos.", "Criação de novos gastos dinamicamente."],
    altProject: "Projeto OrganoTable",
    linkViewProject: "https://organo-table.vercel.app/",
    linkViewCode: "https://github.com/guimotab/OrganoTable",
    logosTechnologies: handleLogosTechnologies(["Typescript", "React", "Tailwind"])!,
    support: "Computador"
  },
  {
    slug: "pongGame",
    title: "Pong Game",
    resume: "Recriação do jogo clássico Pong com mecânicas diferentes com disponibilidade para 2 players.",
    functionalities: ["Jogo multiplayer.", "Adição de poderes ao jogo."],
    altProject: "Projeto PongGame",
    linkViewProject: "https://pong-game-blue.vercel.app/",
    linkViewCode: "https://github.com/guimotab/Pong-Game",
    logosTechnologies: handleLogosTechnologies(["Javascript", "Css", "Html"])!,
    support: "Computador"
  },
] as ICardProject[]

export default projects