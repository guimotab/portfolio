import { projectFolderImages } from "@/types/projectFolderImages"
import slugProjects from "@/types/slugProjects"
interface IProjectsFolder {
    name: projectFolderImages,
    qtdImages: number
}

const foldersProjects = {
    guiBank: { name: "Guibank", qtdImages: 5 },
    iceCenter: { name: "IceCenter", qtdImages: 5 },
    organoTable: { name: "OrganoTable", qtdImages: 4 },
    pongGame: { name: "PongGame", qtdImages: 4 },
    trainFit: { name: "Trainfit", qtdImages: 2 },
    chatworker: { name: "ChatWorker", qtdImages: 1 },
} as Record<slugProjects, IProjectsFolder>

export abstract class ImagesProjects {

    static getFolderProject(slug: slugProjects) {
        const folderProject = foldersProjects[slug]
        return folderProject
    }

    static getImages(slug: slugProjects, quantity: "first" | "all") {
        const folderProject = foldersProjects[slug]
        if (quantity === "first") {
            return this.imagesProject(folderProject.name)
        } else {
            return this.imagesProject(folderProject.name, folderProject.qtdImages)
        }
    }

    private static imagesProject(image: string, qtdImages?: number) {
        if (!qtdImages) {
            return `../images/${image}/${image}.jpg`
        }
        const arrayImages = []
        arrayImages.push(`../images/${image}/${image}.jpg`)
        for (let i = 1; i < qtdImages; i++) {
            arrayImages.push(`../images/${image}/${image}${i}.jpg`)
        }
        return arrayImages
    }
}