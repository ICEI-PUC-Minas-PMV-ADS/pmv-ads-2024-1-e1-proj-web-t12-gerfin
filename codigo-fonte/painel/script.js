const banco = {
  "users": [
    {
      "id": 1,
      "name": "Ana",
      "email": "ana@gmail.com",
      "password": "123456",
      "data": [
        {
          "id": 1,
          "month": "Fevereiro",
          "savings": "0",
          "balance": [
            {
              "id": 1,
              "name": "Salário",
              "value": "5000,00",
              "type": "income",
              "date": "2022-03-01"
            },
            {
              "id": 2,
              "name": "Aluguel",
              "value": "1000,00",
              "type": "outcome",
              "essential": true,
              "category": "Casa",
              "date": "2022-03-01"
            },
            {
              "id": 3,
              "name": "Faculdade",
              "value": "500,00",
              "type": "outcome",
              "essential": true,
              "category": "Educação",
              "date": "2022-03-02"
            },
            {
              "id": 4,
              "name": "Viagem",
              "value": "1500,99",
              "type": "outcome",
              "essential": false,
              "category": "Lazer",
              "date": "2022-03-02"
            }
          ]
        },
        {
          "id": 2,
          "month": "Março",
          "savings": "100,00",
          "balance": [
            {
              "id": 1,
              "name": "Salário",
              "value": "5000,00",
              "type": "income",
              "date": "2022-03-01"
            },
            {
              "id": 2,
              "name": "Aluguel",
              "value": "1000,00",
              "type": "outcome",
              "essential": true,
              "category": "Casa",
              "date": "2022-03-01"
            },
            {
              "id": 3,
              "name": "Faculdade",
              "value": "500,00",
              "type": "outcome",
              "essential": true,
              "category": "Educação",
              "date": "2022-03-02"
            },
            {
              "id": 4,
              "name": "Jantar fora",
              "value": "200,19",
              "type": "outcome",
              "essential": false,
              "category": "Lazer",
              "date": "2022-03-02"
            },
            {
              "id": 5,
              "name": "Bônus",
              "value": "1500,00",
              "type": "income",
              "date": "2022-03-04"
            },
            {
              "id": 6,
              "name": "Supermercado",
              "value": "300,50",
              "type": "outcome",
              "essential": true,
              "category": "Alimentação",
              "date": "2022-03-05"
            },
            {
              "id": 6,
              "name": "Academia",
              "value": "100,00",
              "type": "outcome",
              "essential": true,
              "category": "Saúde",
              "date": "2022-03-06"
            },
            {
              "id": 8,
              "name": "Cinema",
              "value": "80,00",
              "type": "outcome",
              "essential": false,
              "category": "Lazer",
              "date": "2022-03-07"
            },
            {
              "id": 9,
              "name": "Internet",
              "value": "120,00",
              "type": "outcome",
              "essential": true,
              "category": "Casa",
              "date": "2022-03-08"
            },
            {
              "id": 10,
              "name": "Telefone",
              "value": "90,00",
              "type": "outcome",
              "essential": true,
              "category": "Casa",
              "date": "2022-03-09"
            },
            {
              "id": 11,
              "name": "Eletricidade",
              "value": "200,00",
              "type": "outcome",
              "essential": true,
              "category": "Casa",
              "date": "2022-03-10"
            },
            {
              "id": 12,
              "name": "Água",
              "value": "50,00",
              "type": "outcome",
              "essential": true,
              "category": "Casa",
              "date": "2022-03-11"
            },
            {
              "id": 13,
              "name": "Streaming",
              "value": "40,00",
              "type": "outcome",
              "essential": false,
              "category": "Lazer",
              "date": "2022-03-12"
            },
            {
              "id": 14,
              "name": "Farmácia",
              "value": "60,00",
              "type": "outcome",
              "essential": true,
              "category": "Saúde",
              "date": "2022-03-13"
            },
            {
              "id": 15,
              "name": "Livros",
              "value": "100,00",
              "type": "outcome",
              "essential": false,
              "category": "Educação",
              "date": "2022-03-13"
            }
          ]
        }
      ]
    }
  ]
}

