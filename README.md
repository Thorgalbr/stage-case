# Desafio Stage - Thiago Pereira #

Este projeto simples cria uma RESTApi de gerenciamento de usuários, funcionarios, departamentos e projetos.

Foram usadas as seguintes ferramentas

- NodeJS 
- Typescript
- Express
- moment
- JWT
- Bcrypt
- rimraf
- Postgres
- Prisma
- AWS ECS, ECR, EC2 
(A API neste caso retornou o Json proposto de teste, porém não acessou as rotas retornando Socket Hang )

## Proposta do projeto ## 

 A ideia do sistema é um simples backend de gerenciamento de funcionários, projetos e departamentos de uma empresa feito em NodeJS e utilizando a ORM Prisma para manipulação dos dados no Postgres, esta aplicação executa processos CRUD para todas essas interações, cria, solicita, atualiza e deleta dados com retornos de erro e sucesso para melhor gestão e monitoramento, possui também um fluxo de autenticação montado retornando um token ao ocorrer o login de um usuário, este, não foi implementado fora do backend por minhas limitações com o frontend. A ideia total para o sistema com o frontend era permitir que os usuários logassem e fizessem todo o controle de pessoas, projetos e areas desta aplicação rodando no AWS.


  ## Minhas dificuldades e aprendizados com o projeto ## 

 Tive um longo tempo tentando montar o quebra cabeça que foi o fronend, consegui desenvolver um esboço basico com bastante pesquisa, mas optei por me dedicar as afinações do backend para não consumir muito tempo até o dia da apresentação, foi uma semana fantastica e de muito aprendizado, encontrando erros e buscando resolver de alguma forma, encontrando novas soluções.

## Descrição das rotas propostas na API ##

Estas rotas estão descritas mais detalhadamente nos arquivos Controller referente a cada uma, lá você vai encontrar os formatos aceitos e descrições.

 ## Rotas de Usuários ## 

 - /users/add
 - /user/request
 - /user/request/:guid_user
 - /user/update/:guid_user
 - /user/delete/:guid_user

  ## Rota de Autenticação ## 

 - /auth

  ## Rotas de Funcionários ## 

 - /employees/add/:guid_user/:guid_projects
 - /employees/request
 - /employees/request/:guid_employee
 - /employees/update/:guid_employee/:guid_user/:guid_projects
 - /employees/delete/:guid_employee

   ## Rotas de Departamentos ## 

 - /departments/add/:guid_user
 - /departments/request
 - /departments/request/:guid_dept
 - /departments/update/:guid_dept/:guid_user
 - /departments/delete/:guid_dept

    ## Rotas de Projetos ## 

 - /projects/add/:guid_user/:guid_dept
 - /projects/request
 - /projects/request/:guid_projects
 - /projects/update/:guid_projects/:guid_user/:guid_dept
 - /project/delete/:guid_projects

     ## Rotas da tabela de junção Dept-Employee ## 

 - /dept-employees/add/:guid_dept/:guid_employee
 - /dept-employees/request
 - /dept-employees/request/:guid_dept_emp
 - /dept-employees/update/:guid_dept_emp/:guid_dept/:guid_employee
 - /dept-employees/delete/:guid_dept_emp

## Instalação dos pacotes ##

Para instalar os pacotes é necessário rodar o comando:

- npm ci

O sistema também necessita do [AWS CLI](https://aws.amazon.com/cli/) configurado para configurar o acesso ao ECS, ECR e EC2 caso queira reproduzir o deploy no aws.

