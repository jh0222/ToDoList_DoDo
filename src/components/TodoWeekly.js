import { Component } from "../core/core";
import { updateWeeklyTodo } from "../utils/todoList";

export default class TodoWeekly extends Component {
  constructor() {
    super()
    // todoStore.subscribe('todos', () => {
    //   this.render()
    // })
  }
  render() {
    this.el.classList.add('weekly')
    this.el.innerHTML = /* HTML */ `
      <div style='display: flex'>
        <a id='decrease-week'><</a>
        <div class='weekly-day'></div>
        <a id='increase-week'>></a>
      </div>

      <div style='display: flex'>
        <div>
          <h2>SUN</h2>
          <h3></h3>
          <div key=0 class='todoList'></div>
        </div>
        <div>
          <h2>MON</h2>
          <div key=1 class='todoList'></div>
        </div>
        <div>
          <h2>TUE</h2>
          <div key=2 class='todoList'></div>
        </div>
        <div>
          <h2>WED</h2>
          <div key=3 class='todoList'></div>
        </div>
        <div>
          <h2>THU</h2>
          <div key=4 class='todoList'></div>
        </div>
        <div>
          <h2>FRI</h2>
          <div key=5 class='todoList'></div>
        </div>
        <div>
          <h2>SAT</h2>
          <div key=6 class='todoList'></div>
        </div>
      </div>
    `

    this.el.querySelector('#decrease-week').addEventListener('click', e => {
      e.preventDefault()
      updateWeeklyTodo(this.el, 1)
    })

    this.el.querySelector('#increase-week').addEventListener('click', e => {
      e.preventDefault()
      updateWeeklyTodo(this.el, 2)
    })

    updateWeeklyTodo(this.el, 0)
  }
}