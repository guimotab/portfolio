import { JsxElement } from "typescript"

export default abstract class FindFiles {
    constructor() {

    }
    static filesDir(dir: string) {
        let files: { nameFile: string[], description: string[][] } = { nameFile: [], description: [[""]] }
        if (dir === "css") {
            files = {
                nameFile: ["Css A Partir do Zero.jpg", "Css - Aprofunde Em Estilos.jpg"],
                description: [
                    ["Html, Css e suas boas práticas.", "Responsividade.", "Desenvolver layouts modernos."],
                    ["Layouts com Grid e Flexbox.", "Sass e Tailwind.", "Grid e Flexbox na prática."]
                ]
            }
        } else if (dir === "java") {
            files = {
                nameFile: ["Java Orientação A Objetos.jpg"],
                description: [["Funcionamento da linguagem.", "Programação Orientada a Objetos.", "Manipular listas, consumir API's e lidar com exceções."]]
            }
        } else if (dir === "javascript") {
            files = {
                nameFile: ["Full Stack Javascript.jpg", "Aplicações Web Com JavaScript.jpg"],
                description: [
                    ["Desenvolver uma página React do zero.", "Utilizar API CRUD.", "Integrar com o banco de dados."],
                    ["Manipulação do DOM.", "Armazenamento de dados no navegador.", "Consumir dados de uma API.", "Validação de Formulários."]
                ]
            }
        } else if (dir === "react") {
            files = {
                nameFile: ["Como Os Componentes Funcionam.jpg", "Desenvolvendo Com JavaScript.jpg", "Escrevendo com Typescript.jpg"],
                description: [
                    ["Como utilizar os componentes.", "Como utilizar props e states."],
                    ["Funcionalidades básicas do React.", "Utilizando Props.", "Atualizando os componentes."],
                    ["React com Typescript do zero com Create React App.", "Aprendendo a utilização de Hooks.", "Limpando o código com Typescript e boas práticas."]
                ]
            }
        } else if (dir === "typescript") {
            files = {
                nameFile: ["Desenvolvimento Com Typescript.jpg"],
                description: [["Funcionamento do Typescript.", "Utilização correta das tipagens.", "Funcionalidades e boas práticas."]]
            }
        } else if (dir === "git") {
            files = {
                nameFile: ["Controle e Compartilhe Com Git.jpg"],
                description: [["Funcionamento do Git.", "Utilização das Branchs e repositórios.", "Manipular as versões.", "Boas práticas ao utilizar em uma equipe/projeto."]]
            }
        } else if (dir === "tailwind") {
            files = {
                nameFile: ["Estilizando Com Tailwind.jpg"],
                description: [["Comandos e funcionamento do Tailwind.", "Boas-práticas ao utilizar."]]
            }
        }
        return files
    }
}