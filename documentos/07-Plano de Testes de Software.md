# Plano de Testes de Software

Abaixo estão os cenários de testes selecionados para avaliação do sistema Leevi. Esses cenários foram cuidadosamente escolhidos com o objetivo de validar as diferentes funcionalidades implementadas, proporcionando uma excelente experiência aos usuários do sistema. No nosso plano de teste de software.
 
 <br>

|Caso de Teste    | CT-01 - Página Inicial - Redirecionamento para a página de Login |
|:---|:---|
| Requisitos Associados | RF-02 - A aplicação deve permitir ao usuário fazer o login da sua conta. |
| Objetivo do Teste | Verificar se o redirecionamento para a página de login ocorre corretamente ao clicar no botão "Login" na página inicial. |
| Passos | 1. Acessar a página inicial pelo navegador <br> 2. Clicar em "Login" no canto superior da tela. |
| Critérios de êxito | Ser redirecionado para página de login.  |
| Responsável pela elaborar do caso de Teste | Eric |
<hr>

|Caso de Teste    | CT-02 - Página Inicial - Redirecionamento para a página de cadastro |
|:---|:---|
| Requisitos Associados | RF-01 - A aplicação deve permitir ao usuário cadastrar uma conta. |
| Objetivo do Teste | Verificar se o redirecionamento para a página de cadastro ocorre corretamente ao clicar nos botões "Começe já!" e "Teste Gratuitamente" na página inicial. |
| Passos | 1. Acessar a página inicial pelo navegador <br> 2. Clicar em "Começe Já!" no canto superior da tela  <br>  3. clicar em "Teste Gratuitamente" no canto inferior esquerdo. |
| Critérios de êxito | Ser redirecionado para página de cadastro. |
| Responsável pela elaborar do caso de Teste | Eric |

<hr>

|Caso de Teste    | CT-03 - Cadastro de Novo Usuário |
|:---|:---|
| Requisitos Associados | RF-01 - A aplicação deve permitir ao usuário cadastrar uma conta. |
| Objetivo do Teste | Verificar se o processo de cadastro de novo usuário está funcionando adequadamente, permitindo que novos usuários se registrem fornecendo as informações necessárias. |
| Passos | 1.Acessar pelos botões "Comece Já!" e "Teste Gratuitamente" a página de cadastro <br> 2. Digitar nome, um email, senha e confirmação de senha <br> 3. Clicar em "Cadastrar". |
| Critérios de êxito | Aparecer a mensagem "Sucesso ao Logar" e ser redirecionado para a página do painel do site. |
| Responsável pela elaborar do caso de Teste | Eric |

<hr>

|Caso de Teste    | CT-04 - Login de Usuário |
|:---|:---|
| Requisitos Associados | RF-02 - A aplicação deve permitir ao usuário fazer o login da sua conta. |
| Objetivo do Teste | Verificar se o processo de login de usuário está funcionando corretamente, permitindo que os usuários acessem suas contas com credenciais válidas. |
| Passos | 1. Acessar pelo botão "Login" a página de login <br> 2. Digitar email e senha já cadastrados  <br> 3. Clicar em "Logar". |
| Critérios de êxito | Aparecer a mensagem "Sucesso ao Logar" e ser redirecionado para a página do painel do site. |
| Responsável pela elaborar do caso de Teste | Eric |

<hr>

|Caso de Teste    | CT-05 - Adicionar Despesa |
|:---|:---|
| Requisitos Associados | RF-03 - A aplicação deve permitir que o usuário inserir o valor recebido e pago. <br> RF-07 A aplicação deve permitir ao usuário classificar o tipo de gasto (essencial ou não essencial). |
| Objetivo do Teste | Verificar se é possível adicionar uma nova despesa ao sistema. |
| Passos | 1. Clicar em "Adicionar despesa" no bloco vermelho <br> 2. Digitar nome, escolher a despesa como essencial ou não, selecionar a categoria da despesa e o valor <br> 3. Clicar em "Criar".|
| Critérios de êxito | O modal se fechar e aparecer o valor de despesa somado, atualização do gráfico abaixo e a descrição na direita. Além de mostrar o saldo ainda disponível. |
| Responsável pela elaborar do caso de Teste | Eric |

<hr>

|Caso de Teste    | CT-06 - Adicionar Receita |
|:---|:---|
| Requisitos Associados | RF-03 - A aplicação deve permitir que o usuário inserir o valor recebido e pago. |
| Objetivo do Teste | Verificar se é possível adicionar uma nova receita ao sistema. |
| Passos | 1. Clicar em "Adicionar receita" no bloco verde <br> 2. Digitar nome e valor <br> 3. Clicar me "Criar".|
| Critérios de êxito | O modal se fechar e aparecer o valor de receita somado, atualização do gráfico abaixo e mostrar o saldo ainda disponível. |
| Responsável pela elaborar do caso de Teste | Eric |

