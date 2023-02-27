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

    if (entrada) { 
      let tareaEditada = tareas.map((tarea) => {
        if(tarea.id === id){
          return {id: tarea.id, descripcion: entrada, estaCompletada: tarea.estaCompletada} 
        }
        return tarea;
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
        <input type='text' onChange={handleChange} placeholder='Nueva tarea' value={nuevaTarea} />
        <button onClick={handleClickAgregar} type='submit'>Agregar</button>
      </form>
      
      <TaskList listaDeTareas={tareas} handleChangeCompletado={handleChangeCompletado} handleClickEditar={handleClickEditar} handleClickEliminar={handleClickEliminar} />
    </div>
  );
}

export default App;