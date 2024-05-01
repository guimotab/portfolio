import { Card } from "@/components/ui/card"
import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
interface ProjectCardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
const ProjectCardFooter = ({ children, className, ...rest }: ProjectCardFooterProps) => {
  return (
    <div className={cn("flex justify-between items-end", className)} {...rest}>
      {children}
    </div>
  )
}

export default ProjectCardFooter