import * as React from 'react';
import Layout from 'common/layout/Layout';
import Template from 'common/layout/Template';
import Sidebar from 'common/components/sidebar';
import Header from 'common/components/base/Header';
import BoxLayout from 'common/layout/BoxLayout';
import TodoList from 'todos/components/TodoList';

const TodoListPage: React.FC = () => {
  return (
    <Template>
      <Layout header={<Header />} sideBar={<Sidebar />}>
        <BoxLayout ariaLabel={'todo-list'}>
          <TodoList />
        </BoxLayout>
      </Layout>
    </Template>
  );
};

export default TodoListPage;