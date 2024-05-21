import { Component } from "../core/core";
import TodoItem from "./TodoItem";
import completenessStore from "../store/completeness";
import todoStore from "../store/todo";

export default class TodoPlus extends Component {
  constructor() {
    super({
      state: {
        todos: []
      }
    })
    todoStore.subscribe('todos', () => {
      this.render()
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
    const todoId = this.state.todos.length + 1
    
    addTodoBtn.addEventListener("click", () => {
      const newTodo = todoInput.value
      
      todoStore.state.todos.push({ id: todoId, todo: newTodo });
      completenessStore.state.totalTodos += 1;
      this.renderTodoList()
    });
  }

  renderTodoList() {
    const todoList = this.el.querySelector(".todoList");
    
    todoList.innerHTML = "";
    todoStore.state.todos.map((todo) => {
      const todoItem = new TodoItem({ props: todo });
      todoList.appendChild(todoItem.el);
    })
  }
}