const nick = document.querySelector('.nick');
const mes = document.querySelector('.select select');
const receita = document.querySelector('#receita');
const despesa = document.querySelector('#despesa');
const poupanca = document.querySelector('#poupanca');
const saldo = document.querySelector('#saldo');
const total = document.querySelector('#total');
const essencial = document.querySelector('#labelEssencial');
const notessencial = document.querySelector('#notessencialLabel');
const casa = document.querySelector('#casa');
const educacao = document.querySelector('#educacao');
const alimentacao = document.querySelector('#alimentacao');
const saude = document.querySelector('#saude');
const lazer = document.querySelector('#lazer');
const poupancades = document.querySelector('#poupancades');
const btlogout = document.querySelector('.logout');
const line = document.getElementById('line-chart').getContext('2d');
const pie = document.getElementById('pie-chart').getContext('2d');
let myLineChart;
let myPieChart;

let db = {};
let userEmail = localStorage.getItem('user');
if (!userEmail) {
  window.location.replace('../inicial/index.html');
}
userEmail = JSON.parse(userEmail);

let userData = {}
let month = ''
let monthData = {} 

// ao selecionar mes alterar dados
mes.addEventListener('change', (event) => {
  UpdateAllData(event.target.value)
})

//ao clicar no botão de logout
btlogout.addEventListener('click', logout);

Initialize();

function logout () {
  localStorage.removeItem('user');
  window.location.href = '../inicial/index.html';
}

function Initialize(){
      
  db = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : banco

  console.log('db', db)

  userData = db.users.find(user => user.email === userEmail);
  console.log('userData', userData)

  month = userData.data[userData.data.length - 1].month
  console.log('month', month)

  monthData = userData.data.find(item => item.month === month);
  console.log('monthData', monthData)

  CreateOptions()

  setTimeout(() => {
    UpdateAllData(month)
  }, 500);
}

/* function Initialize(){
  fetch('https://e6453e0f-53f0-4a59-8fec-e95392da66fe-00-2ikd57fat33b2.picard.replit.dev/db')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter os dados');
      }
      return response.json();
    })
    .then(res => {
      console.log('Dados recebidos.');
      
      db = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : res
  
      userData = db.users.find(user => user.email === userEmail);
      console.log('userData', userData)
    
      month = userData.data[userData.data.length - 1].month
      console.log('month', month)
    
      monthData = userData.data.find(item => item.month === month);
      console.log('monthData', monthData)
    
      CreateOptions()
    
      UpdateAllData(month)
    })
    .catch(error => {
      console.error('Erro:', error);
      });
} */

