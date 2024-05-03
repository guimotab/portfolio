import ICardProject from "@/interface/ICardProject";
import handleLogosTechnologies from "@/utils/handleLogosTechnologies";

/**
 * Array contendo os projetos, sendo o resume e features modificados nos arquivos em messages/.json
 */
const projects = [
  {
    slug: "chatworker",
    title: "ChatWorker",
    resume: "chatWorkerDesc",
    features: [
      "chatWorkerF1",
      "chatWorkerF2",
      "chatWorkerF3",
      "chatWorkerF4",
      "chatWorkerF5",
      "chatWorkerF6",
      "chatWorkerF7",
      "chatWorkerF8",
    ],
    comingSoon: true,
    altProject: "Projeto ChatWorker",
    logosTechnologies: handleLogosTechnologies(["Nextjs", "React", "Typescript", "Tailwind", "Postgre", "MongoDB"])!,
    support: "Responsivo"
  },
  {
    slug: "iceCenter",
    title: "Ice Center",
    resume: "iceCenterDesc",
    features: [
      "iceCenterF1",
      "iceCenterF2",
      "iceCenterF3",
      "iceCenterF4",
      "iceCenterF5",
      "iceCenterF6",
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
    title: "TrainFit (Mobile)",
    resume: "trainFitDesc",
    features: [
      "trainFitF1",
      "trainFitF2",
      "trainFitF3",
      "trainFitF4",
    ],
    altProject: "Projeto Trainfit",
    linkViewCode: "https://github.com/guimotab/trainfit-mobile.git",
    downloadApp: "../apk/trainfit.apk",
    logosTechnologies: handleLogosTechnologies(["React", "Typescript", "Css", "Html", "Expo"])!,
    support: "Celular"
  },
  {
    slug: "guiBank",
    title: "GuiBank",
    resume: "guiBankDesc",
    features: [
      "guiBankF1",
      "guiBankF2",
      "guiBankF3",
      "guiBankF4",
      "guiBankF5",
    ],
    altProject: "Projeto GuiBank",
    linkViewProject: "https://guibank.vercel.app/",
    linkViewCode: "https://github.com/guimotab/GuiBank-Mongodb",
    logosTechnologies: handleLogosTechnologies(["Typescript", "Css", "Html", "Tailwind"])!,
    support: "Responsivo"
  },
  {
    slug: "organoTable",
    title: "OrganoTable",
    resume: "organoTableDesc",
    features: [
      "organoTableF1",
      "organoTableF2",
      "organoTableF3",
    ],
    altProject: "Projeto OrganoTable",
    linkViewProject: "https://organo-table.vercel.app/",
    linkViewCode: "https://github.com/guimotab/OrganoTable",
    logosTechnologies: handleLogosTechnologies(["Typescript", "React", "Tailwind"])!,
    support: "Computador"
  },
  {
    slug: "pongGame",
    title: "Pong Game",
    resume: "pongGameDesc",
    features: [
      "pongGameF1",
      "pongGameF2",
    ],
    altProject: "Projeto PongGame",
    linkViewProject: "https://pong-game-blue.vercel.app/",
    linkViewCode: "https://github.com/guimotab/Pong-Game",
    logosTechnologies: handleLogosTechnologies(["Javascript", "Css", "Html"])!,
    support: "Computador"
  },
] as ICardProject[]

export default projects