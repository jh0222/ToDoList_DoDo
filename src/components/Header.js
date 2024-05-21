import { Component } from "../core/core";

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  render() {
    let date = new Date();
    date = (date.getMonth() + 1) + '/' + date.getDate();

    this.el.innerHTML = /* HTML */ `
      <a href='#/'>d</a>
      <a href='#/weekly'>w</a>
      <a href='#/monthly'>m</a>
      <div>Do Do</div>
      <div>  
        <a><</a>
        ${date}
        <a>></a>
      </div>
    `
  }
}