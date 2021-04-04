import * as React from 'react';
import Template from 'common/layout/Template';
import Header from 'common/components/base/Header';
import Sidebar from 'common/components/sidebar';
import BoxLayout from 'common/layout/BoxLayout';
import Layout from 'common/layout/Layout';

const NewTodoPage: React.FC = () => {
  return (
    <Template>
      <Layout header={<Header />} sideBar={<Sidebar />}>
        <BoxLayout>hihi</BoxLayout>
      </Layout>
    </Template>
  );
};

export default NewTodoPage;
