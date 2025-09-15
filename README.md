# Automação E2E utilizando Page Objects
Este é um projeto simples de estudo de automação E2E em Cypress onde é aplicado o padrão de projeto Page Objects

## Page Objects 
É um padrão de projeto que organiza os testes com base nas ações e elementos disponíveis na página 

###Estrutura do Projeto 

├── cypress/
│   └── e2e                                          # Pasta padrão do cypress destinada aos testes de ponta a ponta
|        └── login.cy.js                               # Implementação dos testes de login 

|   └── fixtures                                     # Pasta padrão do cypress destinada as massas de dados statica 
|        └── login.json                                # Arquivo com a massa dos testes do login.cy.js 

|   └── pages                                        # Pasta que organiza as páginas dos testes do padrão page objects
|        └── login                                    # Pasta que organiza os arquivos referentes a página login do projeto 
|            └── elements.js                           # Arquivo que contém os elementos da página login, para ser utilizada no arquivo index.js  
|            └── index.js                              # Arquivo que contém as ações da página login

