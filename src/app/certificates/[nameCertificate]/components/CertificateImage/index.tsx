import Certificates from "@/classes/Certificates"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import nameCertificates from "@/types/nameCertificates"
import { useParams } from "next/navigation"

interface CertificateImageProps {
  certificate: string
}

const CertificateImage = ({ certificate }: CertificateImageProps) => {
  const { nameCertificate } = useParams() as { nameCertificate: nameCertificates }
  const certificates = Certificates.find(nameCertificate)
  const urlBase = `../images/certification/${nameCertificate!.toLowerCase()}`

  return (
    <section className="flex flex-col justify-center w-full ">
      <img src={`${urlBase}/${certificate}`} alt="imagem-certificado" className="w-full max-w-[15rem] sm:w-80 md:max-w-[30rem] md:w-[30rem] h-full max-h-[22rem" />
    </section>
  )
}

export default CertificateImage