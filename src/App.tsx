import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import TodoHistoryPage from "src/todo/containers/TodoHistoryPage";
import NewTodoPage from "src/todo/containers/NewTodoPage";
import TodoListPage from "src/todo/containers/TodoListPage";

function App() {
    let TodoListPage;
    return (
      <>
        <Route exact path="/todos" component={TodoListPage}/>
        <Route path="/new-todo" component={NewTodoPage}/>
        <Route path="/todo-history" component={TodoHistoryPage}/>
      </>
  );
}

export default App;
