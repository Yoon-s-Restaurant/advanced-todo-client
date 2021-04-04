import * as React from 'react';
import Layout from 'common/layout/Layout';
import Header from 'common/components/base/Header';
import Sidebar from 'common/components/sidebar';
import BoxLayout from 'common/layout/BoxLayout';
import Template from 'common/layout/Template';

const TodoHistoryPage: React.FC = () => {
  return (
    <Template>
      <Layout header={<Header />} sideBar={<Sidebar />}>
        <BoxLayout></BoxLayout>
      </Layout>
    </Template>
  );
};

export default TodoHistoryPage;
