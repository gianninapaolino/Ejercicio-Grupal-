
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

function agregarItem() { 
    let nuevoItem = inputItem.value.trim();
    if (nuevoItem){
        let lista = JSON.parse(localStorage.getItem('listaId')) || [];
        lista.push(nuevoItem);    
        localStorage.setItem('listaId', JSON.stringify(lista));   
 
        const li = document.createElement('li');
        li.textContent = nuevoItem;
        listaContenedor.appendChild(li);
        inputItem.value = '';


    }
}
console.log(agregarItem());


/* esto es para eliminar un elemento*/
function eliminarItem(){
    localStorage.setItem('listaId', JSON.stringify([]));
    listaContenedor.innerHTML = '';
  
}


/*le da funcionalidad a los botones*/
btnAgregar.addEventListener('click', agregarItem);
btnLimpiar.addEventListener('click', eliminarItem);


//Carga la lista al iniciar la página
cargarLista();


