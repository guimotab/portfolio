"use client"
import { useEffect, useState } from "react"
import { FaRegEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useParams } from "next/navigation";
import Certificates from "@/classes/Certificates";
import nameCertificates from "@/types/nameCertificates";
import Overlay from "@/components/Overlay";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonPrev, SwiperButtonNext } from "../../../../src copy/components/Swiper/SwiperButtons";
import CertificateInformation from "./components/CertificateInformation";
import CertificateImage from "./components/CertificateImage";

const Certificate = () => {
  const { nameCertificate } = useParams() as { nameCertificate: nameCertificates }
  const currentCertificates = Certificates.find(nameCertificate)
  const imageCertificate = Certificates.getImages(nameCertificate, currentCertificates)
  const [openImage, setOpenImage] = useState(false)
  const [filesArrayPosition, setFilesArrayPosition] = useState(0)

  useEffect(() => {
    const imagesCertificon = document.querySelectorAll(`#imgCertification`)
    imagesCertificon.forEach((image) => {
      const dataSetImg = parseFloat(image.attributes[0].value)
      if (filesArrayPosition === dataSetImg) {
        image.classList.add("border-4")
      } else {
        image.classList.remove("border-4")
      }
    })
  }, [filesArrayPosition])


  function handleCloseImage() {
    setOpenImage(false)
  }

  return (
    <main className="flex flex-col gap-3 items-center w-full">
      <div className="flex flex-col py-5 items-center">
        {openImage &&
          <Overlay closeOverlay={handleCloseImage}>
            {/* <Swiper
            id="imgScreen"
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: false }}>
            <div onClick={event => closeImageOnScreen(event, true)}
              className='absolute right-[20.5rem] sm:right-44 md:right-28 lg:hidden top-0 text-white font-medium text-lg z-10'>X</div>
            {photos.map((photo, index) =>
              <SwiperSlide key={index} >
                <img src={`${photo}`} alt="" className='mb-4 rounded-lg px-[22rem] sm:px-52 md:px-40 lg:px-32 xl:px-0 dark:rounded-lg' />
              </SwiperSlide>
            )}
            </div>
          </Swiper> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
            >
              <div>
                {imageCertificate?.map(image =>
                  <SwiperSlide>
                    <img
                      src={image}
                      alt={`Certificado de ${image}`}
                      className="rounded-lg w-[60rem] border-primary dark:border-cor-darkHover border-2 dark:border-4 cursor-pointer " />
                  </SwiperSlide>
                )}
                <div className='flex justify-center w-full'>
                  <div className='flex justify-between max-w-xs md:max-w-2xl w-full'>
                    <SwiperButtonPrev text="Previous" />
                    <SwiperButtonNext text="Next" />
                  </div>
                </div>
              </div>
            </Swiper>
          </Overlay>
        }

        <div className="flex w-full gap-4">
          <CertificateImage
            filesArrayPosition={filesArrayPosition}
            setFilesArrayPosition={setFilesArrayPosition}
            setOpenImage={setOpenImage} />

          <CertificateInformation filesArrayPosition={filesArrayPosition} />
        </div>
        
      </div>
    </main >
  )
}
export default Certificate