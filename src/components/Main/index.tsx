import AboutMe from "../AboutMe"
import Apresentation from "../Apresentation"
import Contacts from "../Contacts"
import Knowledge from "../Knowledge"
import Projects from "../Projects"

interface MainProps {
    setViewKnowledges: React.Dispatch<React.SetStateAction<string>>
    openImage: string
    setOpenImage: React.Dispatch<React.SetStateAction<string>>
}

const Main = ({ setViewKnowledges, openImage, setOpenImage }: MainProps) => {


    return (
        <div className="flex flex-col items-center gap-5 max-w-7xl w-screen px-2 z-10">
            <Apresentation />
            <AboutMe />
            <Knowledge setViewKnowledges={setViewKnowledges} />
            <Projects openImage={openImage} setOpenImage={setOpenImage} />
            <Contacts />
        </div>

    )
}

export default Main