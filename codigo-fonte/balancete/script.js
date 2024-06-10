const banco = {
  users: [
    {
      id: 1,
      name: "Ana",
      email: "ana@gmail.com",
      password: "123456",
      data: [
        {
          id: 1,
          month: "Fevereiro",
          savings: "0",
          balance: [
            {
              id: 1,
              name: "Salário",
              value: "5000,00",
              type: "income",
              date: "2022-03-01",
            },
            {
              id: 2,
              name: "Aluguel",
              value: "1000,00",
              type: "outcome",
              essential: true,
              category: "Casa",
              date: "2022-03-02",
            },
            {
              id: 3,
              name: "Faculdade",
              value: "500,00",
              type: "outcome",
              essential: true,
              category: "Educação",
              date: "2022-03-03",
            },
            {
              id: 4,
              name: "Viagem",
              value: "1500,99",
              type: "outcome",
              essential: false,
              category: "Lazer",
              date: "2022-03-04",
            },
          ],
        },
        {
          id: 2,
          month: "Março",
          savings: "100,00",
          balance: [
            {
              id: 1,
              name: "Salário",
              value: "5000,00",
              type: "income",
              date: "2022-03-01",
            },
            {
              id: 2,
              name: "Aluguel",
              value: "1000,00",
              type: "outcome",
              essential: true,
              category: "Casa",
              date: "2022-03-01",
            },
            {
              id: 3,
              name: "Faculdade",
              value: "500,00",
              type: "outcome",
              essential: true,
              category: "Educação",
              date: "2022-03-02",
            },
            {
              id: 4,
              name: "Jantar fora",
              value: "200,19",
              type: "outcome",
              essential: false,
              category: "Lazer",
              date: "2022-03-02",
            },
            {
              id: 5,
              name: "Bônus",
              value: "1500,00",
              type: "income",
              date: "2022-03-04",
            },
            {
              id: 6,
              name: "Supermercado",
              value: "300,50",
              type: "outcome",
              essential: true,
              category: "Alimentação",
              date: "2022-03-05",
            },
            {
              id: 6,
              name: "Academia",
              value: "100,00",
              type: "outcome",
              essential: true,
              category: "Saúde",
              date: "2022-03-06",
            },
            {
              id: 8,
              name: "Cinema",
              value: "80,00",
              type: "outcome",
              essential: false,
              category: "Lazer",
              date: "2022-03-07",
            },
            {
              id: 9,
              name: "Internet",
              value: "120,00",
              type: "outcome",
              essential: true,
              category: "Casa",
              date: "2022-03-08",
            },
            {
              id: 10,
              name: "Telefone",
              value: "90,00",
              type: "outcome",
              essential: true,
              category: "Casa",
              date: "2022-03-09",
            },
            {
              id: 11,
              name: "Eletricidade",
              value: "200,00",
              type: "outcome",
              essential: true,
              category: "Casa",
              date: "2022-03-10",
            },
            {
              id: 12,
              name: "Água",
              value: "50,00",
              type: "outcome",
              essential: true,
              category: "Casa",
              date: "2022-03-11",
            },
            {
              id: 13,
              name: "Streaming",
              value: "40,00",
              type: "outcome",
              essential: false,
              category: "Lazer",
              date: "2022-03-12",
            },
            {
              id: 14,
              name: "Farmácia",
              value: "60,00",
              type: "outcome",
              essential: true,
              category: "Saúde",
              date: "2022-03-13",
            },
            {
              id: 15,
              name: "Livros",
              value: "100,00",
              type: "outcome",
              essential: false,
              category: "Educação",
              date: "2022-03-13",
            },
          ],
        },
      ],
    },
  ],
};

const nick = document.querySelector('.nick');
const mes = document.querySelector('.select select');


let db = localStorage.getItem("db") ? JSON.parse(localStorage.getItem("db")) : banco;
let userEmail = JSON.parse(localStorage.getItem("user"));
let userData = db.users.find((user) => user.email === userEmail);
console.log('userData', userData)
let monthData = userData.data[userData.data.length - 1];
console.log('monthData', monthData)
let pagina = 1;
let editId = null;

nick.textContent = userData.name;

table.innerHTML = createTransactionHTML(monthData.balance);

CreateOptions();

// ao selecionar mes alterar dados
mes.addEventListener('change', (event) => {
  monthData = userData.data.find(item => item.month === event.target.value);
  recriaTabela()
})

function recriaTabela() {
  document.querySelectorAll('dados1').forEach(e => e.remove())
  table.innerHTML = createTransactionHTML(monthData.balance);
}

//para redirecionar para página inicial
function redirecionarIni() {
  window.location.href = "'../painel/index.html'";
}

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
    recriaTabela();
    modalR.style.display = "none";
  });
});

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
    if (event.target == modalD) {
      modalD.style.display = "none";       
    }
  });

  sendValueDespesaBtn.addEventListener("click", function() {
    const nome = document.getElementById('nomeDespesa').value;
    const value = document.getElementById('despesaNewValue').value;
    const essencial = document.getElementById('essencialDespesa').value;
    const categoria = document.getElementById('categoriaDespesa').value;

    CriarDespesa(value, nome, categoria, essencial);
    modalD.style.display = "none";
    recriaTabela();
  });
});

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

