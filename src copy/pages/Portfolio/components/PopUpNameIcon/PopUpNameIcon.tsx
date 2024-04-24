interface PopUpNameIconProps{
    text: string
}

const PopUpNameIcon = ({text}: PopUpNameIconProps) => {
    return (
        <div className="flex w-fit h-fit py-0.5 px-2 justify-center bg-primary rounded-md animate-slideTopIcons">
            <p className="text-white font-medium text-sm">
                {text}
            </p>
        </div>
    )
}

export default PopUpNameIcon