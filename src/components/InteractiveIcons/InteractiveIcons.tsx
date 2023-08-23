
import { useState } from "react"
import PopUpNameIcon from "../PopUpNameIcon/PopUpNameIcon"
interface InteractiveIconsProps {
    logo: { jsx: JSX.Element }
    text: string
}

const InteractiveIcons = ({ logo, text }: InteractiveIconsProps) => {

    function mouseEnterLogo(){
        
    }
    const [mouseOver, setMouseOver] = useState(false)

    return (
        <div className="grid grid-rows-[2rem_auto] w-full items-center">
            <div className="flex justify-center row-start-1">
                {mouseOver ?
                    <PopUpNameIcon text={text} />
                    : ""
                }
            </div>
            <div className="flex justify-center row-start-2">
                <div onMouseEnter={event => setMouseOver(true)} onMouseLeave={event => setMouseOver(false)}>
                    {logo.jsx}
                </div>
            </div>
        </div>
    )
}

export default InteractiveIcons