
import { useState } from "react"
import PopUpNameIcon from "../PopUpNameIcon/PopUpNameIcon"
interface InteractiveIconsProps {
    logo: { jsx: JSX.Element }
    divClass: string

}

const InteractiveIcons = ({ logo, divClass }: InteractiveIconsProps) => {
    return (
        <div className="w-full mt-10">
            <div className={`${divClass}`}>
                {logo.jsx}
            </div>
        </div>
    )
}

export default InteractiveIcons