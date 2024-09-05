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


