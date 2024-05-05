const nick = document.querySelector('.nick');
const mes = document.querySelector('.select select');
const receita = document.querySelector('#receita');
const despesa = document.querySelector('#despesa');
const poupanca = document.querySelector('#poupanca');
const saldo = document.querySelector('#saldo');
const total = document.querySelector('#total');
const essencial = document.querySelector('#essencial');
const notessencial = document.querySelector('#notessencial');
const casa = document.querySelector('#casa');
const educacao = document.querySelector('#educacao');
const alimentacao = document.querySelector('#alimentacao');
const saude = document.querySelector('#saude');
const lazer = document.querySelector('#lazer');

let user = {}

// ao selecionar mes alterar dados
mes.addEventListener('change', (event) => {

  FillData(user, event.target.value);

})

// importando dados
fetch('https://my-json-server.typicode.com/ericmartins0203/db-leevi/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter os dados');
    }
    return response.json();
  })
  .then(db => {
    console.log('Dados recebidos:', db);

    user = db

    CreateOptions(db)
    FillData(db)

  })
  .catch(error => {
    console.error('Erro:', error);
  });

function FillData(db, month = null) {

  //selecionar usuário
  const user = db[0];

  // selecionando dados conforme mes recebido
  month ? month = user.data[user.data.findIndex(item => item.month === month)] : month = user.data[0];

  // logica de capitura dos dados(receita, despesa, poupança e saldo)
  nick.textContent = user.name;
  const receitaValue = month.balance.filter(item => item.type === 'income').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0); 
  const despesaValue = month.balance.filter(item => item.type === 'outcome').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0); 
  const poupancaValue = month.savings
  const saldoValue = receitaValue - despesaValue -  parseFloat(poupancaValue.replace(',', '.'))

  //colocando os dados em seus lugares(receita, despesa, poupança e saldo)
  receita.textContent = 'R$ ' + parseFloat(receitaValue).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  despesa.textContent =  'R$ ' + parseFloat(despesaValue).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  poupanca.textContent = 'R$ ' + parseFloat(poupancaValue).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  parseFloat(db[0].data[0].savings).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  saldo.textContent = 'R$ ' + saldoValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  total.textContent = 'R$ ' + saldoValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  // logica de capitura dos dados(essencial e não essencial)
  const essentialValue = month.balance.filter(item => item.essential === true).reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const notessentialValue = month.balance.filter(item => item.essential === false).reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);

  //colocando os dados em seus lugares(essencial e não essencial)
  essencial.textContent = 'R$ ' + essentialValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  notessencial.textContent = 'R$ ' + notessentialValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  // logica de capitura dos dados(casa, transporte, alimentação, saude, lazer)
  const casaValue = month.balance.filter(item => item.category === 'Casa').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const educacaoValue = month.balance.filter(item => item.category === 'Educação').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const alimentacaoValue = month.balance.filter(item => item.category === 'Alimentação').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const saudeValue = month.balance.filter(item => item.category === 'Saude').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const lazerValue = month.balance.filter(item => item.category === 'Lazer').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);

  //colocando os dados em seus lugares(casa, transporte, alimentação, saude, lazer)
  casa.textContent = ((casaValue/despesaValue).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';
  educacao.textContent = ((educacaoValue/despesaValue).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';
  alimentacao.textContent = ((alimentacaoValue/despesaValue).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';
  saude.textContent = ((saudeValue/despesaValue).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';
  lazer.textContent = ((lazerValue/despesaValue).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';
}

function CreateOptions(db) {
  for (let i = db[0].data.length ; i != 0; i--) {
    const option = document.createElement('option');
    option.value = db[0].data[i - 1].month;
    option.textContent = db[0].data[i - 1].month;
    mes.appendChild(option);
  }
}





