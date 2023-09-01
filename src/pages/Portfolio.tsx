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
      body.classList.remove("overflow-y-hidden")
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
          <img id="imgScreen" src={openImage} alt="imagem-projeto" className="rounded-lg border-cor-terciaria px-8 md:px-20 xl:px-0 border-2 dark:border-none dark:rounded-lg" />
        </div> : <></>
      }
      {rollTopPage ?
        <BsFillArrowUpCircleFill onClick={event => scrollWindow("#header")} size={45} className="fixed bottom-20 right-10 text-cor-terciaria z-20 hover:cursor-pointer dark:text-gray-200"></BsFillArrowUpCircleFill>
        : <></>}
      {viewKnowledges === "" ?
        <div className="flex flex-col items-center h-full w-full bg-cor-clara dark:bg-cor-darkPrimaria">
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
