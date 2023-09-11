
export abstract class FindImages {
    static findImagesProjects(nameProject: string) {
        const arrayImages = []
        if (nameProject === "../images/Guibank.jpg") {
            arrayImages.push(`../images/Guibank.jpg`)
            for (let i = 1; i < 5; i++) {
                arrayImages.push(`../images/GuiBank${i}.png`)
            }
        } else if (nameProject === "../images/OrganoTable.jpg") {
            arrayImages.push(`../images/OrganoTable.jpg`)
            for (let i = 1; i < 4; i++) {
                arrayImages.push(`../images/OrganoTable${i}.jpg`)
            }
        } else if (nameProject === "../images/PongGame.jpg") {
            arrayImages.push(`../images/PongGame.jpg`)
            for (let i = 1; i < 4; i++) {
                arrayImages.push(`../images/PongGame${i}.jpg`)
            }
        }
        return arrayImages
    }
    static findCertifications(typeKnowledges: string, arrayTitleCertification: string[]) {
        const basicrUrl = `./images/certification/${typeKnowledges.toLowerCase()}`
        const arrayImages = [] as string[]
        arrayTitleCertification.forEach(title => arrayImages.push(basicrUrl + `/${title}`))
        return arrayImages
    }
}