import TodoMonthly from "../components/TodoMonthly";
import { Component } from "../core/core";

export default class Monthly extends Component {
  render() {
    this.el.innerHTML = /* HTML */ `
      <h1>Monthly</h1>
    `

    const todoMonthly = new TodoMonthly().el
    this.el.classList.add('container')
    this.el.append(
      todoMonthly
    )
  }
}