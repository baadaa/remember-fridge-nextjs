import { useState, useEffect } from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/global';
import SimpleHeader from './SimpleHeader';
import user from '../sampleData/sampleUser';
import Container from './Container';
import Nav from './Nav';

const Layout: React.FC = ({ children }) => (
  <>
    <SimpleHeader user={user} />
    <GlobalStyles />
    <div
      style={{
        position: 'relative',
        display: 'flex',
        margin: '0 auto',
      }}
    >
      <Nav />
      <Container>{children}</Container>
    </div>
  </>
);

export default Layout;
