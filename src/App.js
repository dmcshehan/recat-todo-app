import React, { Component } from "react";
import randomId from "random-id";

//custom components
import Todo from "./components/Todo/Todo";
import TodoContainer from "./components/TodoContainer/TodoContainer";

//styles
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.onComplete = this.onComplete.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  state = {
    todos: [
      { id: 1, name: "First Todo", isComplete: true },
      { id: 2, name: "Second Todo", isComplete: false },
      { id: 3, name: "Third Todo", isComplete: false }
    ]
  };

  onComplete(index) {
    let newTodos = [...this.state.todos];
    newTodos[index].isComplete = true;
    this.setState({
      ...this.state,
      todos: newTodos
    });
  }

  onDelete(index) {
    let newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({
      ...this.state,
      todos: newTodos
    });
  }

  addTodo(todo) {
    const newTodos = [
      ...this.state.todos,
      { name: todo, isComplete: false, id: randomId() }
    ];
    this.setState({
      ...this.state,
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <TodoContainer add={this.addTodo}>
          {this.state.todos.map((todo, index) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onComplete={() => this.onComplete(index)}
                onDelete={() => this.onDelete(index)}
              />
            );
          })}
        </TodoContainer>
      </div>
    );
  }
}

export default App;
