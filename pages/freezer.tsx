import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import Refrigerator from '@/components/Refrigerator';

const FreezerPage: NextPage = () => (
  <Layout>
    <Refrigerator space="freezer" />
  </Layout>
);

export default FreezerPage;
