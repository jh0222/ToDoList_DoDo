import { Component } from "../core/core";
import completenessStore from "../store/completeness";
import todoStore from "../store/todo";


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

    // 체크된 갯수 구하기
    this.el.addEventListener('click', (event) => {
      if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        const isChecked = event.target.checked;

        // 현재 체크된 항목의 개수를 계산
        let isCheckedCnt = completenessStore.state.completeness * completenessStore.state.totalTodos; 
        
        if (isChecked) {
          isCheckedCnt += 1;
        } else {
          isCheckedCnt -= 1;
        }

        completenessStore.state.completeness = isCheckedCnt / completenessStore.state.totalTodos;
        console.log(completenessStore.state.completeness)
      }
    })
  }
}