function Task(props){
  
  const { id, nombre, handleClickEditar } = props;


 
  return (
    <li>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{nombre}</label>
      <button onClick={() => handleClickEditar(id, nombre)}>Editar</button>
      <button>Eliminar</button>
    </li>
  )
}

export default Task;