import { folderProjects } from "../types/imagesProject"

export interface StructureCardProject {
  folder: folderProjects,
  imageName: string
  qtdImagesInFolder: number,
  title: string,
  subtitle: string,
  altProject: string,
  linkViewProject?: string,
  linkViewCode?: string,
  downloadApp?: string,
  logosTechnologies: JSX.Element[],
  support: JSX.Element[]
}