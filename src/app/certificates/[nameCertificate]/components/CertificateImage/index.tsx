import Certificates from "@/classes/Certificates"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import nameCertificates from "@/types/nameCertificates"
import { url } from "inspector"
import { useParams } from "next/navigation"
import { Dispatch, SetStateAction, useState } from "react"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { FaRegEye, FaDownload } from "react-icons/fa6"

interface CertificateImageProps {
  setFilesArrayPosition: Dispatch<SetStateAction<number>>
  filesArrayPosition: number
  setOpenImage: Dispatch<SetStateAction<boolean>>
}

const CertificateImage = ({ setFilesArrayPosition, filesArrayPosition, setOpenImage }: CertificateImageProps) => {
  const { nameCertificate } = useParams() as { nameCertificate: nameCertificates }
  const certificates = Certificates.find(nameCertificate)

  const basicrUrl = `../images/certification/${nameCertificate!.toLowerCase()}`
  const url = `../images/certification/${nameCertificate!.toLowerCase()}/${certificates.nameFiles[filesArrayPosition]}`



  function openImageOnScreen() {
    const image = Certificates.getImages(nameCertificate, certificates)
    setOpenImage(true)
  }

  function nextPositionArrayFiles() {
    const result = positionArrayFile + 1
    if (result <= certificates.nameFiles.length - 1) {
      setFilesArrayPosition(numberPositionArrayFiles)
    }
  }

  function prevPositionArrayFiles() {
    const result = numberPositionArrayFiles - 1
    if (result >= 0) {
      numberPositionArrayFiles = result
      setFilesArrayPosition(numberPositionArrayFiles)
    }
  }

  return (
    <section className="flex justify-center w-full ">
      <div className="flex flex-col items-center w-full max-w-7xl gap-3">

        <img src={`${url}`} alt="imagem-certificado" className="w-full max-w-[15rem] sm:w-80 md:max-w-[30rem] md:w-[30rem] h-full max-h-[22rem]" />


        {certificates.nameFiles.length > 1 &&
          <div className="flex items-center justify-between w-full max-w-[12rem]">
            <BsFillArrowLeftCircleFill className="w-10 h-10 text-primary" onClick={prevPositionArrayFiles} />
            <Button>
              <FaRegEye onClick={event => openImageOnScreen()}
                className="h-5 w-5" />
              <Label>Visualizar</Label>
            </Button>
            <BsFillArrowRightCircleFill className="w-10 h-10 text-primary" onClick={nextPositionArrayFiles} />
          </div>
        }
      </div>
    </section>
  )
}

export default CertificateImage