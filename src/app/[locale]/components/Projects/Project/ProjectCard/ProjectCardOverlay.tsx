import { Dispatch, SetStateAction, useState } from "react";
import { ImagesProjects } from "@/classes/ImagesProjects";
import ICardProject from "@/interface/ICardProject";
import Overlay from "@/components/Overlay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
interface ProjectCardOverlayProps {
  item: ICardProject
  openImage: boolean
  setOpenImage: Dispatch<SetStateAction<boolean>>
}

const ProjectCardOverlay
  = ({ item, openImage, setOpenImage }: ProjectCardOverlayProps) => {

    const allImagesProject = ImagesProjects.getImages(item.slug, "all") as string[]

    function handleCloseImage() {
      const body = document.getElementsByTagName("body")[0]!
      body.classList.remove("overflow-hidden")
      setOpenImage(false)
    }

    return openImage && (
      <Overlay closeOverlay={handleCloseImage}>
        <div className="z-60">
          <Carousel >
            <CarouselContent >
              {allImagesProject.map(image =>
                <CarouselItem>
                  <img
                    src={image}
                    alt={item.altProject}
                    className="rounded-lg  border-primary dark:border-cor-darkHover border-2 dark:border-4 cursor-pointer " />
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious className="z-60" />
            <CarouselNext className="z-60" />
          </Carousel>
        </div>
      </Overlay>
    );
  }

export default ProjectCardOverlay
