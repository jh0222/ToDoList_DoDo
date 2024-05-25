import { Store } from "../core/core";

const store = new Store({
  todos: [],
  date: new Date,
  week: new Date,
  month: new Date
})

export default store