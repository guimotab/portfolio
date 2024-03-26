import { arrayFindLogos } from "../types/arrayFindLogo"
import { imagesProjects } from "../types/imagesProject"

export interface StructureCardProject {
  imageProject: imagesProjects,
  title: string,
  subtitle: string,
  altProject: string,
  linkViewProject?: string,
  linkViewCode?: string,
  downloadApp?: string,
  logosTechnologies: JSX.Element[],
  support: JSX.Element[]
}