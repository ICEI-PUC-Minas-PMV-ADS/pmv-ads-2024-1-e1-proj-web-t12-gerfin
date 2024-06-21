const db = {
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
              "date": "2022-03-02"
            },
            {
              "id": 3,
              "name": "Faculdade",
              "value": "500,00",
              "type": "outcome",
              "essential": true,
              "category": "Educação",
              "date": "2022-03-03"
            },
            {
              "id": 4,
              "name": "Viagem",
              "value": "1500,99",
              "type": "outcome",
              "essential": false,
              "category": "Lazer",
              "date": "2022-03-04"
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

/* let db = {}

fetch('https://e6453e0f-53f0-4a59-8fec-e95392da66fe-00-2ikd57fat33b2.picard.replit.dev/db')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter os dados');
    }
    return response.json();
  })
  .then(res => {
    db = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : res;
    console.log('db', db)
  })
  .catch(error => {
    console.error('Erro:', error);
  }); */

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

  // Cria uma nova instância de User
  const newUser = {
    "id": generateUUID(),
    "nome": nome,
    "email": email,
    "senha": senha,
    "data": []
  };

  // Criar uma nova instância do objeto Date
  const currentDate = new Date();

  // Obter o mês atual (0 a 11, onde 0 é janeiro e 11 é dezembro)
  const currentMonth = currentDate.getMonth();

  // Adicionar 1 ao mês para obter o valor correto (1 a 12)
  const currentMonthNumber = currentMonth + 1;

  // Array de nomes dos meses
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  // Obter o nome do mês atual
  const currentMonthName = monthNames[currentMonth];

  console.log(currentMonthName)

  newUser.data.push({
    "id": generateUUID(),
    "month": currentMonthName,
    "savings": "0",
    "balance": []
  })

  db.users.push(newUser);

  localStorage.setItem('db', JSON.stringify(db));

  localStorage.setItem('user', JSON.stringify(newUser.email));
  message.textContent = 'Sucesso ao logar!';
  message.style.color = 'green';
  setTimeout(() => {
    window.location.href = '../painel/index.html';
  }, 1000);

  // Envia os dados para o servidor
/*   fetch('https://e6453e0f-53f0-4a59-8fec-e95392da66fe-00-2ikd57fat33b2.picard.replit.dev/db', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      users: db.users
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    alert('Cadastrado com sucesso!');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Erro ao cadastrar');
  }); */