//preenchendo os dados
function FillData() {

  let data = monthData;

  // logica de capitura dos dados(receita, despesa, poupança e saldo)
  nick.textContent = userData.name;
  const receitaValue = data.balance.filter(item => item.type === 'income').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0); 
  const despesaValue = data.balance.filter(item => item.type === 'outcome').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0); 
  const poupancaValue = data.savings
  const saldoValue = receitaValue - despesaValue -  parseFloat(poupancaValue.replace(',', '.'))

  //colocando os dados em seus lugares(receita, despesa, poupança e saldo)
  receita.textContent = 'R$ ' + parseFloat(receitaValue).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  despesa.textContent =  'R$ ' + parseFloat(despesaValue).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  poupanca.textContent = 'R$ ' + parseFloat(poupancaValue).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  saldo.textContent = 'R$ ' + saldoValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  total.textContent = 'R$ ' + saldoValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  // logica de capitura dos dados(essencial e não essencial)
  const essentialValue = data.balance.filter(item => item.essential === true).reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const notessentialValue = data.balance.filter(item => item.essential === false).reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);

  //colocando os dados em seus lugares(essencial e não essencial)
  essencial.textContent = 'R$ ' + essentialValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  notessencial.textContent = 'R$ ' + notessentialValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  // logica de capitura dos dados(casa, transporte, alimentação, saude, lazer)
  const casaValue = data.balance.filter(item => item.category === 'Casa').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const educacaoValue = data.balance.filter(item => item.category === 'Educação').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const alimentacaoValue = data.balance.filter(item => item.category === 'Alimentação').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const saudeValue = data.balance.filter(item => item.category === 'Saúde').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const lazerValue = data.balance.filter(item => item.category === 'Lazer').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);

  //colocando os dados em seus lugares(casa, transporte, alimentação, saude, lazer)
  casa.textContent = casaValue ? ((casaValue/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%' : '0%';
  educacao.textContent = educacaoValue ? ((educacaoValue/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%' : '0%';
  alimentacao.textContent = alimentacaoValue ? ((alimentacaoValue/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%' : '0%';
  saude.textContent = saudeValue ? ((saudeValue/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%' : '0%';
  lazer.textContent = lazerValue ? ((lazerValue/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%' : '0%';
  poupancades.textContent =  despesaValue ? ((parseFloat(poupancaValue)/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%' : '0%';
}

//cria as opções dos meses
function CreateOptions() {
  for (let i = userData.data.length ; i != 0; i--) {
    const option = document.createElement('option');
    option.value = userData.data[i - 1].month;
    option.textContent = userData.data[i - 1].month;
    mes.appendChild(option);
  }
}

//modal poupança
document.addEventListener("DOMContentLoaded", function() {
  let modal = document.getElementById("modalSaving");
  let openModalBtn = document.getElementById("openModalPoupanca");
  let closeModalBtn = document.getElementsByClassName("close")[0];
  let sendValueBtn = document.getElementById("sendSavingsBtn");

  //ao clicar abrir modal
  openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
  });

  //ao clicar no botão de fechar
  closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  sendValueBtn.addEventListener("click", function() {
    let inputValue = document.getElementById("poupancaNewValue").value;
    AlterarSavings(inputValue);
    UpdateAllData(month);
    modal.style.display = "none";
  });
});

//modal receita 
document.addEventListener("DOMContentLoaded", function() {
  let modalR = document.getElementById("modalR");
  let openModalReceitaBtn = document.getElementById("openModalReceita");
  let closeRModalBtn = document.getElementsByClassName("closeR")[0];
  let sendValueReceitaBtn = document.getElementById("sendValueReceitaBtn");

  //ao clicar abrir modal
  openModalReceitaBtn.addEventListener("click", function() {
    modalR.style.display = "block";
  });

  //ao clicar no botão de fechar
  closeRModalBtn.addEventListener("click", function() {
    modalR.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modalR) {
      modalR.style.display = "none";       
    }
  });

  sendValueReceitaBtn.addEventListener("click", function() {
    let inputReceitaNome = document.getElementById("nomeReceita");
    let inputReceitaValue = document.getElementById("receitaNewValue");
    CriarReceita(inputReceitaValue.value, inputReceitaNome.value);
    UpdateAllData(month);
    modalR.style.display = "none";
  });
});
 
//modal despesa
document.addEventListener("DOMContentLoaded", function() {
  let modalD = document.getElementById("modalD");
  let openModalDespesaBtn = document.getElementById("openModalDespesa");
  let closeDModalBtn = document.getElementsByClassName("closeD")[0];
  let sendValueDespesaBtn = document.getElementById("sendValueDespesaBtn");

  //ao clicar abrir modal
  openModalDespesaBtn.addEventListener("click", function() {
    modalD.style.display = "block";
  });

  //ao clicar no botão de fechar
  closeDModalBtn.addEventListener("click", function() {
    modalD.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modalR) {
      modalD.style.display = "none";       
    }
  });

  sendValueDespesaBtn.addEventListener("click", function() {
    const nome = document.getElementById('nomeDespesa').value;
    const value = document.getElementById('despesaNewValue').value;
    const essencial = document.getElementById('essencialDespesa').value;
    const categoria = document.getElementById('categoriaDespesa').value;

    CriarDespesa(value, nome, categoria, essencial);
    UpdateAllData(month);
    modalD.style.display = "none";
  });
});

// Função para criar despesa
function CriarDespesa(novoValor, name, category, essential) {
  monthData.balance.push(
    { 
      id: monthData.balance.length + 1,
      name: name,
      value: parseFloat(novoValor).toFixed(2).replace('.', ','),
      type: 'outcome',
      essential: essential === 'true' ? true : false,
      category: category,
      date: formatDateToYYYYMMDD(new Date()), 
    });

  localStorage.setItem('db', JSON.stringify(db));
}

// Função para criar receita
function CriarReceita(novoValor, name) {
  monthData.balance.push(
    { 
      id: monthData.balance.length + 1,
      name: name, 
      value: parseFloat(novoValor).toFixed(2).replace('.', ','), 
      type: 'income', 
      date: formatDateToYYYYMMDD(new Date()), 
    });
  localStorage.setItem('db', JSON.stringify(db));
}

// Função para alterar o valor de savings
function AlterarSavings(novoValor) {
  monthData.savings = novoValor;
  localStorage.setItem('db', JSON.stringify(db));
}

function LineGraphData() {
  monthData.balance.sort((a, b) => new Date(a.date) - new Date(b.date));
  let dates = [...new Set(monthData.balance.map(function(item) {
    return item.date;
  }))];

  const dailyBalances = calculateDailyBalance(monthData.balance);

  let accumulated = parseFloat(monthData.savings )

  let values = Object.keys(dailyBalances).map(date => {
    console.log(dailyBalances[date])
    accumulated += parseFloat(dailyBalances[date].income) 
    accumulated -= parseFloat(dailyBalances[date].outcome)
    return accumulated
  });

  return {
    dates: dates,
    values: values
  };
}

function CreateLineChart(line, dates, values) {
  return new Chart(line, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Valores Acumulados',
        data: values,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
          }
        } 
      }
    });
}

function UpdateLineChart(chart, dates, values) {
  chart.data.labels = dates;
  chart.data.datasets[0].data = values;
  chart.update();
}

function CreatePieChart(pie) {

  const data = {
    labels: ['Casa', 'Educação', 'Alimentação', 'Saúde', 'Lazer e Hobbies', 'Poupança'],
    datasets: [{
      label: 'Despesas',
      data: [
        monthData.balance.filter( (item) => item.category === 'Casa').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0),
        monthData.balance.filter( (item) => item.category === 'Educação').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0),
        monthData.balance.filter( (item) => item.category === 'Alimentação').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0),
        monthData.balance.filter( (item) => item.category === 'Saúde').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0),
        monthData.balance.filter( (item) => item.category === 'Lazer').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0),
        monthData.savings
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]  
  };

  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = 'Gasto :';
              label +=  'R$: ' + context.raw.toFixed(2).replace('.', ',');
              return label;
            }
          }
        }
      }
    },
  };

  return new Chart(pie, config);
}

