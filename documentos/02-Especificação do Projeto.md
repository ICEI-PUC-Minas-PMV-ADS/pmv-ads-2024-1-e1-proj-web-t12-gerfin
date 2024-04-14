# Especificação do Projeto

## Personas

### Persona 1:
<figure> 
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t12-gerfin/assets/157512224/9c6555b7-537e-485e-ab8a-065fe3bd6075">

</figure>
<p>
Diego Martins tem 16 anos, é estudante do ensino médio e ganha uma mesada de meio salário mínimo. Diego usa a aplicação para controle financeiro, acompanhar seus gastos de lanches feitos na escola e uma maneira de poupar para comprar os novos video games que estão lançando.

### Persona 2:
<figure>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t12-gerfin/assets/157512224/13171215-18ce-4614-82fb-ec6cf7a013bf">
</figure>

Amanda Isadora Costa tem 25 anos, trabalha como enfermeira e ganha três salários mínimos. Amanda gasta muito dinheiro com seu cartão de crédito, porém está com intenção de se casar com seu noivo e precisa de utilizar a aplicação para fazer uma organização de gastos e sua poupança. Futuramente pretende morar junto com o marido, então precisa de uma forma de controlar as despesas de casa e não deixar que o cartão de crédito gaste todo seu salário.

### Persona 3:

<figure>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t12-gerfin/assets/157512224/eaf7faa7-82dd-413c-ab0e-9b1749a1383f">
</figure>

Eduardo Oliveira tem 35 anos, trabalha como motorista de aplicativo, não tem uma renda fixa e é a principal fonte de renda da família que conta com a esposa e um filho de 3 anos. Eduardo tem a intenção de usar a aplicação para ter um controle de seus gastos e ganhos no trabalho de forma diária para saber se o dia de trabalho foi lucrativo o suficiente ou não, necessita de uma forma de controlar os gastos da casa e de pensar nas despesas com o filho.


## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 1: Jovem </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Jovens de 12 a 18 anos de idade</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Conteúdos didáticos sobre finanças
Administração de orçamento
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 2: Jovem Adulto </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Acima de 18 anos</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Conteúdos didáticos sobre finanças
Administração de orçamento
Histórico de entrada/saída
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 3: Autônomo </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Microempreendedor</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Conteúdos didáticos sobre finanças
Administração de orçamento
Histórico de entrada/saída
</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Diego              | Aprender sobre o gerenciamento de finanças | Para melhorar o controle do meu dinheiro |
| Diego              | Somar quanto dinheiro vou juntar guardando 50 reais por semana | Comprar um produto desejado em uma loja |
| Amanda             | Somar quanto eu vou ter investido em curto, médio e longo prazo | Saber quanto teria no total próximo da data do casamento |
| Amanda             | Eliminar dívidas.| A fim de evitar negativação de crédito |
| Eduardo            | Administrar quanto ganho e gasto durante um dia de trabalho como motorista de aplicativo| Saber quanto ganharia líquido ao final do dia|
| Eduardo / Amanda   | Gerenciar os gastos essenciais e lazer durante o mês | Organizar quanto sobra ao final do mês |


## Requisitos do Projeto

### Requisitos Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RF- 01 | A aplicação deve permitir ao usuário cadastrar uma conta.                    | Alta  | 
| RF- 02 | A aplicação deve permitir ao usuário fazer o login da sua conta. | Alta  | 
| RF- 03 | A aplicação deve permitir que o usuário inserir o valor recebido e pago. | Alta  | 
| RF- 04 | A aplicação deve permitir ao usuário editar e deletar valor recebido e pago.| Alta  |
| RF- 05 | A aplicação deve permitir ao usuário filtrar os dados por mês. | Alta|
| RF- 06 | A aplicação deve permitir o cadastro da renda mensal de todos os componentes de uma família.| Alta|
| RF- 07 | A aplicação deve permitir ao usuário classificar o tipo de gasto (essencial ou não essencial). | Média | 
| RF- 08 | A aplicação deve gerar um gráfico de acompanhamento financeiro.| Média | 
| RF- 09 | A aplicação deve ter dicas de economia. | Média  | 
| RF- 10 | A aplicação deve exibir um balancete. | Média | 
| RF- 11 | A aplicação deve permitir ao usuário selecionar as cores dos gráficos. | Baixa | 
| RF- 12 | A aplicação deve ter um espaço separado para inserir valor que deseja poupar. | Baixa | 

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | A aplicação deve estar acessível em um ambiente público na Internet.                   | Alta  | 
| RNF- 02|A aplicação deve funcionar em vários tipos de dispositivos diferentes.|Alta|
| RNF- 02|A aplicação deve fazer o salvamento dos dados em local storage.|Alta|
| RNF-03 |A aplicação deve fazer o salvamento dos dados em local storage.|Alta|
| RNF-04 |A aplicação deve ser compatível com os navegadores Chrome, Microsoft Edge e Mozilla Firefox.|Alta|
| RNF-05 |A aplicação não deve exigir tanto desempenho de processamento.|Alta|
| RNF-06 |A aplicação deve possuir uma boa acessibilidade. |Média|
| RNF-07 |A aplicação deve ter a opção de ativar o modo de tela escura.|Baixa|
| RNF-08 |A aplicação deve ter a opção de fazer o login com Google.|Baixa|

**Prioridade: Alta / Média / Baixa. 

