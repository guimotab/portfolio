import { Card } from "@/components/ui/card"
import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
interface ProjectCardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
const ProjectCardRoot = ({ children, className, ...rest }: ProjectCardRootProps) => {
  return (
    <Card className={cn("transition duration-500 hover:scale-[1.02] z-0 flex flex-col gap-4 border h-full rounded-lg px-4 sm:px-8 py-4", className)} {...rest}>
      {children}
    </Card>
  )
}

export default ProjectCardRoot