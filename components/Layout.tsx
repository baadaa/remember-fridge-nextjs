import 'normalize.css';
import GlobalStyles from '../styles/global';
import SimpleHeader from './SimpleHeader';
import sampleUser from '../sampleData/sampleUser';
import Container from './Container';
import Nav from './Nav';
import { useUser } from './firebase/useUser';

const Layout: React.FC = ({ children }) => {
  const { user } = useUser();
  // console.log(user);
  return (
    <>
      <SimpleHeader user={user ? user : sampleUser} />
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
};

export default Layout;
