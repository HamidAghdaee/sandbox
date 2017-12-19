import Layout from '../components/layout';
import Card from '../components/cf-component-zone-cards/src/Card';
import ArrowButton from '../components/cf-component-pagination/src/ArrowButton';
import Description from '../components/cf-component-pagination/src/Description';
import { Search } from '@cloudflare/cf-component-search';

export default () => (
  <Layout title="SAA Stuff">
    <h2>Website Card</h2>
    <Search
      discrete
      name="my-search"
      placeholder="Search websites in Bob's Bakery..."
    />
    <Card name="bobsbakery.com" status="Active" />
    <Card name="cupcakes.com" status="Active" />
    <ArrowButton type="left" color="primary" disabled />
    <ArrowButton type="right" color="primary" />
    <Description />
  </Layout>
);
