import { Component } from "../core/core";
import completenessStore from "../store/completeness";
import todoStore from "../store/todo";
import completeness from "../utils/completeness";


export default class TodoItem extends Component {
  constructor(payload) {
    super({
      tagName: 'li',
      props: payload.props
    })
  }

  render() {
    this.el.innerHTML = /* HTML */ `
      <input type='checkbox' name='todo' key=${this.props.id} />
      ${this.props.todo}
    `

    this.el.addEventListener('click', (event) => {
      if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        const isChecked = event.target.checked;
        const todoId = event.target.getAttribute('key');
        
        todoStore.state.todos.map((todo) => {
          if (todo.id === parseInt(todoId)) {
            todo.isChecked = isChecked;
          }
        })
        
        if (isChecked) {
          completenessStore.state.isCheckedCnt++
        } else {
          completenessStore.state.isCheckedCnt--
        }
        
        completeness()
      }
    })
  }
}