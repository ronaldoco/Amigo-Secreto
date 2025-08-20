//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let numeroLimite = 10;


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita o envio padrão do formulário
      document.getElementById('btnAdicionar').click();
    }
  });

function criarListaHTML(listaDeNomes) {
  let listaElemento = document.createElement("ul"); // Cria um elemento de lista (<ul>)
  
  for (let i = 0; i < listaDeNomes.length; i++) {
    const item = document.createElement("li"); // Cria um item de lista (<li>)
    item.textContent = listaDeNomes[i]; // Define o texto do item
    listaElemento.appendChild(item); // Adiciona o item à lista
  }
  //console.log(listaElemento);
  return listaElemento; // Retorna o elemento <ul> completo
}

function limparInput(nomeInput) {
  const input = document.getElementById(nomeInput);
  if (input.value === "") {
    input.placeholder = "Digite um nome..."; // Restaura o placeholder original
  } else {
     input.value = ""; // Limpa o valor do input
  }
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if(nome !== ""){

        listaDeAmigos.push(nome);

        let campo = document.getElementById("listaAmigos");

        const listItem = document.createElement("li"); //Cria um elemento <li>
        listItem.textContent = nome; //Define o texto do item
        campo.appendChild(listItem); //Adiciona o <li> à lista HTML
    } else {
          alert("Digite um nome válido!")
      }
        console.log(listaDeAmigos);
        limparInput('amigo');   
   
}


function sortearAmigo(){
    let nro = listaDeAmigos.length;
    let escolhido = parseInt(Math.random() *nro);
    console.log(escolhido , listaDeAmigos[escolhido]);
    let campo = document.getElementById("resultado");
    console.log(campo);

    const itemToRemove = campo.getElementsByTagName("li");
    console.log(itemToRemove);
    if (itemToRemove.length > 0){
      campo.removeChild(itemToRemove[0]); //Remove um elemento <li>
    }  

    const listItem = document.createElement("li"); //Cria um elemento <li>
    listItem.textContent = "O nome do seu amigo secreto é: " + listaDeAmigos[escolhido]; //Define o texto do item
    campo.appendChild(listItem); //Adiciona o <li> à lista HTML

}


