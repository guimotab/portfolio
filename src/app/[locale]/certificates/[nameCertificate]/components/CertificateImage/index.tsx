import nameCertificates from "@/types/nameCertificates"
import { useParams } from "next/navigation"

interface CertificateImageProps {
  certificate: {
    name: string;
    description: string[];
  }
}

const CertificateImage = ({ certificate }: CertificateImageProps) => {
  const { nameCertificate } = useParams() as { nameCertificate: nameCertificates }
  const urlBase = `../../images/certification/${nameCertificate!.toLowerCase()}`

  return (
    <section className="flex flex-col justify-center w-fit ">
      <img src={`${urlBase}/${certificate.name}`} alt="imagem-certificado" className="w-full max-w-[30rem] h-full max-h-[22rem] rounded-md" />
    </section>
  )
}

export default CertificateImage