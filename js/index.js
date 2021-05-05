var nome="Enrique R. Fernández";
var cargo = "CTO - Growdev";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-01");
var texto2 = document.getElementById("texto-02");


function colocarNomeNoHteml(nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;
}


function logarNome(){
    console.log(nome);

    }

  function clickNoProjetos(){
      console.log("Clicou no botão projetos");
      texto2.style.display="block";
  }
    
colocarNomeNoHteml(nome);
colocarCargoNoHtml(cargo);

