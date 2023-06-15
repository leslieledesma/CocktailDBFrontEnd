fetch('https://leslieledesma.somee.com/api/cocktail/todos')
.then((response) => response.json())
.then((data) => displayData(data));

// Crear display de un elemento
function displayData(data) {
    console.log(data)
    let tabla = document.createElement('table');
    tabla.className = 'tabla';
    document.getElementById('div-tabla').appendChild(tabla);
    let id = document.createElement('th');
    tabla.appendChild(id);
    id.innerHTML = 'ID';
    id.className = 'header';
    let nombre = document.createElement('th');
    tabla.appendChild(nombre);
    nombre.innerHTML = 'Nombre';
    nombre.className = 'header';
    let receta = document.createElement('th');
    tabla.appendChild(receta);
    receta.innerHTML = 'Receta';
    receta.className = 'header';
    let foto = document.createElement('th');
    tabla.appendChild(foto);
    foto.innerHTML = 'Foto';
    foto.className = 'header';
    for (let index = 0; index < data.length; index++) {
        let posicion = tabla.rows.length;
        let fila = tabla.insertRow(posicion);
        fila.className = 'fila';
        tabla.appendChild(fila);
        let celdaID = fila.insertCell(0);
        let celdaNombre = fila.insertCell(1);
        let celdaReceta = fila.insertCell(2);
        let celdaFoto = fila.insertCell(3);
        celdaID.innerHTML = data[index].id;
        celdaID.className = 'id';
        celdaNombre.innerHTML = data[index].nombre;
        celdaNombre.className = 'nombre';
        celdaReceta.innerHTML = data[index].receta;
        celdaReceta.className = 'receta';
        celdaFoto.innerText = data[index].fotoSrc;
        celdaFoto.className = 'foto';
    }
}