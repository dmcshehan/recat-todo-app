import React, { Component } from "react";
import randomId from "random-id";
import produce from "immer";
import { Helmet } from "react-helmet";
import { List, Card } from "antd";

//custom components
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";

import { Button } from "antd";

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
    this.onUndo = this.onUndo.bind(this);
  }

  state = {
    todos: [],
    currentyEditing: null
  };

  componentDidMount() {
    let existingTodos = JSON.parse(localStorage.getItem("todos"));

    this.setState(
      produce(draft => {
        draft.todos = existingTodos !== null ? existingTodos : [];
      })
    );
  }

  onComplete(index) {
    let newTodos = [...this.state.todos];
    newTodos[index].isComplete = true;
    this.setState(
      produce(draft => {
        draft.todos = newTodos;
      }),
      () => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
    );
  }

  onDelete(index) {
    if (window.confirm(`Are you sure that you want to delete it?`)) {
      let newTodos = [...this.state.todos];
      newTodos.splice(index, 1);
      this.setState(
        produce(draft => {
          draft.todos = newTodos;
        }),
        () => {
          localStorage.setItem("todos", JSON.stringify(newTodos));
        }
      );
    }
  }

  onEdit(index) {
    this.setState(
      produce(draft => {
        draft.currentyEditing = index;
      })
    );
  }

  onUpdate(value, index) {
    const newTodos = [...this.state.todos];
    newTodos[index].name = value;

    this.setState(
      produce(draft => {
        draft.todos = newTodos;
      }),
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
      produce(draft => {
        draft.todos = newTodos;
      }),
      () => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
    );
  }
  onUndo(index) {
    let newTodos = [...this.state.todos];
    newTodos[index].isComplete = false;
    this.setState(
      produce(draft => {
        draft.todos = newTodos;
      }),
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
      this.setState(
        produce(draft => {
          draft.todos = [];
        }),
        () => {
          localStorage.setItem("todos", JSON.stringify([]));
        }
      );
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Todos</title>
        </Helmet>
        <Card
          className={styles.app}
          title="My Todos"
          extra={
            <Button
              onClick={this.clearAll}
              icon="delete"
              type="danger"
              disabled={this.state.todos.length === 0 ? true : false}
            >
              Clear All
            </Button>
          }
        >
          <TodoForm submit={todo => this.addTodo(todo)} />
          <List
            dataSource={this.state.todos}
            renderItem={(item, index) => (
              <Todo
                key={item.id}
                todo={item}
                onComplete={() => this.onComplete(index)}
                onDelete={() => this.onDelete(index)}
                onUpdate={value => this.onUpdate(value, index)}
                onUndo={() => this.onUndo(index)}
              />
            )}
          />
        </Card>
      </>
    );
  }
}

export default App;
