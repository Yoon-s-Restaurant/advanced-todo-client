import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Todos from 'components/todos';
import Create from 'components/create';
import Todo from 'components/todo';

const App: React.FC = () => {
  return (
    <>
      <Route exact path={['/', '/todos']} component={Todos} />
      <Route exact path={['/create']} component={Create} />
      <Route exact path={'/todo/:idx'} component={Todo} />
      {/*<Route path="/new-todo" component={NewTodoPage} />*/}
      {/*<Route path="/todo-history" component={TodoHistoryPage} />*/}
      {/*<Route path="/statistics" component={TodoHistoryPage} />*/}
    </>
  );
};

export default App;
