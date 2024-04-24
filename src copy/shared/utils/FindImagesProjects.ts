
export abstract class FindImages {
    static findImagesProjects(folder: string, nameImage: string, qtdImages: number) {
        const arrayImages = []
        arrayImages.push(`../images/${folder}/${nameImage}.jpg`)
        for (let i = 1; i < qtdImages; i++) {
            arrayImages.push(`../images/${folder}/${nameImage}${i}.jpg`)
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