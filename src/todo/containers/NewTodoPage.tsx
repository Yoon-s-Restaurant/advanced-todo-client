import * as React from 'react';
import Template from 'common/layout/Template';
import Header from 'common/components/base/Header';
import Sidebar from 'common/components/sidebar';
import BoxLayout from 'common/layout/BoxLayout';
import Layout from 'common/layout/Layout';
import TodoForm from 'todo/components/TodoForm';

const NewTodoPage: React.FC = () => {
  return (
    <Template>
      <Layout header={<Header />} sideBar={<Sidebar />}>
        <BoxLayout>
          <TodoForm />
        </BoxLayout>
      </Layout>
    </Template>
  );
};

export default NewTodoPage;
