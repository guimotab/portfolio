import { Card } from "@/components/ui/card"
import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
interface ProjectCardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
const ProjectCardContent = ({ children, className, ...rest }: ProjectCardContentProps) => {
  return (
    <div className={cn("flex flex-col gap-4 justify-between h-full", className)} {...rest}>
      {children}
    </div>
  )
}

export default ProjectCardContent