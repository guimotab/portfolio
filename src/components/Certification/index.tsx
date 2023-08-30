import { useState } from "react"
import FindFiles from "../../shared/utils/FindFiles"
import { FaRegEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
interface CertificationProps {
    viewKnowledges: string
    setViewKnowledges: React.Dispatch<React.SetStateAction<string>>
    openImage: string
    setOpenImage: React.Dispatch<React.SetStateAction<string>>
}
const Certification = ({ viewKnowledges, setViewKnowledges, openImage, setOpenImage }: CertificationProps) => {
    const images = FindFiles.filesDir(viewKnowledges.toLowerCase())
    const [positionArrayFiles, setPositionArrayFiles] = useState(0)
    const url = `./images/certification/${viewKnowledges.toLowerCase()}/${images.nameFile[positionArrayFiles]}`
    const basicrUrl = `./images/certification/${viewKnowledges.toLowerCase()}`

    function changePositionArrayFiles(index: number) {
        setPositionArrayFiles(index)
    }
    function downloadImage() {
        const a = document.createElement('a')!
        a.href = url
        a.download = url
        a.click()
    }

    function openImageOnScreen() {
        const body = document.getElementById('body')!
        setOpenImage(url)
        body.className = "flex flex-col items-center h-full bg-cor-clara overflow-x-hidden overflow-y-hidden"
    }
    return (
        <main className="flex flex-col gap-3 items-center w-full">
            <section className="flex justify-center w-full bg-cor-terciaria py-6">
                <div className="flex flex-col items-center w-full max-w-7xl gap-3">
                    <div className="flex items-start gap-3">
                        <img src={`${url}`} alt="imagem-certificado" className=" h-full max-h-[22rem]" />
                        <div className="flex flex-col justify-center h-full gap-6">
                            <FaRegEye size={46} onClick={event=> openImageOnScreen()} className="p-2 border-2 border-white text-white rounded-full hover:cursor-pointer"/>
                            <FaDownload size={46} onClick={event=> downloadImage()} className="p-2 border-2 border-white text-white rounded-full hover:cursor-pointer"/>
                        </div>
                    </div>
                    {images.nameFile.length > 1 ?
                        <div className="flex items-center gap-5">
                            {images.nameFile.map((item, index) =>
                                <>{index === positionArrayFiles ?
                                    <img key={index} src={`${basicrUrl}/${item}`} alt="certificado" className="w-40 cursor-pointer border-4 border-cor-hover" onClick={event => changePositionArrayFiles(index)} />
                                    :
                                    <img key={index} src={`${basicrUrl}/${item}`} alt="certificado" className="w-40 cursor-pointer" onClick={event => changePositionArrayFiles(index)} />
                                }</>
                            )}
                        </div> : ""
                    }
                </div>
            </section>
            <section className="flex flex-col gap-4 max-w-4xl w-full">
                <div className="flex flex-col gap-2">
                    <div className="">
                        <h1 className="font-bold text-3xl">Certificado: {images.nameFile[positionArrayFiles].split('.')[0]}</h1>
                        <h2 className="font-semibold text-2xl">O que eu aprendi?</h2>
                    </div>
                    <ul className="font-medium list-disc text-lg">
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