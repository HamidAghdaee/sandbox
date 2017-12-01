import Link from 'next/link';
import Head from 'next/head';
import { StyleProvider } from 'cf-style-provider';
import { Header, NavList, NavItem } from 'cf-component-header';
import { Heading } from 'cf-component-heading';
import { createComponent } from 'cf-style-container';
import felaRenderer from '../felaRenderer';

const Page = createComponent(({ theme }) => ({
  margin: theme.space[4]
}))

const Center = createComponent(({ theme }) => ({
  margin: '0px auto'
}))

export default ({ children, title = 'Design-Engineering Sandbox' }) => (
  <StyleProvider renderer={felaRenderer}> 
    <div>
      <Header>
        <Center>
          <NavList>
            <NavItem><Link href='/'><a>Index</a></Link></NavItem>
            <NavItem><Link href='/Page1'><a>Page 1</a></Link></NavItem>
            <NavItem><Link href='/Page2'><a>Page 2</a></Link></NavItem>
          </NavList>
        </Center>
      </Header>
      <Page>
        <Heading size={1}>{title}</Heading>
        {children}
      </Page>
    </div>
  </StyleProvider>
);