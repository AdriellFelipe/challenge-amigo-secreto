let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nomeAmigo = input.value.trim();

    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);

        atualizarListaAmigos();

        input.value = "";
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos para sortear!');
        return;
    }

    document.getElementById('listaAmigos').style.display = 'none';

    let indexAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indexAleatorio, 1)[0];

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;

    atualizarListaAmigos();
}