// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

let listaAmigos = document.querySelector("#lista-amigos");

function limpiarCaja () {
    document.querySelector('#amigo').value = '';

}

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;  
    if(nuevoAmigo === '') {
        alert("Por favor, inserte un nombre.")
    };
   
    if (nuevoAmigo !== '') {
        amigos.push(nuevoAmigo);
        const ul = document.getElementById('listaAmigos');
        ul.innerHTML = '';
        limpiarCaja();

        amigos.forEach((amigo) => {
            const li = document.createElement('li')
            li.textContent = amigo;
            ul.appendChild(li);

        })

        input.value = '';
    }
}

function sortearAmigo() {
   
  let amigoRandom = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[amigoRandom];
  document.getElementById('resultado').textContent = `Amigo sorteado: ${amigoSorteado}`
 
  if (amigos.length === 0){
    document.getElementById('resultado').textContent = 'No hay amigos en la lista para sortear.';
  }
}






