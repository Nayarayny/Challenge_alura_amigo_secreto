let amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector('input').value;

    if (nome === "") {
        alert ('Por Favor insira um nome!');
    } else {
        amigos.push(nome);
        nome = document.querySelector('input');
        nome.value = "";
        listaDeAmigos();
    } 
}

function listaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
         lista.innerHTML += amigos[i] + "<br>";           
}
}

function sortearAmigo(){
    if (amigos.length > 0){
        let indiceAmigos = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = amigos[indiceAmigos];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo(a) sorteado foi: ${nomeSorteado}`;
    }else{
        alert('Digite os nomes dos seus amigos!');
    }
}

