import React, { Component } from "react";
import randomId from "random-id";

//custom components
import Todo from "./components/Todo/Todo";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import Button from "./components/Button/Button";

//styles
import styles from "./app.module.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.onComplete = this.onComplete.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  state = {
    todos: [],
    currentyEditing: null
  };

  componentDidMount() {
    let existingTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(existingTodos);

    this.setState({
      ...this.state,
      todos: existingTodos !== null ? existingTodos : []
    });
  }

  onComplete(index) {
    let newTodos = [...this.state.todos];
    newTodos[index].isComplete = true;
    this.setState(
      {
        ...this.state,
        todos: newTodos
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
    );
  }

  onDelete(index) {
    let newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState(
      {
        ...this.state,
        todos: newTodos
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
    );
  }

  onEdit(index) {
    this.setState({
      ...this.state,
      currentyEditing: index
    });
  }

  onUpdate(value, index) {
    console.log(value, index);
    const newTodos = [...this.state.todos];
    newTodos[index].name = value;

    this.setState(
      {
        ...this.state,
        todos: newTodos
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
    );
  }

  addTodo(todo) {
    const newTodos = [
      { name: todo, isComplete: false, id: randomId() },
      ...this.state.todos
    ];

    this.setState(
      {
        ...this.state,
        todos: newTodos
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
    );
  }
  clearAll() {
    if (
      window.confirm(
        `Are you sure that you want to clear all todos? This can't be undo later!`
      )
    ) {
      this.setState({ ...this.state, todos: [] }, () => {
        localStorage.setItem("todos", JSON.stringify([]));
      });
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <h2>Simple Todo App</h2>
          <Button
            onClick={this.clearAll}
            style={{ background: "#f36464" }}
            disabled={this.state.todos.length === 0 ? true : false}
          >
            Clear All
          </Button>
        </div>
        <TodoContainer add={this.addTodo}>
          {this.state.todos.map((todo, index) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onComplete={() => this.onComplete(index)}
                onDelete={() => this.onDelete(index)}
                onUpdate={value => this.onUpdate(value, index)}
              />
            );
          })}
        </TodoContainer>
      </div>
    );
  }
}

export default App;
