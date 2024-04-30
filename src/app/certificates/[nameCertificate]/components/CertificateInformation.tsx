"use client"
import Certificates from "@/classes/Certificates"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import nameCertificates from "@/types/nameCertificates"
import Link from "next/link"
import { useParams } from "next/navigation"
import { MdFileDownload } from "react-icons/md";
interface CertificateInformationProps {
  certificate: {
    name: string;
    description: string[];
  }
}
const CertificateInformation = ({ certificate }: CertificateInformationProps) => {
  const { nameCertificate } = useParams() as { nameCertificate: nameCertificates }

  function downloadImage() {
    const url = `../images/certification/${nameCertificate!.toLowerCase()}/${certificate.name}`
    const a = document.createElement('a')!
    a.href = url
    a.download = url
    a.click()
  }
  return (
    <section className="flex flex-col pt-4 max-w-4xl gap-6">
      <div className="space-y-3">
        <div className="flex flex-col">
          <Label className="font-bold text-xl sm:text-2xl">Certificado: {certificate.name.split('.')[0]}</Label>
          <Label className="font-semibold  sm:text-lg">O que eu aprendi?</Label>
        </div>
        <div className="font-medium list-disc">
          {certificate.description.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between w-full max-w-[20rem]">
        <Button onClick={downloadImage} className="space-x-2">
          <MdFileDownload className="w-6 h-6" />
          <Label>Baixar certificado</Label>
        </Button> 
      </div>
    </section>
  )
}

export default CertificateInformation