function UpdatePieChart(chart) {

  const data =[
    monthData.balance.filter( (item) => item.category === 'Casa').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0),
    monthData.balance.filter( (item) => item.category === 'Educação').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0),
    monthData.balance.filter( (item) => item.category === 'Alimentação').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0),
    monthData.balance.filter( (item) => item.category === 'Saúde').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0),
    monthData.balance.filter( (item) => item.category === 'Lazer').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0),
    monthData.savings
  ]

  chart.data.datasets[0].data = data;
  chart.update();
} 

function UpdateAllData(month){
  monthData = userData.data.find(item => item.month === month)

  FillData();

  const { dates, values } = LineGraphData();

  if (myLineChart) {
    UpdateLineChart(myLineChart, dates, values);
  } else {
    myLineChart = CreateLineChart(line, dates, values);
  }

  if (myPieChart) {
    UpdatePieChart(myPieChart);
  } else {
    myPieChart = CreatePieChart(pie);
  }
}

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function calculateDailyBalance(transactions) {
  const dailyBalance = {};
  let accumulatedBalance = 0;

  // Sort transactions by date
  transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

  transactions.forEach(transaction => {
    const date = transaction.date;
    const value = parseFloat(transaction.value.replace(',', '.'));

    if (!dailyBalance[date]) {
      dailyBalance[date] = { income: 0, outcome: 0, balance: 0 };
    }

    if (transaction.type === "income") {
      dailyBalance[date].income += value;
    } else if (transaction.type === "outcome") {
      dailyBalance[date].outcome += value;
    }

    dailyBalance[date].balance = dailyBalance[date].income - dailyBalance[date].outcome;
  });

  // Calculate accumulated balance for each day
  Object.keys(dailyBalance).forEach(date => {
    accumulatedBalance += dailyBalance[date].income - dailyBalance[date].outcome;
    dailyBalance[date].accumulatedBalance = accumulatedBalance;
  });

  return dailyBalance;
}

