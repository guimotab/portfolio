import AboutMe from "../AboutMe"
import Apresentation from "../Apresentation"
import Contacts from "../Contacts"
import Knowledge from "../Knowledge"
import Projects from "../Projects"


const Main = () => {

    return (
        <div className="flex flex-col items-center gap-5 max-w-[86rem] w-screen z-10 px-8 sm:px-24">
            <Apresentation />
            <AboutMe />
            <Knowledge />
            <Projects/>
            <Contacts />
        </div>

    )
}

export default Main