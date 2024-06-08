import { Component } from "../core/core";

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Daily',
            href: '#/'
          },
          {
            name: 'Weekly',
            href: '#/weekly'
          },
          {
            name: 'Monthly',
            href: '#/monthly'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* HTML */ `
      <div class='header-title'>
        <a href="#/">Do Do</a>
      </div>
      <div class='header-menu'>
        ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */ `
              <a
                class="${isActive ? 'active' : ''}" 
                href="${menu.href}">
                ${menu.name}
              </a>
            `
          }).join('')}
      </div>
    `
  }
}