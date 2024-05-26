# Plano de Testes de Software

Abaixo estão os cenários de testes selecionados para avaliação do sistema Leevi. Esses cenários foram cuidadosamente escolhidos com o objetivo de validar as diferentes funcionalidades implementadas, proporcionando uma excelente experiência aos usuários do sistema. No nosso plano de teste de software.
 
 <br>
 
 ## Cenário de Teste: Página Inicial - Redirecionamento para a página de Login

- **Objetivo:** Verificar se o redirecionamento para a página de login ocorre corretamente ao clicar no botão "Login" na página inicial.

- **Descrição:** Testar o redirecionamento adequado para a página de login ao clicar no botão "Login" na página inicial.

- **Grupo de Usuários:** Usuários já cadastrados que desejam utilizar o sistema.

- **Ferramentas Utilizadas:** Navegador web.

<br>

## Cenário de Teste: Página Inicial - Redirecionamento para a página de cadastro

- **Objetivo:** Verificar se o redirecionamento para a página de cadastro ocorre corretamente ao clicar no botão "Comece já!" ou no botão "Teste gratuitamente" na página inicial.

- **Descrição:** Testar o redirecionamento adequado para a página de cadastro ao clicar no botão "Comece já!" ou no botão "Teste gratuitamente" na página inicial.

- **Grupo de Usuários:** Novos usuários que desejam utilizar o sistema.

- **Ferramentas Utilizadas:** Navegador web.

<br>

## Cenário de Teste: Cadastro de Novo Usuário

- **Objetivo:** Verificar se o processo de cadastro de novo usuário está funcionando adequadamente, permitindo que novos usuários se registrem fornecendo as informações necessárias.

- **Descrição:** Testar o fluxo de registro de novo usuário, preenchendo os campos obrigatórios do formulário de cadastro e verificando se o usuário é cadastrado com sucesso.

- **Grupo de Usuários:** Novos usuários interessados em criar uma conta.

- **Ferramentas Utilizadas:** Navegador web, localStorage, jsonServer.

<br>

## Cenário de Teste: Login de Usuário

- **Objetivo:** Verificar se o processo de login de usuário está funcionando corretamente, permitindo que os usuários acessem suas contas com credenciais válidas.

- **Descrição:** Testar o fluxo de autenticação de usuário, inserindo informações de login corretas e verificando se o acesso é concedido ao sistema.

- **Grupo de Usuários:** Usuários já registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage, jsonServer.

<br>

## Cenário de Teste: Adicionar Despesa

- **Objetivo:** Verificar se é possível adicionar uma nova despesa ao sistema.

- **Descrição:** Testar a funcionalidade de adicionar uma despesa, preenchendo o formulário com os detalhes da despesa (nomer, categoria, essencial, valor) e verificando se ele é registrado corretamente no sistema.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage, jsonServer.

<br>

## Cenário de Teste: Adicionar Receita

- **Objetivo:** Verificar se é possível adicionar uma nova receita ao sistema.

- **Descrição:** Testar a funcionalidade de adicionar um receita, preenchendo o formulário com os detalhes do gasto (nomer, valor) e verificando se ele é registrado corretamente no sistema.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage, jsonServer.

<br>

## Cenário de Teste: Editar Poupança

- **Objetivo:** Verificar se é possível editar um valor a ser poupado ao sistema.

- **Descrição:** Testar a funcionalidade de editar poupança, preenchendo o formulário com o valor que deseja poupar e verificando se ele é registrado corretamente no sistema.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage, jsonServer.

<br>

## Cenário de Teste: Visualizar Receita.

- **Objetivo:** Verificar se a visualização de receita é atualizado corretamente ao adicionar receita.

- **Descrição:** Testar a funcionalidade de visualizar receita e verificar se as informações são atualizadas em tempo real, exibindo a soma dos valores em cada mês.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Visualizar Despesa.

- **Objetivo:** Verificar se a visualização de despesa é atualizado corretamente ao adicionar despesa.

- **Descrição:** Testar a funcionalidade de visualizar despesas e verificar se as informações são atualizadas em tempo real, exibindo a soma dos valores em cada mês.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Visualizar  Poupança.

- **Objetivo:** Verificar se a visualização de poupança é atualizado corretamente ao editar poupança.

- **Descrição:** Testar a funcionalidade de visualizar poupança e verificar se as informações são atualizadas em tempo real, exibindo o valor em cada mês.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Visualizar Saldo.

- **Objetivo:** Verificar se a visualização saldo é atualizado corretamente ao adicionar gasto e despesa e editar poupança.

- **Descrição:** Testar a funcionalidade de visualizar saldo e verificar se as informações são atualizadas em tempo real, exibindo a soma dos valores em cada mês.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Visualizar Despesa essenciais.

- **Objetivo:** Verificar se a visualização de despesa essenciais é atualizado corretamente ao adicionar despesa.

- **Descrição:** Testar a funcionalidade de visualizar despesa essenciais e verificar se as informações são atualizadas em tempo real, exibindo a soma dos valores em cada mês do ano corrente.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Visualizar Despesas não essenciais.

- **Objetivo:** Verificar se a visualização de despesa não essenciais é atualizado corretamente ao adicionar despesa não essencial.

- **Descrição:** Testar a funcionalidade de visualizar despesas não essenciais e verificar se as informações são atualizadas em tempo real, exibindo a soma dos valores em cada mês do ano corrente.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Visualizar Gráfico de Balancete

- **Objetivo:** Verificar se o gráfico de balancete esta funcionando como deveria.

- **Descrição:** Testar o gráfico de balancete e verificar se as informações são atualizadas em tempo real, mostrando a porcentagem de despesas para cada categoria.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<br>

## Cenário de Teste: Visualizar Relatório por Categoria

- **Objetivo:** Verificar se o relatório de despesas por categoria é atualizado corretamente ao clicar no criar despesas e se mostra a porcentagem de cada categoria.

- **Descrição:** Testar a funcionalidade de visualização de despesas por categoria e verificar se as informações são atualizadas em tempo real, mostrando a porcentagem de despesas para cada categoria.

- **Grupo de Usuários:** Usuários registrados.

- **Ferramentas Utilizadas:** Navegador web, localStorage.

<!-- # Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7) -->
