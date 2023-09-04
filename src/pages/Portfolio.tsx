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
  const [aside, setAside] = useState(false)
  document.addEventListener('scroll', event => {
    if (window.scrollY > 400) {
      setRollTopPage(true)
    } else {
      setRollTopPage(false)
    }
  })
  function closeAside(idScrollPage: string) {
    scrollWindow(idScrollPage)
    setAside(false)
  }
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
        <>
          <div className="fixed backdrop-blur-sm h-screen w-screen z-20"></div>
          <div className="fixed bg-black opacity-50 h-screen w-screen z-20"></div>
          <div id="divImgScreen" onClick={event => closeImageOnScreen(event)} className="absolute flex items-center justify-center z-30 left-0 top-60 h-screen w-screen">
            <img id="imgScreen" src={openImage} alt="imagem-projeto" className="rounded-lg xl:border-cor-terciaria px-8 md:px-20 xl:px-0 xl:border-2 dark:border-none dark:rounded-lg" />
          </div>
        </>
        : <></>
      }
      {rollTopPage ?
        <BsFillArrowUpCircleFill onClick={event => scrollWindow("#header")} size={45} className="fixed bottom-20 right-10 text-cor-terciaria z-20 hover:cursor-pointer dark:text-gray-200"></BsFillArrowUpCircleFill>
        : <></>}
      {viewKnowledges === "" ?
        <div className="flex flex-col items-center h-full w-full bg-cor-clara dark:bg-cor-darkPrimaria">
          <Header setAside={setAside} />
          <Main setViewKnowledges={setViewKnowledges} openImage={openImage} setOpenImage={setOpenImage} />
          {aside ? <>
            <div id="" className="fixed flex md:hidden items-center flex-col left-0 h-screen w-60 gap-6 bg-cor-terciaria z-30 py-6">
              <h1 className="text-white font-bold text-2xl">Acesso Rápido</h1>
              <div className="flex flex-col gap-3 w-40">
                <a onClick={event => closeAside("#about_me")} className="h-6 text-lg font-medium cursor-pointer text-gray-200">Sobre Mim</a>
                <a onClick={event => closeAside("#knowledge")} className="h-6 text-lg font-medium cursor-pointer text-gray-200">Conhecimentos</a>
                <a onClick={event => closeAside("#projects")} className="h-6 text-lg font-medium cursor-pointer text-gray-200">Projetos</a>
                <a onClick={event => closeAside("#contacts")} className="h-6 text-lg font-medium cursor-pointer text-gray-200">Contato</a>
              </div>
            </div>
            <div className="absolute w-screen h-screen z-20" onClick={event => setAside(false)}>
            </div>
          </>
            : ""
          }
        </div>
        :
        <Certification viewKnowledges={viewKnowledges} setViewKnowledges={setViewKnowledges} openImage={openImage} setOpenImage={setOpenImage} />
      }
    </div>
  );
}

export default Portfolio;
