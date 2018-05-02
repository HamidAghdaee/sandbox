import Link from 'next/link';
import Head from 'next/head';
import { StyleProvider } from 'cf-style-nextjs';
import { Header, NavList, NavItem } from 'cf-component-header';
import { Heading } from 'cf-component-heading';
import { createComponent } from 'cf-style-container';

const Page = createComponent(({ theme }) => ({
  margin: theme.space[4]
}));

const Center = createComponent(({ theme }) => ({
  margin: '0px auto'
}));

export default ({ children, title = 'Github Take Home Challenge' }) => (
  <StyleProvider>
    <div>
      <Header>
        <span />
      </Header>
      <Page>
        <Heading size={1}>{title}</Heading>
        {children}
      </Page>
    </div>
  </StyleProvider>
);
