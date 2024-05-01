import Project from "./Project"
import { useEffect, useState } from "react"
import projects from "@/const/projects"
import { useTranslations } from "next-intl";

const Projects = () => {

  const t = useTranslations('Projects');
  const [mouseOverProject, setMouseOverProject] = useState<string>("")

  useEffect(() => {
    const idProjects = projects.map(project => project.title)

    const findedId = idProjects.find(id => id === mouseOverProject)
    if (findedId) {
      idProjects.forEach(id => {
        if (id !== findedId) {
          const element = document.getElementById(id)
          element?.classList.add("opacity-40")
        } else {
          const element = document.getElementById(id)
          element?.classList.remove("opacity-40")
        }
      })
    } else {
      idProjects.forEach(id => {
        const element = document.getElementById(id)
        element?.classList.remove("opacity-40")
      })
    }
  }, [mouseOverProject])

  return (
    <section id='projects' className="flex flex-col items-center w-full z-0">
      <div className='flex flex-col items-center gap-6 max-w-7xl w-full'>
        <h1 className='self-start font-bold text-2xl dark:text-gray-200'>{t("h1")}</h1>
        <div className='grid grid-cols-1 w-full justify-between gap-5 lg:grid-cols-2'>
          {projects.map((item, index) =>
            <Project
              key={index}
              setMouseOverProject={setMouseOverProject}
              item={item}
            />
          )}
        </div>
      </div>
    </section >
  )
}

export default Projects