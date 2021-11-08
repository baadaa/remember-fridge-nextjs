import styled from 'styled-components';
import { useRouter } from 'next/router';

import { IconFreezer, IconFridge, IconList, IconSettings } from '@/components/Icons';

const NavStyles = styled.nav`
  order: -1;
  border-radius: 10px 0 0 10px;
  align-self: flex-start;
  background: var(--navBg);
  margin-left: auto;
  margin-top: 40px;
  z-index: 0;
  opacity: 1;
  transition: transform 0.3s, opacity 0.3s;
  pointer-events: all;
  width: 100px;
  color: #fff;
  position: sticky;
  top: 10px;
  box-shadow: -2px 3px 9px rgba(0, 0, 0, 0.5);
  button {
    background: transparent;
    pointer-events: all;
    flex: 1 1 25%;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: 700;
    padding: 0;
    cursor: pointer;
    color: inherit;
    display: flex;
    border: 0;
    outline: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 100%;
    opacity: 0.38;
    transition: opacity 0.3s;
    svg {
      margin-top: 5px;
      margin-bottom: 5px;
      pointer-events: none;
    }
    &.active,
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 800px) {
    position: fixed;
    bottom: 0;
    top: auto;
    left: 0;
    height: 74px;
    right: 0;
    width: 100%;
    border-radius: 0;
    height: 74px;
    z-index: 99;
    box-shadow: 0 -4px 9px rgba(0, 0, 0, 0.5);
    button {
      height: 100%;
    }
    div {
      display: flex;
      height: 74px;
      margin: 0 auto;
      padding: 0;
      width: 100%;
      max-width: 560px;
      box-sizing: border-box;
      @media screen and (max-width: 570px) {
        max-width: 380px;
      }
    }
  }
`;

const Nav: React.FC = () => {
  const router = useRouter();
  return (
    <NavStyles>
      <div>
        <button
          type="button"
          data-id="fridge"
          className={router.asPath === '/' ? 'active' : ''}
          onClick={() => router.push('/')}
        >
          <IconFridge />
          Fridge
        </button>
        <button
          type="button"
          data-id="freezer"
          className={router.asPath === '/freezer' ? 'active' : ''}
          onClick={() => router.push('/freezer')}
        >
          <IconFreezer />
          Freezer
        </button>
        <button
          type="button"
          className={router.asPath === '/list' ? 'active' : ''}
          onClick={() => router.push('/list')}
        >
          <IconList />
          Shopping List
        </button>
        <button
          type="button"
          className={router.asPath === '/settings' ? 'active' : ''}
          onClick={() => router.push('/settings')}
        >
          <IconSettings />
          Settings
        </button>
      </div>
    </NavStyles>
  );
};
export default Nav;
