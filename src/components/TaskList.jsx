import Task from "./Task";

function TaskList(props){
  const { listaDeTareas } = props;

  return(
    <ul>
      {
        listaDeTareas.map((tarea)=> (
          <Task key={tarea.id} id={tarea.id} nombre={tarea.nombre} />
        ))
      }
    </ul>
  )
}

export default TaskList;