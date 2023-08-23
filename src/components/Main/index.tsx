import AboutMe from "../AboutMe"
import Apresentation from "../Apresentation"
import Contacts from "../Contacts"
import Knowledge from "../Knowledge"
import Projects from "../Projects"

const Main = () => {
    return (
        <main className="flex flex-col items-center gap-5 ">
            <Apresentation />
            {/* <div className="w-72 h-0.5 bg-cor-terciaria"></div> */}
            <AboutMe />
            <Knowledge />
            <Projects />
            <Contacts />

        </main>
    )
}

export default Main