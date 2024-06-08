import TodoItem from "../components/TodoItem";
import todoStore from "../store/todo";

export const updateDateTodo = (element) => {
  const todoList = element.querySelector('.todoList');
  const currentDate = todoStore.state.date
  todoList.innerHTML = ''
  todoStore.state.todos.forEach(todo => {
    if(todo.todoDate.getFullYear() === currentDate.getFullYear() &&
       todo.todoDate.getMonth() === currentDate.getMonth() &&
       todo.todoDate.getDate() === currentDate.getDate()) {
      const todoItem = new TodoItem({ props: todo })
      todoList.appendChild(todoItem.el)
    }
  })
}

export const updateWeeklyTodo = (element, n) => {
  const startOfWeek = new Date(todoStore.state.week)
  
  if(n){
    if(n === 1) {
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() - 7); 
    }
    else if(n === 2) {
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 7); 
    }
    todoStore.state.week = startOfWeek
  } else {
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); 
  }

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date;
  });

  const weeklyDays = (daysOfWeek[0].getMonth() + 1) + '/' + daysOfWeek[0].getDate() + ' - ' + (daysOfWeek[6].getMonth() + 1) + '/' + daysOfWeek[6].getDate()
  element.querySelector('.weekly-day').textContent = weeklyDays

  daysOfWeek.forEach((date, index) => {
    const todoList = element.querySelector(`.todoList[key="${index}"]`);
    if (todoList) {
      todoList.innerHTML = `<div class='week-day'>${date.getMonth() + 1 + '/' + date.getDate()}</div>`;
      todoStore.state.todos.forEach(todo => {
        if (todo.todoDate.getFullYear() === date.getFullYear() &&
            todo.todoDate.getMonth() === date.getMonth() &&
            todo.todoDate.getDate() === date.getDate()) {
          const todoItem = new TodoItem({ props: todo });
          todoList.appendChild(todoItem.el);
        }
      });
    }
  });
}

export const updateMonthlyTodo = (element, n) => {
  const currentDate = todoStore.state.month
  
  if (n) {
    if (n === 1) {
      currentDate.setMonth(currentDate.getMonth() - 1);
    } else if (n === 2) {
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
  }

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysOfMonth = Array.from({ length: daysInMonth }, (_, i) => new Date(currentYear, currentMonth, i + 1));

  // element.querySelector('.year').textContent = currentYear + '년'
  element.querySelector('.monthly-day').textContent = currentYear + '년 ' + (currentMonth + 1) + '월'

  const monthContainer = element.querySelector('.month');
  monthContainer.innerHTML = /* html */`
    <div class='month-table'>
      <div class='month-row'><h2>SUN</h2></div>
      <div class='month-row'><h2>MON</h2></div>
      <div class='month-row'><h2>TUE</h2></div>
      <div class='month-row'><h2>WED</h2></div>
      <div class='month-row'><h2>THU</h2></div>
      <div class='month-row'><h2>FRI</h2></div>
      <div class='month-row'><h2>SAT</h2></div>
    </div>
  `

  // Create weeks array
  const weeks = [];
  let week = [];
  daysOfMonth.forEach((date, index) => {
    week.push(date);
    if (date.getDay() === 6 || index === daysInMonth - 1) {
      weeks.push(week);
      week = [];
    }
  });
 
  weeks.forEach((week) => {
    const weekContainer = document.createElement('div');
    weekContainer.className = 'week';
    week.forEach((date) => {
      const dayContainer = document.createElement('div');
      dayContainer.className = 'day';
      dayContainer.innerHTML = `<h3>${date.getDate()}</h3>`;
      const todoList = document.createElement('div');
      todoList.className = 'todoList';
      todoList.setAttribute('key', date.getDate());
      dayContainer.appendChild(todoList);
      weekContainer.appendChild(dayContainer);

      todoStore.state.todos.forEach(todo => {
        const todoDate = new Date(todo.todoDate);
        if (todoDate.getFullYear() === date.getFullYear() &&
            todoDate.getMonth() === date.getMonth() &&
            todoDate.getDate() === date.getDate()) {
          const todoItem = new TodoItem({ props: todo });
          todoList.appendChild(todoItem.el);
        }
      });
    });
    monthContainer.appendChild(weekContainer);
  });
}