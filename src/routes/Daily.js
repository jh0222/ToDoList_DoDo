import TodoCompleteness from '../components/TodoCompleteness'
import TodoDate from '../components/TodoDate';
import TodoPlus from '../components/TodoPlus'
import { Component } from '../core/core'

export default class Daily extends Component {
  render() {
    this.el.innerHTML = /* HTML */ `
      <h1>Daily</h1>
    `

    const todoDate = new TodoDate().el
    const todoPlus = new TodoPlus().el
    const todoCompleteness = new TodoCompleteness().el

    this.el.classList.add('container')
    this.el.append(
      todoDate,
      todoPlus,
      todoCompleteness,
    )
  }
}