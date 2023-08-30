import Header from "../components/Header";
import { useEffect, useState } from 'react';
import Main from "../components/Main";
import Certification from "../components/Certification";
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import scrollWindow from "../shared/utils/scrollWindow";

function Portfolio() {
  const [viewKnowledges, setViewKnowledges] = useState("")
  const [openImage, setOpenImage] = useState("")
  const [rollTopPage, setRollTopPage] = useState(false)

  document.addEventListener('scroll', event => {
    if (window.scrollY > 400) {
      setRollTopPage(true)

    } else {
      setRollTopPage(false)
    }

  })


  function closeImageOnScreen(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const body = document.getElementById('body')!
    const imageScreen = document.getElementById('imgScreen')!
    if (event.target !== imageScreen) {
      setOpenImage("")
      body.className = "flex flex-col items-center h-full bg-cor-clara overflow-x-hidden"
    }
  }
  useEffect(() => {
    const rem = (window.scrollY / 17).toFixed(0)
    const imgScreen = document.getElementById('imgScreen')!
    if (openImage !== "") {
      setRollTopPage(false)
      const divImgScreen = document.getElementById("divImgScreen")!
      divImgScreen.className = `absolute flex items-center justify-center z-20 left-0 top-[${rem}rem] h-screen w-screen`
      divImgScreen.style.top = `${rem}rem`
      if (openImage[1] !== ".") {
        imgScreen.style.width = "60rem"
      } else {
        imgScreen.style.width = "80rem"
      }
    }
    if (window.scrollY > 400) {
      setRollTopPage(true)
    } 
  }, [openImage])
  return (

    <div className="flex relative flex-col w-screen">
      {openImage !== "" ?
        <div id="divImgScreen" onClick={event => closeImageOnScreen(event)} className="absolute flex items-center justify-center z-30 left-0 top-60 h-screen w-screen">
          <img id="imgScreen" src={openImage} alt="imagem-projeto" className="rounded-lg border-cor-terciaria border-2" />
        </div> :<></>
      }
      {rollTopPage ?
          <div className="fixed self-center max-w-[110rem] h-full w-full bg-red z-0">
            <BsFillArrowUpCircleFill onClick={event=>scrollWindow("#header")} size={45} className="absolute bottom-20 right-0 text-cor-terciaria z-20 hover:cursor-pointer"></BsFillArrowUpCircleFill>
          </div> : <></>}
      {viewKnowledges === "" ?
        <div className="flex flex-col items-center h-full w-full bg-cor-clara">
          <Header />
          <Main setViewKnowledges={setViewKnowledges} openImage={openImage} setOpenImage={setOpenImage} />

        </div>
        :
        <Certification viewKnowledges={viewKnowledges} setViewKnowledges={setViewKnowledges} openImage={openImage} setOpenImage={setOpenImage} />
      }
    </div>
  );
}

export default Portfolio;
