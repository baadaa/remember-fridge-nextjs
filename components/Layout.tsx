import { useState, useEffect } from 'react';
import { ColorModeContext } from '../hooks/contexts';
import 'normalize.css';
import GlobalStyles from '../styles/global';
import SimpleHeader from './SimpleHeader';
import user from '../sampleData/sampleUser';
import FridgeShell from './FridgeShell';
import Nav from './Nav';

const Layout: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const colorMode = { isDark, setIsDark };

  const loadPreference = () => {
    const blob = localStorage.getItem('b_fridge_colorMode');
    if (!blob) {
      setIsDark(false);
      document.body.className = 'lightMode';
      return null;
    }
    const currentlyDark = JSON.parse(blob) as boolean;
    setIsDark(currentlyDark);
    document.body.className = currentlyDark ? 'darkMode' : 'lightMode';
  };
  const savePreference = () => {
    localStorage.setItem('b_fridge_colorMode', JSON.stringify(isDark));
  };

  useEffect(() => {
    loadPreference();
  }, []);

  useEffect(() => {
    savePreference();
  }, [isDark]);
  // useEffect(() => {
  //   document.body.className = 'lightMode';
  // });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <SimpleHeader user={user} />
      <GlobalStyles />
      <div style={{ position: 'relative', display: 'flex', margin: '0 auto' }}>
        <Nav />
        <FridgeShell>{children}</FridgeShell>
      </div>
    </ColorModeContext.Provider>
  );
};

export default Layout;
