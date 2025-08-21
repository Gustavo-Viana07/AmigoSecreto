// Lista de amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("⚠️ Digite um nome válido!");
    return;
  }

  amigos.push(nome);
  input.value = "";
  exibirLista();
}

// Função para exibir a lista de amigos
function exibirLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Função para sortear amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("⚠️ Adicione pelo menos um amigo antes do sorteio!");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerText = `🎉 O amigo secreto sorteado foi: ${sorteado}`;
}
