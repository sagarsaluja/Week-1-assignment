/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = {};
    this.lastIndex = 0;
  }
  add(todo) {
    this.todos[this.lastIndex] = todo;
    this.lastIndex++;
  }
  remove(index) {
    let i = index;
    while (i < this.lastIndex) {
      this.todos[i] = this.todos[i + 1];
      i++;
    }
    delete this.todos[this.lastIndex];
    this.lastIndex--;
  }
  update(index, updated) {
    if (index >= this.lastIndex) return;
    this.todos[index] = updated;
  }
  getAll() {
    return Object.values(this.todos);
  }
  get(index) {
    if (index >= this.lastIndex) return null;
    return this.todos[index];
  }
  clear() {
    this.todos = {};
    this.lastIndex = 0;
  }

}

module.exports = Todo;
