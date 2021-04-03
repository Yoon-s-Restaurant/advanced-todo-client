import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import TodoListPage from 'todos/containers/TodoListPage';
import NewTodoPage from 'todo/containers/NewTodoPage';
import TodoHistoryPage from 'todo/containers/TodoHistoryPage';

const App: React.FC = () => {
  return (
    <>
      <Route exact path={['/', '/todos']} component={TodoListPage} />
      <Route path="/new-todo" component={NewTodoPage} />
      <Route path="/todo-history" component={TodoHistoryPage} />
      <Route path="/statistics" component={TodoHistoryPage} />
    </>
  );
};

export default App;
