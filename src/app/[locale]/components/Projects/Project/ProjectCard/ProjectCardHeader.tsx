import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

interface NotificationActionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
const ProjectCardHeader = ({ children, className, ...rest }: NotificationActionProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...rest}>
      {children}
    </div>
  )
}

export default ProjectCardHeader