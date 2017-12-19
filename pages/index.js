import Layout from '../components/layout';
import { Button, ButtonGroup } from 'cf-component-button';
import { Input } from '@cloudflare/cf-component-signup';
import CardBuilder from 'cf-builder-card';
import Card from '../components/cf-component-zone-cards/src/Card';

const NenaButton = (
  <Button type="primary" onClick={() => console.log('Button clicked!')}>
    Enable
  </Button>
);

export default () => (
  <Layout title="Sandbox">
    <div>Welcome!</div>
    <Input label="Password" type="password" />
    <ButtonGroup spaced>
      <Button type="danger">Dangeeer!</Button>
      <Button type="primary">Click me</Button>
    </ButtonGroup>
    <Card name="bobsbakery.com" status="Active" />
    <CardBuilder
      title="I am a card"
      description="Description text"
      control={NenaButton}
    />
  </Layout>
);
