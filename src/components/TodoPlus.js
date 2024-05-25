import { Component } from "../core/core";
import todoStore from "../store/todo";
import completeness from "../utils/completeness";
import { updateDateTodo } from "../utils/todoList";

export default class TodoPlus extends Component {  
  constructor() {
    super()
    todoStore.subscribe('date', () => {
      this.render()
    })
  }

  addTodo() {
    const todoInput = this.el.querySelector(".todoInput")

    if(todoInput.value) {
      let maxId = 0
      
      if(todoStore.state.todos.length !== 0) {
        const ids = todoStore.state.todos.map(todo => todo.id)
        maxId = Math.max(...ids)
      }

      let date = todoStore.state.date

      const newTodo = { 
        id: maxId + 1, 
        todo: todoInput.value,
        todoDate: date,
        isChecked: false
      }

      todoStore.state.todos.push(newTodo)
      // completenessStore.state.totalTodos += 1

      updateDateTodo(this.el)
      completeness()

      todoInput.value = "";
    } else {
      alert('할 일을 입력하세요')
    }
  }

  render() {
    this.el.classList.add('search')
    this.el.innerHTML =  /* HTML */ `
      <input type="text" class="todoInput" />
      <button class="addTodoBtn">+</button>
      <ul class="todoList"></ul>
    `

    const todoInput = this.el.querySelector(".todoInput")
    const addTodoBtn = this.el.querySelector(".addTodoBtn")

    addTodoBtn.addEventListener("click", () => {
      this.addTodo();
    })

    todoInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.addTodo();
      }
    })

    updateDateTodo(this.el)
    completeness()
  }
}