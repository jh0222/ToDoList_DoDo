import { Component } from "../core/core";
import todoStore from "../store/todo";

export default class TodoDate extends Component {
  updateDate(newDate) {
    todoStore.state.date = newDate
    this.render()
  }

  render() {
    const formattedDate = (todoStore.state.date.getMonth() + 1) + '/' + todoStore.state.date.getDate();

    this.el.innerHTML = /* HTML */ `
      <div>  
        <a id='decrease-date'><</a>
        ${formattedDate}
        <a id='increase-date'>></a>
      </div>
    `

    this.el.querySelector('#decrease-date').addEventListener('click', e => {
      e.preventDefault()
      const newDate = new Date(todoStore.state.date)
      newDate.setDate(newDate.getDate() - 1)
      this.updateDate(newDate)
    })

    this.el.querySelector('#increase-date').addEventListener('click', e => {
      e.preventDefault()
      const newDate = new Date(todoStore.state.date)
      newDate.setDate(newDate.getDate() + 1)
      this.updateDate(newDate)
    })
  }
}