<hr>

|Caso de Teste    | CT-07 - Editar Poupança |
|:---|:---|
| Requisitos Associados | RF-12 - A aplicação deve ter um espaço separado para inserir valor que deseja poupar. |
| Objetivo do Teste | Verificar se é possível editar um valor a ser poupado ao sistema. |
| Passos | 1. Clicar em "Alterar poupança" no bloco azul. <br> 2. Digitar o valor. <br> 3. Clicar em "Alterar".|
| Critérios de êxito | O modal se fechar e aparecer o valor de poupança salvo, atualização dos gráficos e mostrar o saldo ainda disponível. |
| Responsável pela elaborar do caso de Teste | Eric |

<hr>

|Caso de Teste    | CT-08 - Visualizar Receita, Despesa ou Poupança|
|:---|:---|
| Requisitos Associados | RF-08 - A aplicação deve gerar um gráfico de acompanhamento financeiro. |
| Objetivo do Teste | Verificar se a visualização de receita é atualizado corretamente ao adicionar receita. <br> Verificar se a visualização de despesa é atualizado corretamente ao adicionar despesa. <br> Verificar se a visualização de poupança é atualizado corretamente ao editar poupança.  |
| Passos | 1. Clicar em "Adicionar receita", "Adicionar despesa" ou "Alterar poupança". <br> 2. Fechar o modal <br> 3. Vizualizar a página do painel. <br> 4. Verificar se os gráficos mudaram.|
| Critérios de êxito | O modal se fechar e os gráficos atualizar com os valores adicionados. |
| Responsável pela elaborar do caso de Teste | Eric|

<hr>

|Caso de Teste    | CT-09 - Visualizar Saldo, Despesas essenciais e Despesas não essenciais|
|:---|:---|
| Requisitos Associados | RF-08 - A aplicação deve gerar um gráfico de acompanhamento financeiro. <br> RF-07 - A aplicação deve permitir ao usuário classificar o tipo de gasto (essencial ou não essencial).  |
| Objetivo do Teste | Verificar se a visualização saldo é atualizado corretamente ao adicionar gasto e despesa e editar poupança. <br> Verificar se a visualização de despesa essenciais é atualizado corretamente ao adicionar despesa. <br> Verificar se a visualização de despesa não essenciais é atualizado corretamente ao adicionar despesa não essencial.|
| Passos | 1. Clicar em "Adicionar receita", "Adicionar despesa" ou "Alterar poupança". <br> 2. Fechar o modal <br> 3. Vizualizar a página do painel. <br> 4. Verificar a mudanaça dos gráficos.|
| Critérios de êxito | O modal se fechar e os gráficos atualizar com os valores adicionados. <br> Os blocos de "Despesas essenciais" e "Despesas não essenciais" somarem os valores inseridos. |
| Responsável pela elaborar do caso de Teste | Eric|

<hr>

|Caso de Teste    | CT-10 - Visualizar atualização do gráfico de balancete|
|:---|:---|
| Requisitos Associados | RF-08 - A aplicação deve gerar um gráfico de acompanhamento financeiro. <br> RF-07 - A aplicação deve permitir ao usuário classificar o tipo de gasto (essencial ou não essencial). <br> RF-08	A aplicação deve gerar um gráfico de acompanhamento financeiro.  |
| Objetivo do Teste | Verificar se o gráfico de balancete esta funcionando como deveria. <br> Verificar se o relatório de despesas por categoria é atualizado corretamente ao clicar no criar despesas e se mostra a porcentagem de cada categoria.|
| Passos | 1. Clicar em "Adicionar receita", "Adicionar despesa" ou "Alterar poupança". <br> 2. Fechar o modal <br> 3. Vizualizar a página do painel. <br> 4. Verificar a mudanaça dos indicadores.|
| Critérios de êxito | O modal se fechar e os gráficos atualizar com os valores adicionados. <br> O gráfico de balancete exibir e atualizar a porcentagem dos valores inseridos pelo usuário. |
| Responsável pela elaborar do caso de Teste | Eric|

<hr>

|Caso de Teste      | CT-11 - Verificar redirecionamento para tela de balanço|
|:---|:---|
| Requisitos Associados   | RF-10 A aplicação deve exibir um balancete.  |
| Objetivo do Teste   | Verificar se o usuário consegue ir para a tela de balancete.|
| Passos   | 1. Clicar em "Ver detalhes" ou "Balanço" <br> 2. Verificar a página que aparece. |
| Critérios de êxito | O usuário ser redirecionado para tela de balancete. |
| Responsável pela elaborar do caso de Teste | Vitor |

<hr>

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
