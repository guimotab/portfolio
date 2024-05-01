import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
interface ProjectCardUsedTechnologiesProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}
const ProjectCardUsedTechnologies = ({ children, className, ...rest }: ProjectCardUsedTechnologiesProps) => {
  const t = useTranslations('Projects');

  return (
    <div className={cn("flex flex-col", className)}>
      <p className="font-medium dark:text-gray-200">{t("usedTechs")}</p>
      {children}
    </div>
  )
}

export default ProjectCardUsedTechnologies