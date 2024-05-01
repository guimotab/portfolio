import slugProjects from "@/types/slugProjects"

export default interface ICardProject {
  slug: slugProjects
  title: string,
  resume: string
  features: string[]
  altProject: string,
  linkViewProject?: string,
  linkViewCode?: string,
  downloadApp?: string,
  needBackend?: boolean
  comingSoon?: boolean
  logosTechnologies: JSX.Element[],
  support: "Celular" | "Computador" | "Responsivo"
}