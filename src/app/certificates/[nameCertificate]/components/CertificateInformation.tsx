"use client"
import Certificates from "@/classes/Certificates"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import nameCertificates from "@/types/nameCertificates"
import Link from "next/link"
import { useParams } from "next/navigation"
import { IoHome } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
interface CertificateInformationProps {
  filesArrayPosition: number
}
const CertificateInformation = ({ filesArrayPosition }: CertificateInformationProps) => {
  const { nameCertificate } = useParams() as { nameCertificate: nameCertificates }
  const certificates = Certificates.find(nameCertificate)
  const url = `../images/certification/${nameCertificate!.toLowerCase()}/${certificates.nameFiles[filesArrayPosition]}`
  function downloadImage() {
    const a = document.createElement('a')!
    a.href = url
    a.download = url
    a.click()
  }
  return (
    <section className="flex flex-col items-center pt-8 max-w-4xl w-full gap-6">
      <div>
        <div className="flex flex-col">
          <Label className="font-bold text-xl sm:text-2xl">Certificado: {certificates.nameFiles[filesArrayPosition].split('.')[0]}</Label>
          <Label className="font-semibold  sm:text-lg">O que eu aprendi?</Label>
        </div>
        <div className="font-medium list-disc">
          {certificates.description[filesArrayPosition].map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between w-full  max-w-[20rem]">
        <Button onClick={downloadImage} className="space-x-2">
          <MdFileDownload className="w-6 h-6 " />
          <Label>Baixar Certificado</Label>
        </Button>

        <Link href={`/`}>
          <Button className="space-x-2">
            <IoHome className="w-5 h-5 " />
            <Label>Voltar</Label>
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default CertificateInformation