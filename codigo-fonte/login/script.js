document.getElementById('LoginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting the default way

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  fetch('https://e6453e0f-53f0-4a59-8fec-e95392da66fe-00-2ikd57fat33b2.picard.replit.dev/db')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
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
  })
  .catch(error => console.error('Error:', error));
});