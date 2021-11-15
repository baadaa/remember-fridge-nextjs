import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import Refrigerator from '@/components/Refrigerator';

const FridgePage: NextPage = () => (
  <Layout>
    <Refrigerator space="fridge" />
  </Layout>
);

export default FridgePage;
