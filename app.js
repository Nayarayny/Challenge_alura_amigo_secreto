let amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector('input').value;

    if (nome === "") {
        alert ('Por Favor insira um nome!');
    } else {
        amigos.push(nome);
        console.log(amigos);
        nome = document.querySelector('input');
        nome.value = "";
    }
}

function listaDeAmigos(tag, nomes) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i >= amigos.length; i++){
        lista.innerHTML = amigos;        
    }
}