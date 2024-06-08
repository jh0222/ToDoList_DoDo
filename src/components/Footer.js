import { Component } from "../core/core";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* HTML */ `
      <a href='https://github.com/jh0222/ToDoList_DoDo' target='_blank'>💜GitHub</a>
    `
  }
}