import nameCertificates from "@/types/nameCertificates"

export default interface ICertificates {
  name: nameCertificates
  values: {
    name: string
    description: string[]
  }[]
}