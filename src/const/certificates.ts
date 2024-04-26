import ICertificates from "@/interface/ICertificates";

const certificates = [
  {
    name: "Css",
    nameFiles: ["Css A Partir do Zero.jpg", "Css - Aprofunde Em Estilos.jpg"],
    description: [
      ["Html, Css e suas boas práticas.", "Responsividade.", "Desenvolver layouts modernos."],
      ["Layouts com Grid e Flexbox.", "Sass e Tailwind.", "Grid e Flexbox na prática."]
    ]
  }, {
    name: "Git",
    nameFiles: ["Controle e Compartilhe Com Git.jpg"],
    description: [["Funcionamento do Git.", "Utilização das Branchs e repositórios.", "Manipular as versões.", "Boas práticas ao utilizar em uma equipe/projeto."]]
  }, {
    name: "Java",
    nameFiles: ["Java Orientação A Objetos.jpg"],
    description: [["Funcionamento da linguagem.", "Programação Orientada a Objetos.", "Manipular listas, consumir API's e lidar com exceções."]]
  }, {
    name: "Javascript",
    nameFiles: ["Full Stack Javascript.jpg", "Aplicações Web Com JavaScript.jpg"],
    description: [
      ["Desenvolver uma página React do zero.", "Utilizar API CRUD.", "Integrar com o banco de dados."],
      ["Manipulação do DOM.", "Armazenamento de dados no navegador.", "Consumir dados de uma API.", "Validação de Formulários."]
    ]
  }, {
    name: "React",
    nameFiles: ["Como Os Componentes Funcionam.jpg", "Desenvolvendo Com JavaScript.jpg", "Escrevendo com Typescript.jpg"],
    description: [
      ["Como utilizar os componentes.", "Como utilizar props e states."],
      ["Funcionalidades básicas do React.", "Utilizando Props.", "Atualizando os componentes."],
      ["React com Typescript do zero com Create React App.", "Aprendendo a utilização de Hooks.", "Limpando o código com Typescript e boas práticas."]
    ]
  }, {
    name: "Tailwind",
    nameFiles: ["Estilizando Com Tailwind.jpg"],
    description: [["Comandos e funcionamento do Tailwind.", "Boas-práticas ao utilizar."]]
  }, {
    name: "Typescript",
    nameFiles: ["Desenvolvimento Com Typescript.jpg"],
    description: [["Funcionamento do Typescript.", "Utilização correta das tipagens.", "Funcionalidades e boas práticas."]]
  },
] as ICertificates[]

export default certificates