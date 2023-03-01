import Task from "./Task";

function TaskList(props){
  const { listaDeTareas,  handleChangeCompletado, handleClickEditar, handleClickEliminar } = props;

  return(
    <ul>
      {
        listaDeTareas.map((tarea)=> (
          <Task 
            key={tarea.id}
            id={tarea.id} 
            nombre={tarea.descripcion}
            estaCompletada={tarea.estaCompletada}
            handleChangeCompletado={handleChangeCompletado}
            handleClickEditar={handleClickEditar}
            handleClickEliminar={handleClickEliminar}
          />
        ))
      }
    </ul>
  )
}

export default TaskList;