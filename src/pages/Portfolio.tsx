import Header from "../components/Header";
import { useEffect, useState } from 'react';
import Main from "../components/Main";
import Certification from "../components/Certification";
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import scrollWindow from "../shared/utils/scrollWindow";
import SlideSwiper from "../components/Swiper";
import Aside from "../components/Aside";

function Portfolio() {
  const [viewKnowledges, setViewKnowledges] = useState("")
  const [openImage, setOpenImage] = useState([""])
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
  function closeImageOnScreen(event: React.MouseEvent<HTMLDivElement, MouseEvent>, active: boolean = false) {
    const body = document.getElementById('body')!
    const divOutImgProjects = document.getElementById('divOutImg')!
    if (event.target === divOutImgProjects || active) {
      setOpenImage([""])
      body.classList.remove("overflow-y-hidden")
    }
  }
 
  useEffect(() => {
    const imgScreen = document.getElementById('imgScreen')!
    if (openImage[0] !== "") {
      setRollTopPage(false)
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
      {openImage[0] !== "" ?
        <SlideSwiper closeImageOnScreen={closeImageOnScreen} photos={openImage}/>
        : <></>
      }
      {rollTopPage ?
        <BsFillArrowUpCircleFill onClick={event => scrollWindow("#header")} size={45} className="fixed bottom-20 right-10 text-cor-terciaria z-20 hover:cursor-pointer dark:text-gray-200"></BsFillArrowUpCircleFill>
        : <></>}
      {viewKnowledges === "" ?
        <div className="flex flex-col items-center h-full w-full bg-cor-clara dark:bg-cor-darkPrimaria">
          <Header setAside={setAside} />
          <Main setViewKnowledges={setViewKnowledges} openImage={openImage} setOpenImage={setOpenImage} />
          <Aside aside={aside} closeAside={closeAside} setAside={setAside}/>
        </div>
        :
        <Certification viewKnowledges={viewKnowledges} setViewKnowledges={setViewKnowledges} openImage={openImage} setOpenImage={setOpenImage} />
      }
    </div>
  );
}

export default Portfolio;
