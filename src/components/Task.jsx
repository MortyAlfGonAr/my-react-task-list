function Task(props){

  const { id, nombre } = props;

  return (
    <li>
      <label htmlFor={id}>{nombre}</label>
      <input type="checkbox" id={id} />
    </li>
  )
}

export default Task;