import TodoWeekly from "../components/TodoWeekly";
import { Component } from "../core/core";

export default class Weekly extends Component {
  render() {
    this.el.innerHTML = /* HTML */ `
      <h1>Weekly</h1>
    `

    const todoWeekly = new TodoWeekly().el
    this.el.classList.add('container')
    this.el.append(
      todoWeekly
    )
  }
}