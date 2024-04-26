import Header from "../../components/Header";
import { useEffect, useState } from 'react';
import Main from "./components/Main";
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import scrollWindow from "../../../src/utils/scrollWindow";
import SlideSwiper from "../../components/Swiper";
import Aside from "./components/Aside";
import useOpenImage from "../../states/hooks/useOpenImage";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [rollTopPage, setRollTopPage] = useState(false)
  const [aside, setAside] = useState(false)
  const openImage = useOpenImage()
  document.addEventListener('scroll', event => {
    if (window.scrollY > 400) {
      setRollTopPage(true)
    } else {
      setRollTopPage(false)
    }
  })

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
      <SlideSwiper photos={openImage} />
      {rollTopPage ?
        <Link to={"/#header"} 
          className="fixed bottom-20 right-10 text-primary z-20 hover:cursor-pointer dark:text-gray-200" >
          <BsFillArrowUpCircleFill
            onClick={event => scrollWindow("#header")}
            size={45}
          />
        </Link>
        : <></>}
      <div className="flex flex-col items-center h-full w-full bg-cor-clara dark:bg-cor-darkPrimaria">
        <Header setAside={setAside} />
        <Main />
        <Aside aside={aside} setAside={setAside} />
      </div>
    </div>
  );
}

export default Portfolio;
