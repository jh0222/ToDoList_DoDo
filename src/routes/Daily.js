import TodoCompleteness from '../components/TodoCompleteness'
import TodoPlus from '../components/TodoPlus'
import { Component } from '../core/core'

export default class Daily extends Component {
  render() {
    this.el.innerHTML = /* HTML */ `
      <h1>Daily</h1>
    `
    const todoPlus = new TodoPlus().el
    const todoCompleteness = new TodoCompleteness().el
    this.el.classList.add('container')
    this.el.append(
      todoPlus,
      todoCompleteness,
    )
  }
}