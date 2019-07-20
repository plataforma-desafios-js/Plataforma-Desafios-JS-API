# Plataforma-Desafios-JS

## Oi, tudo bem?
Olá! Seja bem-vindo ao repositório de frontend da Plataforma de Desafios da comunidade de estudantes e programadores de tecnologias frontend que surgiu em volta das [lives de programação](https://www.twitch.tv/mbernardes19/) do [Matheus](https://github.com/mbernardes19) na Twitch.

## Que diabo é uma plataforma de desafios?

Boa pergunta.

Bem, nossa comunidade foi criada com o objetivo de ajudar diversas pessoas na sua busca pessoal por aprender programação - seja simplesmente por prazer, pra faculdade, pro trabalho, ou até mesmo para conseguir um emprego na área. E, dentre nossas própria experiências pessoais estudando código, aprendemos que realmente **não existe forma melhor de aprender a programar do que programar.**

Por isso, criamos um desafio para toda a comunidade, um desafio semanal. Toda quarta-feira o Matheus faz uma live das 21h às 23h (Live dos Novatos + Desafio de Programação) no [canal da Twitch](https://www.twitch.tv/mbernardes19/) em que no final dessa live ele lança um tema para o desafio da semana - que é basicamente uma ideia para fazer um projeto simples cujo objetivo é de te fazer criar algo prático e aprender, com esse processo, conceitos novos de programação e como é fazer um projeto na prática - e também premia o projeto mais votado da semana anterior.

Para tornar essa experiência de participar do desafio bem mais interessante, alguns membros da comunidade tiveram a ideia de criar uma plataforma onde todos pudessem postar seus desafios, ver os desafios que os outros postaram, favoritar e ver que pessoas estão sendo mais votadas na semana. Cá estamos nós.

## Legal. Como faço pra participar do desafio?
Enquanto a plataforma não está pronta, basta você entrar no [discord das lives](https://discord.gg/6MT6SBx), ir até o canal desafio-semanal e dizer "Eu, <nome>, estarei participando do desafio semanal da semana". E pronto!

## Terminei o desafio. Como faço pra entregar?
Vá no canal desafio-semanal do discord e poste lá o link do repositório com o seu projeto ( preferencialmente, deixe uma GitHub Page do seu projeto pronta também, pois isso facilitará a apresentação do seu projeto).




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
