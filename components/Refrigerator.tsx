import styled from 'styled-components';
import { EmptyFridge, IconAdd } from './Icons';

const Button = styled.button`
  width: 100%;
  max-width: 320px;
  display: flex;
  margin: 0 auto 30px;
  background: var(--addButton);
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 15px 0;
  border-radius: 50px;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
  &:hover {
    transform: translateY(-1px);
    box-shadow: -1px 3px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Nothing = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  text-align: center;
  width: 100%;
  .illo {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    overflow: hidden;
    margin: 0 auto;
    animation: shake 6s ease infinite;
    background-repeat: no-repeat;
    @media screen and (max-width: 335px) {
      width: 150px;
      height: 150px;
    }
  }
  h3 {
    font-weight: 700;
    margin: 20px 0 0;
    opacity: 0.7;
    font-size: 17px;
  }
  p {
    font-size: 15px;
    margin: 6px 0 0;
    opacity: 0.7;
  }
  @keyframes shake {
    0% {
      transform: rotate(5deg);
    }
    2% {
      transform: rotate(-5deg);
    }
    4% {
      transform: rotate(5deg);
    }
    6% {
      transform: rotate(0deg);
    }
    98% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(5deg);
    }
  }
`;
type FridgeArea = {
  space: 'Fridge' | 'Freezer';
};
const Nothingness: React.FC<FridgeArea> = ({ space = 'Fridge' }) => (
  <Nothing>
    <div className="illo">
      <EmptyFridge />
    </div>
    <h3>Your {space} is empty.</h3>
    <p>Why don't you stock up?</p>
  </Nothing>
);

const Refrigerator: React.FC<FridgeArea> = ({ space }) => (
  <>
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Button>
        <IconAdd />
        Add a new item
      </Button>
    </div>
    <div className="container">
      {/* {totalItems !== 0 ? (
        itemsInTheCategory
      ) : ( */}
      <Nothingness space={space} />
      {/* )} */}
    </div>
  </>
);

export default Refrigerator;
