

const AboutMe = () => {

    return (
        <section id="about_me" className="flex flex-col items-center w-full mt-10 bg-white dark:bg-cor-terciaria shadow-gray-400 dark:shadow-none shadow-lg px-10 py-5 rounded-md">
            <div className="flex flex-col gap-1 w-full">
                <div className="grid grid-rows-[auto] grid-cols-[auto_29rem] gap-x-5">
                    <h1 className="font-bold text-2xl dark:text-gray-200">Sobre Mim</h1>
                    <p className="row-start-2 dark:text-gray-200">
                        Meu nome é Guilherme Mota, tenho 19 anos e estou no 2° período de <strong>Análise e Desenvolvimento de Sistemas.</strong><br />
                        Sou apaixonado por utilizar o raciocínio lógico para transformar problemas físicos em soluções virtuais.<br />
                        Sempre busco estar evoluindo meus <strong>conhecimentos sobre as tecnologias</strong> para maior <strong>excelência</strong> em meus trabalhos e projetos.<br />
                        Tenho domínio em <strong>JavaScript, Typescript, Css, Html, React, Tailwind, Git</strong> e estou estudando <strong>Java e MongoDB</strong>.<br />
                    </p>
                    <div className="row-span-2 relative flex gap-3">
                        <div className="grid grid-rows-3 z-10">
                            <div className="relative top-1 h-full">
                                <div className="p-1.5 border-4 border-cor-terciaria dark:border-cor-darkHover bg-white rounded-full dark:bg-cor-terciaria"></div>
                            </div>
                            <div className="relative top-5 h-full">
                                <div className="p-1.5 border-4 border-cor-terciaria dark:border-cor-darkHover bg-white rounded-full dark:bg-cor-terciaria"></div>
                            </div>
                            <div className="relative top-7 h-full">
                                <div className="p-1.5 border-4 border-cor-terciaria dark:border-cor-darkHover bg-white rounded-full dark:bg-cor-terciaria"></div>
                            </div>
                        </div>
                        <div className="absolute h-full w-1.5 bg-cor-terciaria dark:bg-cor-darkSecundaria ml-[6px] my-2"></div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="font-bold text-lg dark:text-gray-200">Ensino Médio | Colégio Adventista de Porto Velho</h2>
                                <p className="font-medium dark:text-gray-200">01/2020 - 12/2022</p>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg dark:text-gray-200">Análise e Desenvolvimento de Sistemas | IFRO </h2>
                                <p className="font-medium dark:text-gray-200">01/2023 - cursando atualmente</p>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg dark:text-gray-200">Curso Alura</h2>
                                <p className="font-medium dark:text-gray-200">01/2023 - cursando atualmente</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe