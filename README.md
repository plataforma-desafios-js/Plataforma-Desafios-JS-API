# Plataforma-Desafios-JS

### Requerimentos

- NodeJS
- MongoDB (Máquina local ou Cluster)

### Configurando Projeto

- Clone o Repositório
- Dentro da pasta do repositório clonado, execute o comando `cd api`
- Execute o comando `npm install` (pode utilizar o Yarn se preferir)
- Crie um arquivo chamado `.env` (EXATAMENTE ASSIM) na raiz da pasta api
- Copie o conteúdo do arquivo `.env.example` e Cole no arquivo que você criou
- Inicie o MongoDB
- Execute o comando `npm run dev`
- Pronto, a API já está pronta para testes

### REQUISITOS FUNCIONAIS

- O usuário deve poder fazer login no sistema
- O usuário deve poder ver o desafio da semana atual e das semanas anteriores
- O usuário deve poder ver as entregas de outros usuários
- O usuário deve poder votar nas entregas de outros usuários
- Deve ser possível ver quantos votos a sua própria entrega tem
- O sistema deve poder disponibilizar uma prévia online da entrega de cada usuário (ver o html, css e js sendo executados na hora)
- O sistema deve fazer um ranking dos mais votados
