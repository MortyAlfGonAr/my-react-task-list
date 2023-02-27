function Task(props){
  
  const { id, nombre, estaCompletada, handleClickEditar, handleClickEliminar, handleChangeCompletado } = props;


 
  return (
    <li>
      <input type="checkbox" id={id} onChange={(e)=> handleChangeCompletado(e.target.checked, id)} checked={estaCompletada} />
      <label htmlFor={id}>{nombre}</label>
      <button onClick={()=> handleClickEditar(id, nombre)}>Editar</button>
      <button onClick={()=> handleClickEliminar(id)}>Eliminar</button>
    </li>
  )
}

export default Task;