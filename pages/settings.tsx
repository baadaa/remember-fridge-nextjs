import { SyntheticEvent, useState } from 'react';
import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import Wrapper from '@/components/InnerWrapper';
import { useTheme, Theme, useFoods } from '@/contexts/index';
import { Google, IconWarning } from '@/components/Icons';
import { DataResetButton } from '@/components/Buttons/Buttons';
import { loadSamples, toggleColorMode } from '@/coreMethods/dataPersistence';

type DataStatus = 'load' | 'delete';
type DataStatusProp = {
  status: DataStatus;
};
const Loader: React.FC<DataStatusProp> = ({ status }) => {
  console.log(status);
  return <>s</>;
};

const SettingsPage: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const [isResetting, setIsResetting] = useState(false);
  const [dataStatus, setDateStatus] = useState<DataStatus>('load');
  const { setFoodItems } = useFoods();
  const colorSwitcher = (e: SyntheticEvent & { target: HTMLInputElement }) => {
    const targetMode = e.target.value as Theme;
    setTheme(targetMode);
    toggleColorMode(targetMode);
  };
  const loadFoods = async () => {
    const newFoods = await loadSamples();
    setFoodItems(newFoods);
    alert('Data loaded!');
  };
  const deleteAll = () => {
    setFoodItems([]);
    alert('Data cleared!');
  };

  return (
    <Layout>
      {isResetting && <Loader status={dataStatus} />}
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
          <h4>
            <IconWarning />
            Reset your data
          </h4>
          <p>
            These actions will overwrite your existing data, and{' '}
            <em>cannot be undone</em>.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DataResetButton option="load" click={loadFoods} />
            <DataResetButton option="delete" click={deleteAll} />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default SettingsPage;
