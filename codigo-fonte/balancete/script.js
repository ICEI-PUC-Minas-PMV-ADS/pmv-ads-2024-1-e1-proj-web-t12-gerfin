//para redirecionar para página inicial 
function redirecionarIni(){
    window.location.href = "'../painel/index.html'"
}

//para deletar gastos
var dados1 = document.querySelector(".dados1");
var dados2 = document.querySelector(".dados2");
var dados3 = document.querySelector(".dados3");
var dados4 = document.querySelector(".dados4");
var dlt1 = document.querySelector("#dlt1");
dlt1.addEventListener("click", function(){
    dados1.remove();
});
dlt2.addEventListener("click", function(){
    dados2.remove();   
});
dlt3.addEventListener("click", function(){
    dados3.remove();   
});
dlt4.addEventListener("click", function(){
    dados4.remove();   
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
      if (event.target == modalD) {
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

  //modal editar valores
  document.addEventListener("DOMContentLoaded", function() {
    let modalEdt = document.getElementById("modalEdt");
    let openModalEditarBtn = document.querySelectorAll(".openModalEditar");
    for (let i = 0; i < openModalEditarBtn.length; i++){
      openModalEditarBtn[i].addEventListener("click", function(){
        modalEdt.style.display = "block";
      })
    }
    let closeDModalBtn = document.getElementsByClassName("closeEdt")[0];
    let sendValueEditarBtn = document.getElementById("editValueBtn");
  
    //ao clicar no botão de fechar
    closeDModalBtn.addEventListener("click", function() {
      modalEdt.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modalEdt) {
        modalEdt.style.display = "none";       
      }
    });
  
    sendValueEditarBtn.addEventListener("click", function() {
      const nome = document.getElementById('nome').value;
      let inputValue = document.getElementById("despesaNewValue").value;
      alterarSavings(1, 0, inputValue);
      FillData(user);
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
  });
  pagina2.addEventListener("click", () => {
    pagina2.style.fontWeight = "bolder";
    pagina1.style.fontWeight = "lighter";
    pagina3.style.fontWeight = "lighter";
    pagina4.style.fontWeight = "lighter";
  });
  pagina3.addEventListener("click", () => {
    pagina3.style.fontWeight = "bolder";
    pagina1.style.fontWeight = "lighter";
    pagina2.style.fontWeight = "lighter";
    pagina4.style.fontWeight = "lighter";
  });
  pagina4.addEventListener("click", () => {
    pagina4.style.fontWeight = "bolder";
    pagina1.style.fontWeight = "lighter";
    pagina2.style.fontWeight = "lighter";
    pagina3.style.fontWeight = "lighter";
  });
  pagina1.addEventListener("click", function(){
    dados.style.display = "block";
  });
    pagina2.addEventListener("click", function(){
    dados.style.display = "none";
  });
  pagina3.addEventListener("click", function(){
    dados.style.display = "none";
  });
  pagina4.addEventListener("click", function(){
    dados.style.display = "none";
  });
  