//modal editar valores
document.addEventListener("DOMContentLoaded", function () {
  let modalEdt = document.getElementById("modalEdt");
  let openModalEditarBtn = document.querySelectorAll(".openModalEditar");
  for (let i = 0; i < openModalEditarBtn.length; i++) {
    openModalEditarBtn[i].addEventListener("click", function () {
      modalEdt.style.display = "block";
    });
  }
  let closeDModalBtn = document.getElementsByClassName("closeEdt")[0];
  let sendValueEditarBtn = document.getElementById("editValueBtn");

  //ao clicar no botão de fechar
  closeDModalBtn.addEventListener("click", function () {
    modalEdt.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modalEdt) {
      modalEdt.style.display = "none";
    }
  });

  sendValueEditarBtn.addEventListener("click", function () {
    const nome = document.getElementById('nomeEdit').value || '';
    const value = document.getElementById('valueEdit').value || '';
    const essencial = document.getElementById('essencialEdit').value || '';
    const categoria = document.getElementById('categoriaEdit').value || '';

    const index = monthData.balance.map(element => element.id === editId).indexOf(true);
    const item = monthData.balance[index];
    console.log(item)
    if ( item.type === 'income') {
      item.name = nome || item.name;
      item.value = value || item.value;
    } else {
      item.name = nome || item.name;
      item.value = value || item.value;
      item.essential = essencial === 'true' ? true : false;
      item.category = categoria || item.category;
    }
    console.log(item)
    recriaTabela();
    localStorage.setItem('db', JSON.stringify(db));
    modalEdt.style.display = "none";
  });
});

//Trocando de página
var dados = document.querySelector(".dados");
var pagina1 = document.getElementById("pg1");
var pagina2 = document.getElementById("pg2");
var pagina3 = document.getElementById("pg3");
var pagina4 = document.getElementById("pg4");

pagina1.addEventListener("click", () => {
  pagina1.style.fontWeight = "bolder";
  pagina2.style.fontWeight = "lighter";
  pagina3.style.fontWeight = "lighter";
  pagina4.style.fontWeight = "lighter";
  pagina=1;
  recriaTabela()
});

pagina2.addEventListener("click", () => {
  pagina2.style.fontWeight = "bolder";
  pagina1.style.fontWeight = "lighter";
  pagina3.style.fontWeight = "lighter";
  pagina4.style.fontWeight = "lighter";
  pagina = 2;
  recriaTabela()
});

pagina3.addEventListener("click", () => {
  pagina3.style.fontWeight = "bolder";
  pagina1.style.fontWeight = "lighter";
  pagina2.style.fontWeight = "lighter";
  pagina4.style.fontWeight = "lighter";
  pagina = 3;
  recriaTabela()
});

pagina4.addEventListener("click", () => {
  pagina4.style.fontWeight = "bolder";
  pagina1.style.fontWeight = "lighter";
  pagina2.style.fontWeight = "lighter";
  pagina3.style.fontWeight = "lighter";
  pagina = 4;
  recriaTabela()
});

function createTransactionHTML(transactions) {
  transactions = transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

  if ( pagina == 1) {
    transactions = transactions.slice(0, 10)
  } else if ( pagina == 2) {
    transactions = transactions.slice(10, 20)
  } else if ( pagina == 3) {
    transactions = transactions.slice(20, 30)
  } else if ( pagina == 4) {
    transactions = transactions.slice(30, 40)
  }


  return transactions
    .map((transaction) => {
      const { name, type, category, date, essential, value } = transaction;

      const tipo = type === "income" ? "Receita" : "Gasto";
      const essencial = essential ? "Sim" : "Não";
      const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      });
      const formattedValue = `R$${value.replace(".", ",")}`;

      return `
      <div class="dados1">
        <p class="nome">${name}</p>
        <p class="tipo">${tipo}</p>
        <p class="categoria">${category || ""}</p>
        <p class="data">${formattedDate}</p>
        <p class="essencial">${essencial}</p>
        <p class="valor">${formattedValue}</p>
        <div id="edt-dlt">
          <img src="../images/editar.png" alt="Editar" onClick="editItem(${transaction.id})" />
          <img src="../images/delete.png" alt="Deletar" id="dlt3" onclick="deleteItem(${transaction.id})" />
        </div>
      </div>
    `;
    })
    .join("");
}

function CreateOptions() {
  for (let i = userData.data.length ; i != 0; i--) {
    const option = document.createElement('option');
    option.value = userData.data[i - 1].month;
    option.textContent = userData.data[i - 1].month;
    mes.appendChild(option);
  }
}

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

function editItem(id) {
  editId = id;
  modalEdt.style.display = "block";
}

function deleteItem(id) {
  const index = monthData.balance.map(element => element.id === id).indexOf(true);
  monthData.balance.splice(index, 1);
  recriaTabela();
  console.log(monthData.balance)
  localStorage.setItem('db', JSON.stringify(db));
}

document.getElementById('filtro').addEventListener('change', function() {
  let filtro = this.value;
  if (filtro !== '') {
    table.innerHTML = createTransactionHTML(monthData.balance.filter(item => item.type === filtro));
  }else {
    table.innerHTML = createTransactionHTML(monthData.balance);
  }
});