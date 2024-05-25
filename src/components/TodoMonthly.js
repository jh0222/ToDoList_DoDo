import { Component } from "../core/core"
import { updateMonthlyTodo } from "../utils/todoList"
import todoStore from "../store/todo";

export default class TodoMonthly extends Component {
  constructor() {
    super()
    // todoStore.subscribe('todos', () => {
    //   this.render()
    // })
  }
  render() {
    const currentDate = todoStore.state.date;
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    this.el.classList.add('monthly')
    this.el.innerHTML = /* HTML */ `
      <div style='display: flex'>
        <a id='decrease-month'><</a>
        <div class='monthly-day'></div>
        <a id='increase-month'>></a>
      </div>

      
      <div class="month">
        
        
      </div>
    `

    this.el.querySelector('#decrease-month').addEventListener('click', e => {
      e.preventDefault()
      updateMonthlyTodo(this.el, 1)
    })

    this.el.querySelector('#increase-month').addEventListener('click', e => {
      e.preventDefault()
      updateMonthlyTodo(this.el, 2)
    })

    updateMonthlyTodo(this.el, 0)
  }
}