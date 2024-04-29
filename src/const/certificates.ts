import ICertificates from "@/interface/ICertificates";

const certificates = [
  {
    name: "Css",
    values: [
      {
        name: "Css A Partir do Zero.jpg",
        description: ["Html, Css e suas boas práticas.", "Responsividade.", "Desenvolver layouts modernos."]
      }, {
        name: "Css - Aprofunde Em Estilos.jpg",
        description: ["Layouts com Grid e Flexbox.", "Sass e Tailwind.", "Grid e Flexbox na prática."]
      },
    ]
  }, {
    name: "Git",
    values: [
      {
        name: "Controle e Compartilhe Com Git.jpg",
        description: ["Funcionamento do Git.", "Utilização das Branchs e repositórios.", "Manipular as versões.", "Boas práticas ao utilizar em uma equipe/projeto."]
      },
    ]
  }, {
    name: "Java",
    values: [
      {
        name: "Java Orientação A Objetos.jpg",
        description: [
          "Funcionamento da linguagem.",
          "Programação Orientada a Objetos.",
          "Manipular listas, consumir API's e lidar com exceções."
        ]
      }
    ]
  }, {
    name: "Javascript",
    values: [
      {
        name: "Full Stack Javascript.jpg",
        description: [
          "Desenvolver uma página React do zero.",
          "Utilizar API CRUD.",
          "Integrar com o banco de dados."
        ]
      },
      {
        name: "Aplicações Web Com JavaScript.jpg",
        description: [
          "Manipulação do DOM.",
          "Armazenamento de dados no navegador.",
          "Consumir dados de uma API.",
          "Validação de Formulários."
        ]
      }
    ]
  }, {
    name: "React",
    values: [
      {
        name: "Como Os Componentes Funcionam.jpg",
        description: [
          "Como utilizar os componentes.",
          "Como utilizar props e states."
        ]
      },
      {
        name: "Desenvolvendo Com JavaScript.jpg",
        description: [
          "Funcionalidades básicas do React.",
          "Utilizando Props.",
          "Atualizando os componentes."
        ]
      },
      {
        name: "Escrevendo com Typescript.jpg",
        description: [
          "React com Typescript do zero com Create React App.",
          "Aprendendo a utilização de Hooks.",
          "Limpando o código com Typescript e boas práticas."
        ]
      }
    ]
  }, {
    name: "Tailwind",
    values: [
      {
        name: "Estilizando Com Tailwind.jpg",
        description: [
          "Comandos e funcionamento do Tailwind.",
          "Boas práticas ao utilizar."
        ]
      }
    ]
  }, {
    name: "Typescript",
    values: [
      {
        name: "Desenvolvimento Com Typescript.jpg",
        description: [
          "Funcionamento do Typescript.",
          "Utilização correta das tipagens.",
          "Funcionalidades e boas práticas."
        ]
      }
    ]
  },
] as ICertificates[]

export default certificates