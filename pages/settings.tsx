import { SyntheticEvent } from 'react';
import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import Wrapper from '@/components/InnerWrapper';
import { useTheme, Theme, useFoods } from '@/contexts/index';
import { Google } from '@/components/Icons';
import { DataResetButton } from '@/components/Buttons/Buttons';
import { loadSamples } from '@/coreMethods/dataPersistence';

const SettingsPage: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const { setFoodItems } = useFoods();
  const colorSwitcher = (e: SyntheticEvent & { target: HTMLInputElement }) => {
    const { target } = e;
    if (target.value === 'Dark') {
      setTheme(Theme.Dark);
      document.body.className = 'darkMode';
    } else {
      setTheme(Theme.Light);
      document.body.className = 'lightMode';
    }
  };
  const loadFoods = async () => {
    const newFoods = await loadSamples();
    setFoodItems(newFoods);
  };

  return (
    <Layout>
      <Wrapper>
        <h2>Settings</h2>
        <form onSubmit={(e) => console.log(e)} className="settings">
          <div className="fieldRow">
            <h3>Color Mode</h3>
            {['Light', 'Dark'].map((option, index) => (
              <span className="option" key={index}>
                <input
                  type="radio"
                  id={option.toLowerCase()}
                  name="colorMode"
                  value={option}
                  checked={theme === option}
                  onChange={colorSwitcher}
                />
                <label htmlFor={option.toLowerCase()}>
                  <span className="circle" />
                  {option}
                </label>
              </span>
            ))}
          </div>
          <div className="fieldRow">
            <h3>Data Storage</h3>
            <span className="singleOption">
              <input
                type="checkbox"
                id="cloud"
                name="dataStorage"
                value="cloud"
                disabled
              />
              <label htmlFor="cloud">
                <span className="square" />
                Enable Cloud Storage
              </label>
              <button className="google" type="button" disabled>
                <Google />
                Sign in with Google
              </button>
              <span className="dev-note">Development in progress</span>
            </span>
          </div>
        </form>
        <div className="data-reset">
          <h4>Reset your data</h4>
          <p>
            These actions will overwrite your existing data, and cannot be
            undone.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DataResetButton option="load" click={loadFoods} />
            <DataResetButton option="delete" click={() => setFoodItems([])} />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default SettingsPage;
