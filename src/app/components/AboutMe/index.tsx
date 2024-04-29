import { Card } from "@/components/ui/card"

const AboutMe = () => {
  const myExperience = [
    {
      h2: "Estágio | Ministério Público do Estado de Rondônia",
      label: "Desenvolvimento de Sistemas em Java e Angular.",
      p: "10/2023 - 03/2024 | 7 meses"
    }, {
      h2: "Análise e Desenvolvimento de Sistemas | IFRO",
      label: "Cursando o 3° período de 6 períodos.",
      p: "01/2023 - 12/2025"
    }, {
      h2: "Curso Alura",
      p: "01/2023 - 12/2023"
    },
  ]
  return (
    <Card id="about_me" className="flex flex-col items-center w-full mt-10   px-10 py-6 ">
      <div className="grid grid-rows-[auto_auto_auto] gap-y-5 lg:gap-y-0 lg:grid-rows-[auto] lg:grid-cols-[1fr_auto] gap-x-5">
        <h1 className="font-bold text-2xl dark:text-gray-200 h-fit">Sobre Mim</h1>
        <p className="row-start-2 dark:text-gray-200">
          Meu nome é Guilherme Mota, tenho 19 anos. Estou no 3° período do curso de <strong>Análise e Desenvolvimento de Sistemas.</strong><br /><br />
          Sou apaixonado por utilizar o raciocínio lógico para transformar problemas físicos em soluções virtuais.<br /><br />
          Sempre busco estar evoluindo meus <strong>conhecimentos sobre as tecnologias</strong> para maior <strong>excelência</strong> em meus trabalhos e projetos.<br /><br />
          Tenho domínio em <strong>Java, JavaScript, Typescript, Angular, React, Next.js, Tailwind, Git</strong>.
        </p>
        <div className="row-span-2 relative flex gap-3 h-min max-h-92 lg:h-full">
          <div className="grid grid-rows-3 z-10 gap-3">
            <div className="relative h-fit mt-1">
              <div className="p-1.5 border-4 border-primary dark:border-secondary bg-white rounded-full dark:bg-background"></div>
            </div>
            <div className="relative h-fit mt-1">
              <div className="p-1.5 border-4 border-primary dark:border-secondary bg-white rounded-full dark:bg-background"></div>
            </div>
            <div className="relative h-fit mt-1">
              <div className="p-1.5 border-4 border-primary dark:border-secondary bg-white rounded-full dark:bg-background"></div>
            </div>
          </div>
          <div className="absolute h-full w-1.5 bg-primary dark:bg-cor-darkSecundaria ml-[6px] my-2"></div>
          <div className="grid grid-rows-3 justify-start gap-3">
            {myExperience.map(experience =>
              <div key={experience.h2} className="h-full">
                <h2 className="font-bold text-lg dark:text-gray-200">{experience.h2}</h2>
                <p className="font-medium dark:text-gray-200">{experience.label}</p>
                <p className="font-medium dark:text-gray-200">{experience.p}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default AboutMe