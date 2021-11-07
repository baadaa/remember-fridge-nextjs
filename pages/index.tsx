import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import Refrigerator from '@/components/Refrigerator';

const FridgePage: NextPage = () => (
  <Layout>
    <Refrigerator space="Fridge" />
  </Layout>
);

export default FridgePage;
