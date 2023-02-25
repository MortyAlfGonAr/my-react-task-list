import Task from "./Task";

function TaskList(props){
  const { listaDeTareas, handleClickEditar } = props;

  return(
    <ul>
      {
        listaDeTareas.map((tarea)=> (
          <Task 
            key={tarea.id}
            id={tarea.id} 
            nombre={tarea.descripcion}
            handleClickEditar={handleClickEditar} 
            // estaCompletada={tarea.completada}
          />
        ))
      }
    </ul>
  )
}

export default TaskList;