const listaId = 'lista';
const inputItem = document.getElementById('item');
const listaContenedor = document.getElementById('contenedor');
const btnAgregar = document.getElementById('agregar');
const btnLimpiar = document.getElementById('limpiar');

//Cargar lista desde localStorage
function cargarLista(){
    const listaGuardada = localStorage.getItem('listaId');
    if (listaGuardada){
        const lista = JSON.parse(listaGuardada);
        lista.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaContenedor.appendChild(li);
        });
    }
}