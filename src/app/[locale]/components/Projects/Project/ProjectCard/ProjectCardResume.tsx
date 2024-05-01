import { Card } from "@/components/ui/card"
import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
interface ProjectCardResumeProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}
const ProjectCardResume = ({ children, className, ...rest }: ProjectCardResumeProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p className={cn("dark:text-gray-200", className)} {...rest}>
        {children}
      </p>
    </div>
  )
}

export default ProjectCardResume