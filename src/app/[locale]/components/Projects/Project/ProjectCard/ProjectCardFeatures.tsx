import { Card } from "@/components/ui/card"
import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
interface ProjectCardFeaturesProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}
const ProjectCardFeatures = ({ children, className, ...rest }: ProjectCardFeaturesProps) => {
  const t = useTranslations('Projects');

  return (
    <div>
      <p className="font-medium dark:text-gray-200">{t("p")}</p>
      {children}
    </div>
  )
}

export default ProjectCardFeatures