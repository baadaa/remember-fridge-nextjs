import styled from 'styled-components';
import { ButtonProps } from '@/types/types';
import { IconClose, IconYes, IconNo, IconTrash } from '../Icon';

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
  svg {
    margin-right: 10px;
  }
  &:hover {
    transform: translateY(-1px);
    box-shadow: -1px 3px 15px rgba(0, 0, 0, 0.2);
  }
`;
export const CloseButton: React.FC<ButtonProps> = ({ click = () => {} }) => (
  <button
    onClick={click}
    type="button"
    style={{
      background: 'transparent',
      border: 'none',
      position: 'absolute',
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

const Save = styled(BaseBigButton)<ButtonProps>`
  background: var(--saveButton);
  transform: ${(props) =>
    !props.isRemoving ? 'translateY(0)' : 'translateY(45px)'};
  opacity: ${(props) => (!props.isRemoving ? 1 : 0)};
  pointer-events: ${(props) => (!props.isRemoving ? 'all' : 'none')};
  color: #fff;
  img {
    width: 12px;
    height: 9px;
    margin-right: 5px;
  }
`;
const Cancel = styled(BaseBigButton)<ButtonProps>`
  background: transparent;
  border: 1px solid var(--cancelButton);
  color: var(--cancelButton);
  transform: ${(props) =>
    !props.isRemoving ? 'translateY(0)' : 'translateY(45px)'};
  opacity: ${(props) => (!props.isRemoving ? 1 : 0)};
  pointer-events: ${(props) => (!props.isRemoving ? 'all' : 'none')};
  img {
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
`;
const Remove = styled(BaseBigButton)<ButtonProps>`
  transform: ${(props) =>
    props.isRemoving ? 'translateY(-45px)' : 'translateY(0)'};
  opacity: ${(props) => (props.isRemoving ? 1 : 0)};
  pointer-events: ${(props) => (props.isRemoving ? 'all' : 'none')};
  background: var(--removeButton);
  color: #fff;
  display: ${(props) => (props.isEditing ? 'flex' : 'none')};
  img {
    width: 14px;
    height: 15px;
    margin-right: 5px;
  }
  &:hover {
    transform: translateY(-46px);
  }
`;
const CancelRemoval = styled(BaseBigButton)<ButtonProps>`
  transform: ${(props) =>
    props.isRemoving ? 'translateY(-45px)' : 'translateY(0)'};
  opacity: ${(props) => (props.isRemoving ? 1 : 0)};
  pointer-events: ${(props) => (props.isRemoving ? 'all' : 'none')};
  display: ${(props) => (props.isEditing ? 'flex' : 'none')};
  background: transparent;
  border: 1px solid var(--removeCancelButton);
  color: var(--removeCancelButton);
  &:hover {
    transform: translateY(-46px);
  }
`;
const SaveSettings = styled(BaseBigButton)`
  background: var(--saveButton);
  color: #fff;
  margin-left: 90px;
  width: calc(100% - 90px);
  margin-top: 15px;
  img {
    width: 12px;
    height: 9px;
    margin-right: 5px;
  }
`;
const RemovePrompt = styled.button<ButtonProps>`
  border: none;
  outline: none;
  flex-basis: 100%;
  margin-left: 0;
  padding: 0;
  height: auto;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: var(--removeButton);
  text-decoration: underline;
  font-size: 14px;
  display: ${(props) => (props.isEditing ? 'flex' : 'none')};
  font-weight: 700;
`;

export const SaveButton: React.FC<ButtonProps> = ({
  click,
  isRemoving,
  isEditing,
}) => (
  <Save onClick={click} isRemoving={isRemoving}>
    <IconYes />
    {isEditing ? 'Save' : 'Add item'}
  </Save>
);
export const CancelButton: React.FC<ButtonProps> = ({ click, isRemoving }) => (
  <Cancel onClick={click} isRemoving={isRemoving}>
    <IconNo />
    Cancel
  </Cancel>
);
export const RemoveButton: React.FC<ButtonProps> = ({
  click,
  isEditing,
  isRemoving,
}) => (
  <Remove onClick={click} isEditing={isEditing} isRemoving={isRemoving}>
    <IconTrash />
    Remove
  </Remove>
);
export const CancelRemovalButton: React.FC<ButtonProps> = ({
  isEditing,
  click,
  isRemoving,
}) => (
  <CancelRemoval isEditing={isEditing} isRemoving={isRemoving} onClick={click}>
    Keep it
  </CancelRemoval>
);
export const RemovePromptButton: React.FC<ButtonProps> = ({
  click,
  isEditing,
  isRemoving,
}) => (
  <RemovePrompt isEditing={isEditing} onClick={click}>
    {isRemoving ? 'This action cannot be undone.' : 'Remove this item'}
  </RemovePrompt>
);
export const SaveSettingsButton: React.FC<ButtonProps> = ({ click }) => (
  <SaveSettings onClick={click}>
    <IconYes /> Save and close
  </SaveSettings>
);
