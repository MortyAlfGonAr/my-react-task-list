import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

const tareas = [
  { id:1, nombre:'Tarea 1'},
  { id:2, nombre:'Tarea 2'},
  { id:3, nombre:'Tarea 3'}
];

function App() {
  
  return (
    <div>
      <Header />
      <TaskList listaDeTareas={tareas} />
    </div>
  );
}

export default App;
