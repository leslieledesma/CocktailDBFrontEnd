// FETCH Buscar por nombre
document.getElementById('boton-buscar').addEventListener('click', getData);
async function getData() {
    let nombre = ((document.getElementById('input-bebida').value).trim());
    if (nombre == '') {
        let response = await fetch('https://leslieledesma.somee.com/api/cocktail/todos');
        console.log(response);
        let data = await response.json();
        displayAllData(data);
    } else {
        let response = await fetch(`https://leslieledesma.somee.com/api/cocktail/buscar/${nombre}`);
        console.log(response);
        let data = await response.json();
        displayData(data);
    }
    document.getElementById('input-bebida').value = '';
}

// Crear display de un elemento
function displayData(data) {
    console.log(data)
    let div = document.getElementById('div-contenido');
    div.innerHTML = '';
    let box = document.createElement('div');
    div.appendChild(box);
    box.className = 'box';
    let textbox = document.createElement('div');
    box.appendChild(textbox);
    textbox.className = 'textbox';
    let nombre = document.createElement('h2');
    nombre.innerHTML = data.nombre;
    textbox.appendChild(nombre);
    let receta = document.createElement('p');
    receta.innerHTML = data.receta;
    textbox.appendChild(receta);
    receta.className = 'recetaTxt';
    let imagen = data.fotoSrc;
    box.style.backgroundImage = `url(${imagen})`;
}

// Crear display de una lista de elementos
function displayAllData(data) {
    let div = document.getElementById('div-contenido');
    div.innerHTML = '';
    for (let index = 0; index < data.length; index++) {
        let box = document.createElement('div');
        div.appendChild(box);
        box.className = 'box';
        let textbox = document.createElement('div');
        box.appendChild(textbox);
        textbox.className = 'textbox';
        let nombre = document.createElement('h2');
        nombre.innerHTML = data[index].nombre;
        textbox.appendChild(nombre);
        let receta = document.createElement('p');
        receta.innerHTML = data[index].receta;
        textbox.appendChild(receta);
        receta.className = 'recetaTxt';
        let imagen = data[index].fotoSrc;
        box.style.backgroundImage = `url(${imagen})`;
        // let imagen = document.createElement('img');
        // imagen.src = data[index].fotoSrc;
        // imagen.className = 'img';
        // box.appendChild(imagen);
    }
}

// FETCH Buscar aleatorio
document.getElementById('boton-aleatorio').addEventListener('click', getRandom);
function getRandom() {
    fetch('https://leslieledesma.somee.com/api/cocktail/aleatorio')
    .then((response) => response.json())
    .then((data) => displayData(data));
}