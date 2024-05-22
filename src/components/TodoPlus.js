import { Component } from "../core/core";
import TodoItem from "./TodoItem";
import completenessStore from "../store/completeness";
import todoStore from "../store/todo";
import completeness from "../utils/completeness";

export default class TodoPlus extends Component {
  constructor() {
    super({
      state: {
        todos: []
      }
    })
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
    const todoList = this.el.querySelector(".todoList");

    addTodoBtn.addEventListener("click", () => {
      if(todoInput.value) {
        const newTodo = { 
          id: todoStore.state.todos.length + 1, 
          todo: todoInput.value, 
          isChecked: false
        }
  
        todoStore.state.todos.push(newTodo)
        completenessStore.state.totalTodos += 1
  
        const todoItem = new TodoItem({ props: newTodo })
        todoList.appendChild(todoItem.el)

        completeness()

        todoInput.value = "";
      } else {
        // alert('할 일을 입력하세요')
      }
    });  
  }
}