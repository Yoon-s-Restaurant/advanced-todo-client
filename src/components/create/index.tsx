import Layout from 'components/common/layout';
import * as React from 'react';
import Header from 'components/common/header';
import Sidebar from 'components/common/sidebar';
import CreateView from 'components/create/CreateView';

const Create: React.FC = () => {
  return (
    <Layout header={<Header />} main={<CreateView />} sidebar={<Sidebar />} />
  );
};
export default Create;
