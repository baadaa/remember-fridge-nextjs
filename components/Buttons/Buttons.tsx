import styled from 'styled-components';

const BaseBigButton = styled.button`
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
  transition: opacity 0.3s, transform 0.3s;
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
`;

export const DataResetButton: React.FC<DataResetProps> = ({
  option,
  click,
}) => (
  <DataReset option={option} onClick={click}>
    {option === 'load' ? 'Load sample data' : 'Delete everything'}
  </DataReset>
);