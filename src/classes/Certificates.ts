import certificates from "@/const/certificates"
import ICertificates from "@/interface/ICertificates"
import nameCertificates from "@/types/nameCertificates"

export default abstract class Certificates {
  static find(name: nameCertificates) {
    const findedCertificate = certificates.find(certificate => certificate.name === name)!
    return findedCertificate
  }

  static getImages(nameCertificate: nameCertificates, currentCertificates: ICertificates) {
    const basicrUrl = `../images/certification/${nameCertificate.toLowerCase()}`
    const arrayImages = [] as string[]
    currentCertificates.values.forEach(certificate => arrayImages.push((basicrUrl + `/${certificate.name}`).toLowerCase()))
    return arrayImages
} 
} 