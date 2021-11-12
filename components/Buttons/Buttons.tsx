import styled from 'styled-components';
import { IconClose, IconYes, IconNo, IconTrash } from '../Icons';

export const AddButton = styled.button`
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
type ButtonProp = {
  click: () => void;
};
export const CloseButton: React.FC<ButtonProp> = ({ click = () => {} }) => (
  <button
    onClick={click}
    type="button"
    style={{
      background: 'transparent',
      border: 'none',
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      right: 0,
    }}
  >
    <IconClose />
  </button>
);

export const BaseBigButton = styled.button`
  border: none;
  outline: none;
  border-radius: 30px;
  padding: 10px 20px;
  height: 45px;
  font-size: 14px;
  font-weight: 700;
  flex-basis: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s, transform 0.3s, box-shadow 0.3s;
  svg {
    margin-right: 10px;
  }
  &:hover {
    transform: translateY(-1px);
    box-shadow: -1px 3px 15px rgba(0, 0, 0, 0.2);
  }
`;

type DataResetProps = {
  option: 'load' | 'delete';
  click?: () => void;
};
const DataReset = styled.button<DataResetProps>`
  flex-basis: 48%;
  border-radius: 5px;
  font-weight: 700;
  font-size: 13px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid var(--removeButton);
  color: ${(props) =>
    props.option === 'load' ? 'var(--removeButton)' : '#fff'};
  background: ${(props) =>
    props.option === 'load' ? '#fff' : 'var(--removeButton)'};
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-1px);
    box-shadow: -1px 3px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const DataResetButton: React.FC<DataResetProps> = ({
  option,
  click,
}) => (
  <DataReset option={option} onClick={click}>
    {option === 'load' ? 'Load sample data' : 'Delete everything'}
  </DataReset>
);
