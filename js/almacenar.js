<<<<<<< HEAD
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

=======
const listaId = 'lista';
const inputItem = document.getElementById('item');
const listaContenedor = document.getElementById('contenedor');
const btnAgregar = document.getElementById('agregar');
const btnLimpiar = document.getElementById('limpiar');
>>>>>>> 7b2109693ae36f27eca38f39fc5b8752684bc196
