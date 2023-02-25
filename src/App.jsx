import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

const TASKS = [
  { id:1, descripcion:'Tarea 1'},
  { id:2, descripcion:'Tarea 2'},
  { id:3, descripcion:'Tarea 3'}
];

function App() {

  const [tareas, setTareas] = useState(TASKS)
  const [nuevaTarea, setNuevaTarea] = useState('')

  const handleClickAgregar = (e) => {
    e.preventDefault()
    setTareas([...tareas, {id: new Date(), descripcion: nuevaTarea}])
    console.log(tareas)
  }

  const handleChange = (e) => {
    setNuevaTarea(e.target.value)
    console.log(nuevaTarea)
  }

  const handleClickEditar = (id, nombre) => {
    let entrada = prompt(nombre, nombre);
    let nuevasTareas = [...tareas]

  }

  return (
    <div>
      <Header />
      <form action="">
        <input type='text' onChange={handleChange} value={nuevaTarea} />
        <button onClick={handleClickAgregar} type='submit'>Agregar</button>
      </form>
      
      <TaskList listaDeTareas={tareas} handleClickEditar={handleClickEditar} />
    </div>
  );
}

export default App;

    // voy a usar un map para recorrer cada objeto dentro de mi array comparando el id del parametro (linea 27) con el id que está dentro de las propiedades de los objetos que recorro y luego usando algo que es como la recursividad editar solamente ese objeto en particular

 // const lista = localStorage.getItem('miLista')
  // console.log(lista)
  // const [tareas, setTareas] = useState(lista === null ? [] : JSON.parse(lista))
  
  // localStorage.setItem('miLista', JSON.stringify(TASKS))

  // useEffect()