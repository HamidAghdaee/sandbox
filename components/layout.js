import Link from 'next/link';
import Head from 'next/head';
import { StyleProvider } from 'cf-style-nextjs';
import { Header, NavList, NavItem } from 'cf-component-header';
import { Heading } from 'cf-component-heading';
import { createComponent } from 'cf-style-container';

const Page = createComponent(({ theme }) => ({
  padding: theme.space[5]
}));

const Center = createComponent(({ theme }) => ({
  margin: '0px auto'
}));

export default ({ children, title = 'Design-Engineering Sandbox' }) => (
  <StyleProvider>
    <div>
      <Header>
        <Center>
          <NavList>
            <NavItem>
              <Link href="/">
                <a>Index</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/motion">
                <a>Motion</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/404">
                <a>404</a>
              </Link>
            </NavItem>
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
