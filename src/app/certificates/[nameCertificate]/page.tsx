"use client"
import { useParams } from "next/navigation";
import Certificates from "@/classes/Certificates";
import nameCertificates from "@/types/nameCertificates";
import Link from "next/link";
import CertificateInformation from "./components/CertificateInformation";
import CertificateImage from "./components/CertificateImage";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoHome } from "react-icons/io5";
import { Label } from "@/components/ui/label";

const Certificate = () => {
  const { nameCertificate } = useParams() as { nameCertificate: nameCertificates }
  const currentCertificates = Certificates.find(nameCertificate)

  return (
    <main className="flex flex-col items-center gap-3 w-full">
      <div className="w-full flex flex-col max-w-[70rem] py-8">
        <div className="flex items-center gap-5">
          <Label className="text-2xl font-semibold">Certificado {nameCertificate}</Label>
          <Link href={`/`}>
            <Button className="space-x-2">
              <IoHome className="w-5 h-5 " />
              <Label>Voltar</Label>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center w-full">
          {currentCertificates.nameFiles.map(certificate =>
            <Card key={certificate} className="flex w-full justify-between px-5">
              <CertificateImage certificate={certificate} />
              <CertificateInformation certificate={certificate}  />
            </Card>
          )}
        </div>
      </div>
    </main >
  )
}
export default Certificate