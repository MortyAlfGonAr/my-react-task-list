import { useState } from "react";

function Task(props){
  
  const [modoEditar, setModoEditar] = useState(false)
  const [nuevoNombre, setNuevoNombre] = useState('')


  const { id, nombre, estaCompletada, handleClickEditar, handleClickEliminar, handleChangeCompletado } = props;


 
  return (
    <li>
      <input type="checkbox" id={id} onChange={(e)=> handleChangeCompletado(e.target.checked, id)} checked={estaCompletada} />
      <label htmlFor={id}>{nombre}</label>

      {modoEditar === false ? <button onClick={()=> setModoEditar(!modoEditar)}>Editar</button>
      : <>
        <input onChange={(e)=> setNuevoNombre(e.target.value)} type="text" placeholder="Ingrese nueva descripción" value={nuevoNombre} />
        <button onClick={()=> {
          if (nuevoNombre !== '') {
            handleClickEditar(id, nuevoNombre)
            setModoEditar(!modoEditar)
          }           
        } }>Guardar</button>
        <button onClick={()=> setModoEditar(!modoEditar)}>Cancelar</button>
      </>}

      <button onClick={()=> handleClickEliminar(id)}>Eliminar</button>
    </li>
  )
}

export default Task;