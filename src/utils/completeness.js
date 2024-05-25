import completenessStore from "../store/completeness";
import todoStore from "../store/todo";

export default completeness = () => {
  const currentDate = todoStore.state.date
  let isCheckedCnt = 0
  let totalTodos = 0
  let completed = 0
  todoStore.state.todos.forEach(todo => {
    if(todo.todoDate.getFullYear() === currentDate.getFullYear() &&
       todo.todoDate.getMonth() === currentDate.getMonth() &&
       todo.todoDate.getDate() === currentDate.getDate()) {
      
      totalTodos++
      if(todo.isChecked) isCheckedCnt++     
    }
  })

  if(totalTodos === 0) completed = 0 
  else completed = isCheckedCnt / totalTodos * 100
  
  console.log('com');

  if(Number.isInteger(completed)) {
    completenessStore.state.completeness = completed
  } else {
    completenessStore.state.completeness = completed.toFixed(1)
  }
}