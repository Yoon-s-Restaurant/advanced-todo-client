import Layout from 'components/common/layout';
import * as React from 'react';
import Header from 'components/common/header';
import TodoView from './TodoView';
import Sidebar from 'components/common/sidebar';

const Todos = () => {
  return (
    <Layout header={<Header />} main={<TodoView />} sidebar={<Sidebar />} />
  );
};
export default Todos;
