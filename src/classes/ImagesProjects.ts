import { projectFolderImages } from "@/types/projectFolderImages"
import slugProjects from "@/types/slugProjects"
import path from "path"
import fs from 'fs';

const foldersProjects = {
    guiBank: "Guibank", 
    iceCenter: "IceCenter",
    organoTable: "OrganoTable",
    pongGame: "PongGame",
    trainFit: "Trainfit",
} as Record<slugProjects, projectFolderImages>

export abstract class ImagesProjects {

    static getFolderProject(slug: slugProjects) {
        const folderProject = foldersProjects[slug]
        return folderProject
    }

    static getImages(slug: slugProjects, quantity: "first" | "all") {
        const folderProject = foldersProjects[slug]
        if (quantity === "first") {
            return this.imagesProject(folderProject)
        } else {
            const qtdImages = this.countImages(folderProject)
            return this.imagesProject(folderProject, qtdImages)
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

    private static countImages(pathImages: string) {
        const imageDirectory = path.join(process.cwd(), 'public', 'images', pathImages);

        // Verificar se o diretório existe
        if (!fs.existsSync(imageDirectory)) {
            return
        }

        const files = fs.readdirSync(imageDirectory);

        return files.length;
    }
}