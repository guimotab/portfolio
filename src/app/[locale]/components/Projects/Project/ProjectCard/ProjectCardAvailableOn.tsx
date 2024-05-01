import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
interface ProjectCardAvailableOnProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}
const ProjectCardAvailableOn = ({ children, className, ...rest }: ProjectCardAvailableOnProps) => {
  const t = useTranslations('Projects');

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p className="font-medium dark:text-gray-200">{t("availableOn")}</p>
      <div className="flex items-end justify-center gap-2">
        {children}
      </div>
    </div>
  )
}

export default ProjectCardAvailableOn