import { Component } from "../core/core";
import completenessStore from "../store/completeness";

export default class TodoCompleteness extends Component {
  constructor() {
    super()
    completenessStore.subscribe('completeness', () => {
      this.render()
    })
  }
  render() {
    this.el.classList.add('completed')
    this.el.innerHTML = /* HTML */ `
      <h3>${completenessStore.state.completeness}%</h3>
    `
  }
}