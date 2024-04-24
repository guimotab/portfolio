import scrollWindow from "../../../../../src/utils/scrollWindow"
interface AsideProps {
    aside: boolean
    setAside: React.Dispatch<React.SetStateAction<boolean>>
}
const Aside = ({ aside, setAside }: AsideProps) => {
    function closeAside(idScrollPage: string) {
        scrollWindow(idScrollPage)
        setAside(false)
      }
    return (
        <>
            {aside ?
                <>
                    < div className="fixed flex md:hidden items-center flex-col left-0 h-screen w-60 gap-6 bg-primary z-30 py-6" >
                        <h1 className="text-white font-bold text-2xl">Acesso Rápido</h1>
                        <div className="flex flex-col gap-3 w-40">
                            <a onClick={event => closeAside("#about_me")} className="h-6 text-lg font-medium cursor-pointer text-gray-200">Sobre Mim</a>
                            <a onClick={event => closeAside("#knowledge")} className="h-6 text-lg font-medium cursor-pointer text-gray-200">Conhecimentos</a>
                            <a onClick={event => closeAside("#projects")} className="h-6 text-lg font-medium cursor-pointer text-gray-200">Projetos</a>
                            <a onClick={event => closeAside("#contacts")} className="h-6 text-lg font-medium cursor-pointer text-gray-200">Contato</a>
                        </div>
                    </div >
                    <div className="absolute w-screen h-screen z-20" onClick={event => setAside(false)}>
                    </div>
                </>
                : ""
            }
        </>
    )
}

export default Aside