import { Component } from "../core/core";

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  render() {
    this.el.innerHTML = /* HTML */ `
      <div class='header-title'>Do Do</div>
      <div class='header-menu'>
        <a href='#/'>Daily</a>
        <a href='#/weekly'>Weekly</a>
        <a href='#/monthly'>Monthly</a>
      </div>
    `
  }
}