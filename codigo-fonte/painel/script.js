const nick = document.querySelector('.nick');
const mes = document.querySelector('.select select');
const receita = document.querySelector('#receita');
const despesa = document.querySelector('#despesa');
const poupanca = document.querySelector('#poupanca');
const saldo = document.querySelector('#saldo');
const total = document.querySelector('#total');
const essencial = document.querySelector('#labelEssencial');
const notessencial = document.querySelector('#notessencial');
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
/* let userEmail = localStorage.getItem('user');
if (!userEmail) {
  window.location.replace('../login/index.html');
}
userEmail = JSON.parse(userEmail); */

userEmail = 'ana@gmail.com'

let userData = {}
let month = ''
let monthData = {} 

// ao selecionar mes alterar dados
mes.addEventListener('change', (event) => {
  UpdateAllData(event.target.value)
})

//ao clicar no botão de logout
btlogout.addEventListener('click', logout);

function logout () {
  localStorage.removeItem('user');
  window.location.href = '../login/index.html';
}


// importando dados
fetch('https://e6453e0f-53f0-4a59-8fec-e95392da66fe-00-2ikd57fat33b2.picard.replit.dev/db')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter os dados');
    }
    return response.json();
  })
  .then(res => {
    console.log('Dados recebidos.');

    db = res;
    console.log('db', res)

    userData = res.users.find(user => user.email === userEmail);
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
  const saudeValue = data.balance.filter(item => item.category === 'Saude').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);
  const lazerValue = data.balance.filter(item => item.category === 'Lazer').reduce((acc, data) => acc + parseFloat(data.value.replace(',', '.')), 0);

  //colocando os dados em seus lugares(casa, transporte, alimentação, saude, lazer)
  casa.textContent = ((casaValue/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';
  educacao.textContent = ((educacaoValue/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';
  alimentacao.textContent = ((alimentacaoValue/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';
  saude.textContent = ((saudeValue/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';
  lazer.textContent = ((lazerValue/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';
  poupancades.textContent = ((parseFloat(poupancaValue)/(despesaValue + parseFloat(poupancaValue))).toFixed(4)*100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + '%';

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
    let inputReceita = document.getElementById("receitaNewValue").value;
    receita.textContent = 'R$ ' + parseFloat(inputReceita).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
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
    const nome = document.getElementById('nome').value;
    let inputValue = document.getElementById("despesaNewValue").value;
    alterarSavings(1, 0, inputValue);
    FillData(user);
    modalD.style.display = "none";
  });
});

// Função para alterar o valor de savings
function alterarSavingsR(userId, monthIndex, novoValor) {
  // Acessar o usuário pelo ID
  var usuario = user.find(user => user.id === userId);
  if (usuario) {
    // Acessar o mês específico pelo índice
    var mes = usuario.data[monthIndex];
    if (mes) {
      mes.savings = novoValor;
      modalR.style.display = "none";
    }
  }
}

// Função para alterar o valor de savings
function AlterarSavings(novoValor) {
  monthData.savings = novoValor;
}

function LineGraphData() {
  let dates = monthData.balance.map(function(item) {
    return item.date;
  });
  let accumulatedValue = -parseFloat(monthData.savings);
  let values = monthData.balance.map(function(transaction ) {
    const value = parseFloat(transaction.value.replace(',', '.')); // Convertendo o valor para número
    const isOutcome = transaction.type === "outcome";
    // Ajustando o valor para ser negativo se for uma despesa (outcome)
    isOutcome ? accumulatedValue -= value :  accumulatedValue += value;
    return accumulatedValue;
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