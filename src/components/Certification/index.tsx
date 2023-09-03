import { useEffect, useState } from "react"
import FindFiles from "../../shared/utils/FindFiles"
import { FaRegEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface CertificationProps {
    viewKnowledges: string
    setViewKnowledges: React.Dispatch<React.SetStateAction<string>>
    openImage: string
    setOpenImage: React.Dispatch<React.SetStateAction<string>>
}
let numberPositionArrayFiles = 0
const Certification = ({ viewKnowledges, setViewKnowledges, openImage, setOpenImage }: CertificationProps) => {
    const images = FindFiles.filesDir(viewKnowledges.toLowerCase())
    const [positionArrayFiles, setPositionArrayFiles] = useState(0)
    const url = `./images/certification/${viewKnowledges.toLowerCase()}/${images.nameFile[positionArrayFiles]}`
    const basicrUrl = `./images/certification/${viewKnowledges.toLowerCase()}`
    const [otherCertifications, setOtherCertifications] = useState(constructOthersImages())

    useEffect(() => {
        window.addEventListener("resize", () => setOtherCertifications(constructOthersImages()))
    }, [])

    function downloadImage() {
        const a = document.createElement('a')!
        a.href = url
        a.download = url
        a.click()
    }
    function openImageOnScreen() {
        const body = document.getElementById('body')!
        setOpenImage(url)
        body.className = "overflow-x-hidden overflow-y-hidden"
    }

    function setNumberPositionArrayFiles(operation: number) {
        const result = numberPositionArrayFiles + operation
        if (result >= 0 && result <= images.nameFile.length - 1) {
            numberPositionArrayFiles = result
            setPositionArrayFiles(numberPositionArrayFiles)
        }
    }
    function constructOthersImages() {
        if (window.innerWidth > 640) {
            const result = images.nameFile.map((item, index) =>
                <>{index === positionArrayFiles ?
                    <img key={index} src={`${basicrUrl}/${item}`} alt="certificado" className="w-full max-w-[10rem] cursor-pointer border-4 border-cor-hover" onClick={event => setPositionArrayFiles(index)} />
                    :
                    <img key={index} src={`${basicrUrl}/${item}`} alt="certificado" className="w-full max-w-[10rem] cursor-pointer" onClick={event => setPositionArrayFiles(index)} />
                }</>
            )
            return result
        } else {
            const result = <div className="flex justify-between w-full max-w-[12rem]">
                <BsFillArrowLeftCircleFill className="w-10 h-10 text-white" onClick={event => setNumberPositionArrayFiles(-1)} />
                <BsFillArrowRightCircleFill className="w-10 h-10 text-white" onClick={event => setNumberPositionArrayFiles(1)} />
            </div>
            return result
        }
    }
    return (
        <main className="flex flex-col gap-3 items-center w-full">
            <section className="flex justify-center w-full bg-cor-terciaria py-6 px-6 sm:px-20">
                <div className="flex flex-col items-center w-full max-w-7xl gap-3">
                    <div className="flex items-start gap-3">
                        <img src={`${url}`} alt="imagem-certificado" className="w-full max-w-[15rem] sm:w-80 md:max-w-[30rem] md:w-[30rem] h-full max-h-[22rem]" />
                        <div className="flex flex-col justify-center h-full gap-6">
                            <FaRegEye onClick={event => openImageOnScreen()} className="w-8 h-8 sm:w-12 sm:h-12 p-2 border-2 border-white text-white rounded-full hover:cursor-pointer" />
                            <FaDownload onClick={event => downloadImage()} className="w-8 h-8 sm:w-12 sm:h-12 p-2 border-2 border-white text-white rounded-full hover:cursor-pointer" />
                        </div>
                    </div>
                    {images.nameFile.length > 1 ?
                        <div className="flex justify-center gap-5 w-full">
                            {otherCertifications}
                        </div> : ""
                    }
                </div>
            </section>
            <section className="flex flex-col gap-4 max-w-4xl w-full px-8 sm:px-20">
                <div className="flex flex-col gap-2">
                    <div className="">
                        <h1 className="font-bold text-2xl sm:text-3xl">Certificado: {images.nameFile[positionArrayFiles].split('.')[0]}</h1>
                        <h2 className="font-semibold text-lg sm:text-xl">O que eu aprendi?</h2>
                    </div>
                    <ul className="font-medium list-disc sm:text-lg">
                        {images.description[positionArrayFiles].map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                </div>
                <button onClick={event => setViewKnowledges("")} className="w-fit bg-cor-terciaria px-4 py-1 text-white rounded-lg font-medium text-xl hover:bg-cor-hover">Voltar</button>
            </section>
        </main>
    )
}
export default Certification