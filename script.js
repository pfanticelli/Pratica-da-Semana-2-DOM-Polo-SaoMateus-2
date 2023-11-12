var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
var tipoAnimal = document.getElementById('select_animais');

// Selecionar elemento 'container' ( 1 ponto)
var container = document.getElementById('container');

// Selecionar elemento 'nome' ( 1 ponto)
var nomeAnimal = document.getElementById('nome');

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
tipoAnimal.addEventListener('input', listarAnimais);

// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener('mouseover', mostrarNome);

// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome);

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...

  var escolha = tipoAnimal.value;

  var animais;
  if (escolha === "dog") {
    animais = cachorros;
  } else if (escolha === "cat") {
    animais = gatos;
  }

  for (var animal of animais) {
    var img = document.createElement("img");
    img.src = `img/${animal.imagem}.jpg`;
    img.dataset.nome = animal.nome;
    container.appendChild(img);
  }
}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...

  if(e.target && e.target.tagName == "IMG"){
    var nome = e.target.dataset.nome;
    nomeAnimal.textContent = nome;
  }
}

//VAR `p` SUBSTITUIDADA PELO `nomeAnimal`
function limparNome() {
  nomeAnimal.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}