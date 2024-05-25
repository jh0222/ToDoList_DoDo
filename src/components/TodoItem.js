import { Component } from "../core/core";
import todoStore from "../store/todo";
import completeness from "../utils/completeness";


export default class TodoItem extends Component {
  constructor(payload) {
    super({
      tagName: 'li',
      props: payload.props
    })
    // todoStore.subscribe('date', () => {
    //   this.render()
    // })
  }

  render() {
    this.el.innerHTML = /* HTML */ `
      <input 
        type='checkbox' 
        name='todo' 
        key=${this.props.id} 
        ${this.props.isChecked ? 'checked' : ''}
      />
      <span class='todoText' style='text-decoration: ${this.props.isChecked ? 'line-through' : 'none'}'>${this.props.todo}</span>
      <span class='deleteTodo' key=${this.props.id}>X</span>
    `

    const todoText = this.el.querySelector('.todoText');
    this.el.addEventListener('click', event => {
      if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        const isChecked = event.target.checked;
        const todoId = event.target.getAttribute('key');

        todoStore.state.todos.map((todo) => {
          if (todo.id === parseInt(todoId)) {
            todo.isChecked = isChecked;
          }
        })
        
        if (isChecked) {
          todoText.style.textDecorationLine = "line-through"
        } else {
          todoText.style.textDecoration = "none"
        }
        
        completeness()
      }
 

      if (event.target.classList.contains('deleteTodo')) {
        event.preventDefault();
        const todoId = event.target.getAttribute('key')
        todoStore.state.todos = todoStore.state.todos.filter(todo => todo.id !== parseInt(todoId))
        
        this.el.remove();
        completeness();
      }
    })
  }
}