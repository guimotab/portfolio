"use client"
import { useParams } from "next/navigation";
import Certificates from "@/classes/Certificates";
import nameCertificates from "@/types/nameCertificates";
import CertificateInformation from "./components/CertificateInformation";
import CertificateImage from "./components/CertificateImage";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Theme from "@/classes/Theme";

const Certificate = () => {
  const { nameCertificate } = useParams() as { nameCertificate: nameCertificates }
  const currentCertificates = Certificates.find(nameCertificate)
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    Theme.preferenceTheme()
    setCanRender(true)
  }, []);

  return canRender && currentCertificates && (
    <>
      <Header nameCertificate={nameCertificate} />
      <main className="flex flex-col items-center gap-3 w-full sm:px-10 px-8">
        <div className="w-full flex flex-col max-w-[70rem] py-8 gap-5">
          <div className="flex items-center gap-5">
            <Label className="text-2xl font-semibold">Certificado {nameCertificate}</Label>
          </div>
          <div className="flex flex-col gap-5 items-center w-full">
            {currentCertificates.values.map(certificate =>
              <Card key={certificate.name} className="flex w-full gap-7 px-5 py-4  flex-wrap">
                <CertificateImage certificate={certificate} />
                <CertificateInformation certificate={certificate} />
              </Card>
            )}
          </div>
        </div>
      </main >
    </>
  )
}
export default Certificate