import styled from 'styled-components';

const Container = styled.main`
  background-color: var(--containerBg);
  position: relative;
  max-width: 740px;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 25px 15px 100px;
  height: calc(100vh - 85px);
  overflow-y: scroll;
  border-radius: 20px 20px 0 0;
  margin: 0 auto 0 0;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  .container {
    max-width: 675px;
    box-sizing: border-box;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-template-rows: 150px;
    grid-auto-flow: row;
    grid-gap: 24px;
    /* padding-bottom: 40px; */
    transition: all 0.3s;
    @media screen and (max-width: 375px) {
      grid-template-columns: repeat(auto-fill, 140px);
      grid-template-rows: 140px;
      grid-gap: 20px;
    }
  }
  @media screen and (max-width: 960px) {
    max-width: 560px;
    .container {
      max-width: 500px;
    }
  }
  @media screen and (max-width: 800px) {
    /* padding-bottom: 80px; */
    margin-left: auto;
  }
  @media screen and (max-width: 570px) {
    max-width: 380px;
    .container {
      max-width: 328px;
    }
  }
  @media screen and (max-width: 375px) {
    max-width: 333px;
  }
  @media screen and (max-width: 335px) {
    .container {
      max-width: 150px;
    }
  }
`;

export default Container;
