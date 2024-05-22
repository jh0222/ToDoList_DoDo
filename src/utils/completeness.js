import completenessStore from "../store/completeness";
import todoStore from "../store/todo";

export default completeness = () => {
  const totalTodos = todoStore.state.todos.length
  const isCheckedCnt = completenessStore.state.isCheckedCnt
  const completed = isCheckedCnt / totalTodos

  if(Number.isInteger(completed)) {
    completenessStore.state.completeness = completed
  } else {
    completenessStore.state.completeness = completed.toFixed(1)
  }
}