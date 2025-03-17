// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    const input = document.getElementById('amigo')
    const nombre = input.value.trim()

    if (nombre === "") {
        alert ("Por favor ingrese un nombre")
        return
    } else if (amigos.includes(nombre)) {
        alert ("El amigo ya esta en la lista")
        return
        
    }

    const validacion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!validacion.test(nombre)) {
        alert ("Por favor ingrese solo letras")
        return
    }

    
    amigos.push(nombre);
    input.value = "";
    actualizarLista()
}

function actualizarLista(){
    const lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {   
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("No hay amigos para sortear. Agregue nombres.")
        return
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `el amigo secreto es: <strong>${amigoSorteado}</strong>`
    resultado.classList.add("show")
}

function limpiarAmigos() {
    amigos = []
    const lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}