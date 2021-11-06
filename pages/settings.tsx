import { useState, useEffect, SyntheticEvent } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import Image from 'next/image';
import Layout from '../components/Layout';
import Wrapper from '../components/InnerWrapper';
import { useTheme, Theme } from '../contexts/ThemeContext';
import { Google } from '../components/Icons';
import { DataResetButton } from '../components/Buttons/Buttons';

const SettingsPage: NextPage = () => {
  const { theme, setTheme } = useTheme();
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

  return (
    <Layout>
      <Wrapper>
        <h2>Settings</h2>
        <form onSubmit={(e) => console.log(e)} className="settings">
          <div className="fieldRow">
            <h3>Color Mode</h3>
            <span className="option">
              <input
                type="radio"
                id="light"
                name="colorMode"
                value="Light"
                checked={theme === 'Light'}
                onChange={colorSwitcher}
              />
              <label htmlFor="light">
                <span className="circle" />
                Light
              </label>
            </span>
            <span className="option">
              <input
                type="radio"
                id="dark"
                name="colorMode"
                value="Dark"
                checked={theme === 'Dark'}
                onChange={colorSwitcher}
              />
              <label htmlFor="dark">
                <span className="circle" />
                Dark
              </label>
            </span>
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
            <DataResetButton option="load" click={() => console.log('click')} />
            <DataResetButton
              option="delete"
              click={() => console.log('click')}
            />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default SettingsPage;
