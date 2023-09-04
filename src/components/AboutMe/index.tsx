

const AboutMe = () => {

    return (
        <section id="about_me" className="flex flex-col items-center w-full mt-10 bg-white dark:bg-cor-terciaria shadow-gray-400 dark:shadow-none shadow-lg px-10 py-6 rounded-md">
            <div className="grid grid-rows-[auto_auto_auto] gap-y-5 lg:gap-y-0 lg:grid-rows-[auto] lg:grid-cols-[1fr_auto] gap-x-5">
                <h1 className="font-bold text-2xl dark:text-gray-200 h-fit">Sobre Mim</h1>
                <p className="row-start-2 dark:text-gray-200">
                    Meu nome é Guilherme Mota, tenho 19 anos e estou no 2° período de <strong>Análise e Desenvolvimento de Sistemas.</strong><br /><br />
                    Sou apaixonado por utilizar o raciocínio lógico para transformar problemas físicos em soluções virtuais.<br /><br />
                    Sempre busco estar evoluindo meus <strong>conhecimentos sobre as tecnologias</strong> para maior <strong>excelência</strong> em meus trabalhos e projetos.<br /><br />
                    Tenho domínio em <strong>JavaScript, Typescript, Css, Html, React, Tailwind, Git</strong> e estou estudando <strong>Java e MongoDB</strong>.
                </p>
                <div className="row-span-2 relative flex gap-3 h-min max-h-92 lg:h-full">
                    <div className="grid grid-rows-3 z-10 gap-3">
                        <div className="relative h-fit mt-1">
                            <div className="p-1.5 border-4 border-cor-terciaria dark:border-cor-darkHover bg-white rounded-full dark:bg-cor-terciaria"></div>
                        </div>
                        <div className="relative h-fit mt-1">
                            <div className="p-1.5 border-4 border-cor-terciaria dark:border-cor-darkHover bg-white rounded-full dark:bg-cor-terciaria"></div>
                        </div>
                        <div className="relative h-fit mt-1">
                            <div className="p-1.5 border-4 border-cor-terciaria dark:border-cor-darkHover bg-white rounded-full dark:bg-cor-terciaria"></div>
                        </div>
                    </div>
                    <div className="absolute h-full w-1.5 bg-cor-terciaria dark:bg-cor-darkSecundaria ml-[6px] my-2"></div>
                    <div className="grid grid-rows-3 justify-start gap-3">
                        <div className="h-full">
                            <h2 className="font-bold text-lg dark:text-gray-200">Ensino Médio | Colégio Adventista de Porto Velho</h2>
                            <p className="font-medium dark:text-gray-200">01/2020 - 12/2022</p>
                        </div>
                        <div className="h-full">
                            <h2 className="font-bold text-lg dark:text-gray-200">Análise e Desenvolvimento de Sistemas | IFRO </h2>
                            <p className="font-medium dark:text-gray-200">01/2023 - cursando atualmente</p>
                        </div>
                        <div className="h-full">
                            <h2 className="font-bold text-lg dark:text-gray-200">Curso Alura</h2>
                            <p className="font-medium dark:text-gray-200">01/2023 - cursando atualmente</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe