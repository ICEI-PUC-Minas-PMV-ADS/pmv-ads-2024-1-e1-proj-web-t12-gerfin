const data = {
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

document.getElementById('LoginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting the default way

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');


    const user = data.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user.email));
      message.textContent = 'Sucesso ao logar!';
      message.style.color = 'green';
      setTimeout(() => {
        window.location.href = '../painel/index.html';
      }, 1000);
    } else {
      message.textContent = 'Email ou senha incorretos.';
      message.style.color = 'red';
      throw new Error('Email ou senha incorretos');
    }
});