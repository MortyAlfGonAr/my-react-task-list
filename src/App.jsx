import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  
  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState('')

  useEffect(() => {
    const lista = localStorage.getItem('miLista')
    if (lista) {
      setTareas(JSON.parse(lista))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('miLista', JSON.stringify(tareas))
  }, [tareas])

 const handleChangeCompletado = (completado, id) => {
  let nuevoEstadoCompletado = tareas.map((tarea) => {
    if (tarea.id === id) {
      return {id: tarea.id, descripcion: tarea.descripcion, estaCompletada: completado}
    }
    return tarea;
  })
  setTareas(nuevoEstadoCompletado)
 }

  const handleChange = (e) => {
    setNuevaTarea(e.target.value)
  }

  const handleClickAgregar = (e) => {
    e.preventDefault()
    setTareas([...tareas, {id: new Date().getTime().toString(), descripcion: nuevaTarea, estaCompletada: false}])
  }

  const handleClickEditar = (id, nombre) => {
    let entrada = prompt('Edita la tarea: ', nombre);

    if (entrada) { //Este if lo uso por si de pronto no ingreso nada en el prompt, para evitar un null
      let tareaEditada = tareas.map((tarea) => {
        if(tarea.id === id){
          return {id: tarea.id, descripcion: entrada, estaCompletada: tarea.estaCompletada} // Si el id coincide entonces en la descripcion ingresa la entrada
        }
        return tarea; // si no se cumple la condición retorna la misma tarea (es decir el mismo objeto que se itera)
      })
      setTareas(tareaEditada)
    }    
  }

  const handleClickEliminar = (id) => {
    let tareasNoBorradas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasNoBorradas)
  }

  return (
    <div>
      <Header />
      <form action="">
        <input type='text' onChange={handleChange} value={nuevaTarea} />
        <button onClick={handleClickAgregar} type='submit'>Agregar</button>
      </form>
      
      <TaskList listaDeTareas={tareas} handleChangeCompletado={handleChangeCompletado} handleClickEditar={handleClickEditar} handleClickEliminar={handleClickEliminar} />
    </div>
  );
}

export default App;