import { SyntheticEvent, useEffect, useState, Fragment } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { format, parse } from 'date-fns';
import { Food, Category, EditorProps, ButtonProps } from '@/types/types';
import {
  CloseButton,
  SaveButton,
  CancelButton,
  CancelRemovalButton,
  RemoveButton,
  RemovePromptButton,
} from '../Buttons/Buttons';
import { IconRotate } from '@/components/Icons';
import { useFoodInEditor, useFoods } from '@/contexts/index';
import 'react-datepicker/dist/react-datepicker.css';

import blank from '@/components/Icons/_.png';

const Wrapper = styled.div<EditorProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--settingOverlayBg);
  z-index: 9;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.2s ease-out;
  pointer-events: ${(props) => (props.isActive ? 'all' : 'none')};
  padding: 20px;
  > * {
    transform: translateY(${(props) => (props.isActive ? 0 : 30)}px);
    transition: transform 0.2s ease-out;
  }
  form {
    max-width: 350px;
    margin: 0 auto;
    position: relative;
  }
  h2 {
    width: 100%;
    margin: 0 0 0.6em;
    text-align: center;
    color: var(--overlayHeading);
  }
  .top-section {
    margin-left: 80px;
    margin-bottom: 30px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-end;
    @media screen and (max-width: 800px) {
      margin-bottom: 20px;
    }
    label {
      display: flex;
      cursor: pointer;
      color: var(--uncheckedIconLabel);
      font-size: 14px;
      align-items: center;
    }
    input.sectionChange,
    label.sectionChange {
      margin-top: 5px;
      text-transform: capitalize;
    }
    .rotate {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      bottom: 0px;
      left: -50px;
      background: transparent;
      border: none;
      color: var(--content);
      font-size: 10px;
      font-weight: 700;
      line-height: 1;
      background: var(--formFieldBg);
      border-radius: 50px;
      width: 40px;
      height: 40px;
      svg {
        width: 35px;
        height: 30px;
      }
    }
    input[type='radio'] {
      opacity: 0;
      position: fixed;
      width: 0;
      &:focus + label {
        border-color: var(--checkIconColor);
        color: var(--checkIconLabel);
      }
      &:checked + label {
        border-color: var(--checkIconColor);
        color: var(--checkIconLabel);
        .circle {
          background: var(--checkIconColor);
          border-color: var(--checkIconColor);
        }
      }
      &:checked + label .circle {
        background-image: url("data:image/svg+xml,%3Csvg width='13' height='9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5.5 7L12 1' stroke='%23FFF' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
        background-size: 11px;
        background-position: center;
        background-repeat: no-repeat;
        border-color: #39b3ca;
        overflow: visible;
      }
    }
    .circle {
      background: #fff;
      width: 15px;
      height: 15px;
      border-radius: 15px;
      margin-right: 7px;
      border: 1px solid #bbb;
    }
  }
  .photo-input {
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    margin-right: 10px;
    width: 150px;
    height: 150px;
    background-color: #fff;
    border: 1px solid #c8c8c8;
    border-color: ${(props) =>
      props.nameIsMissing ? 'var(--missingField)' : '#c8c8c8'};
    background-image: url("data:image/svg+xml,%3Csvg width='34' height='55' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23DADADA' fill-rule='evenodd'%3E%3Cpath d='M16 10a4.1 4.1 0 0 0-4.2 4c0 2.3 2 4 4.2 4 2.3 0 4.2-1.7 4.2-4 0-2.2-2-4-4.2-4Z'/%3E%3Cpath d='M27.8 4H23c0-2.2-1.8-4-4.1-4H13A4.1 4.1 0 0 0 9 4H4.2A4.1 4.1 0 0 0 0 8.2v11.8C0 22.2 1.9 24 4.2 24h23.6c2.3 0 4.2-1.8 4.2-4V8c0-2.2-1.9-4-4.2-4ZM16 21.3c-4 0-7.4-3.2-7.4-7.2S12 7 16 7c4 0 7.4 3.2 7.4 7.1 0 4-3.3 7.2-7.4 7.2Z'/%3E%3Cg%3E%3Cpath d='m7.7 38.3.3-1 .7-2.8.8 2.9.3 1H7.7Zm3.1 3.7h1.9l-2.9-8.9h-2l-3 8.9h1.9l.6-2.3h2.9l.6 2.3Zm5.1.2c.7 0 1.4-.4 1.9-.9l.2.7h1.4v-9.6h-1.8v2.4l.1 1c-.5-.4-1-.7-1.7-.7-1.4 0-2.8 1.4-2.8 3.6 0 2.1 1 3.5 2.7 3.5Zm.5-1.5c-.9 0-1.4-.7-1.4-2 0-1.4.6-2.1 1.4-2.1.4 0 .8.1 1.2.5v3c-.4.4-.7.6-1.2.6Zm7.3 1.5c.7 0 1.3-.4 1.8-.9l.2.7h1.4v-9.6h-1.7v3.4c-.4-.4-1-.7-1.7-.7-1.4 0-2.8 1.4-2.8 3.6 0 2.1 1 3.5 2.8 3.5Zm.4-1.5c-.9 0-1.4-.7-1.4-2 0-1.4.7-2.1 1.4-2.1.4 0 .9.1 1.3.5v3c-.4.4-.8.6-1.3.6ZM0 54h1.8v-3.2H3c1.9 0 3.4-.9 3.4-2.9 0-2.1-1.5-2.8-3.5-2.8H0V54Zm1.8-4.6v-2.9h1c1.2 0 1.9.4 1.9 1.4 0 1-.6 1.5-1.9 1.5h-1Zm6 4.6h1.8v-4.6c.5-.5.9-.8 1.4-.8.7 0 1 .4 1 1.4v4h1.7v-4.2c0-1.7-.6-2.7-2-2.7-1 0-1.6.5-2.2 1l.1-1.3v-2.4H8V54Zm10.5.2c1.7 0 3.3-1.3 3.3-3.5 0-2.3-1.6-3.6-3.3-3.6-1.6 0-3.2 1.3-3.2 3.6 0 2.2 1.6 3.5 3.2 3.5Zm0-1.5c-.9 0-1.4-.8-1.4-2 0-1.3.5-2.1 1.4-2.1 1 0 1.5.8 1.5 2 0 1.3-.5 2.1-1.5 2.1Zm6.9 1.5c.6 0 1-.2 1.4-.3l-.3-1.3a2 2 0 0 1-.7.2c-.6 0-.9-.4-.9-1.2v-3h1.7v-1.3h-1.7v-1.8h-1.4l-.2 1.8h-1v1.4h.9v3c0 1.5.6 2.5 2.2 2.5Zm5.1 0c1.7 0 3.3-1.3 3.3-3.5 0-2.3-1.6-3.6-3.3-3.6-1.6 0-3.2 1.3-3.2 3.6 0 2.2 1.6 3.5 3.2 3.5Zm0-1.5c-.9 0-1.4-.8-1.4-2 0-1.3.5-2.1 1.4-2.1 1 0 1.5.8 1.5 2 0 1.3-.6 2.1-1.5 2.1Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: inherit;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
    label {
      cursor: pointer;
      height: 150px;

      input[type='file'] {
        position: fixed;
        top: -1000px;
        left: -1000px;
      }
    }
    @media screen and (max-width: 800px) {
      width: 100px;
      height: 100px;
      img {
        width: 100px;
        height: 100px;
      }
      label {
        height: 100px;
      }
    }
    @media screen and (max-width: 456px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;
const FieldItem = styled.div<{ missing: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 0.7rem;
  color: #999;
  height: 47px;
  label {
    color: var(--formLabelText);
    font-weight: 700;
    flex-basis: 80px;
  }
  .req {
    color: red;
  }
  .inputStyle {
    background: var(--formFieldBg);
    flex: 1;
    border-radius: 4px;
    box-sizing: border-box;
    border: ${(props) =>
      props.missing ? '1px solid var(--missingField)' : ''};
    input {
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0);
      width: 100%;
      height: 47px;
      padding-left: 1rem;
      border: 0;
      color: var(--content);
      border-radius: 7px;
      font-size: 1rem;
    }
  }
`;

const ButtonBlock = styled.div<ButtonProps>`
  margin-left: 80px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
  flex-wrap: wrap;

  .errorMsg {
    display: block;
    flex-basis: 100%;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;

    color: var(--missingField);
  }
`;

const TextField = ({
  labelText = '',
  id = '',
  value = '',
  editField = (e) => console.log(e),
  isRequired = false,
  nameIsMissing = false,
}) => (
  <FieldItem missing={nameIsMissing}>
    <label htmlFor={id}>
      {labelText}
      <span className="req" style={{ display: !isRequired ? 'none' : '' }}>
        *
      </span>
    </label>
    <div className="inputStyle">
      <input
        type="text"
        id={id}
        name={id}
        placeholder={labelText}
        onChange={editField}
        value={value}
      />
    </div>
  </FieldItem>
);
const DateField = ({
  labelText = '',
  id = '',
  value = new Date(),
  editField = (e) => console.log(e),
  isRequired = false,
  isMissing = false,
}) => (
  <FieldItem missing={isMissing}>
    <label htmlFor={id}>
      {labelText}
      <span className="req" style={{ display: !isRequired ? 'none' : '' }}>
        *
      </span>
    </label>
    <div className="inputStyle">
      <DatePicker
        id={id}
        selected={value}
        dateFormat="MMMM d, yyyy"
        locale="en"
        onChange={editField}
      />
    </div>
  </FieldItem>
);

const EditorModal: React.FC<EditorProps> = ({
  isActive = false,
  closeModal = () => {},
  currentSection = 'fridge',
}) => {
  const { foodItems, setFoodItems } = useFoods();
  const { foodInEditor } = useFoodInEditor();
  const { id, name, img, quantity, category, added, expires } = foodInEditor;
  const [nameIsMissing, setNameIsMissing] = useState(false);
  const [addedDateIsMissing, setAddedDateIsMissing] = useState(false);
  const [formIsInvalid, setFormIsInvalid] = useState(false);
  const [workingName, setWorkingName] = useState(name);
  const [workingImg, setWorkingImg] = useState(img);
  const [isRemoving, setIsRemoving] = useState(false);
  const [workingQuantity, setWorkingQuantity] = useState(quantity);
  const [workingCategory, setWorkingCategory] = useState(
    category || currentSection
  );
  const [workingAdded, setWorkingAdded] = useState<Date>();
  const [workingExpires, setWorkingExpires] = useState<Date>();
  const changeSection = (e: SyntheticEvent & { target: HTMLInputElement }) => {
    const targetSection = e.target.value as Category;
    setWorkingCategory(targetSection);
  };
  const resetError = () => {
    setFormIsInvalid(false);
    setNameIsMissing(false);
    setAddedDateIsMissing(false);
  };
  const resetForm = () => {
    setWorkingName('');
    setWorkingImg('');
    setWorkingAdded(null);
    setWorkingExpires(null);
    setWorkingQuantity('');
    resetError();
  };
  const saveItem = () => {
    const changeIndex = foodItems.findIndex((item) => item.id === id);
    const foods = [...foodItems];
    const workingId = id || new Date().getTime().toString();
    const expiryDate = workingExpires
      ? format(workingExpires, 'LLLL d, yyyy')
      : null;
    const newFoodItem = {
      id: workingId,
      img: workingImg,
      name: workingName,
      category: workingCategory,
      added: format(workingAdded, 'LLLL d, yyyy'),
      expires: expiryDate,
      quantity: workingQuantity,
    };
    if (changeIndex !== -1) {
      foods[changeIndex] = newFoodItem;
    } else {
      foods.push(newFoodItem);
    }
    setFoodItems(foods);
  };
  const close = () => {
    resetForm();
    closeModal();
  };
  const handleUpdate = (e: SyntheticEvent & { target: HTMLInputElement }) => {
    const updateStates = {
      name: setWorkingName,
      img: setWorkingImg,
      quantity: setWorkingQuantity,
    };
    const field = e.target.id;
    const val = e.target.value;
    updateStates[field](val);
    if (field === 'name' || field === 'img') {
      resetError();
    }
  };
  const validateForm = () => {
    if (!workingName && !workingImg) {
      setFormIsInvalid(true);
      setNameIsMissing(true);
      return null;
    }
    if (!workingAdded) {
      setFormIsInvalid(true);
      setAddedDateIsMissing(true);
      return null;
    }
    resetError();
    saveItem();
    close();
  };
  const changeAddedDate = (e) => {
    setAddedDateIsMissing(false);
    setWorkingAdded(e);
  };
  const removeItem = () => {
    const newFoodItems: Array<Food> = [...foodItems].filter(
      (food) => food && food.id !== id
    );
    setFoodItems(newFoodItems);
    close();
  };
  useEffect(() => {
    setIsRemoving(false);
    setWorkingName(name);
    setWorkingImg(img);
    setWorkingQuantity(quantity);
    if (!id) {
      setWorkingCategory(currentSection);
    } else {
      setWorkingCategory(category || currentSection);
    }
    const addedDate = added ? parse(added, 'LLLL d, yyyy', new Date()) : null;
    const expiryDate = expires
      ? parse(expires, 'LLLL d, yyyy', new Date())
      : null;
    setWorkingAdded(addedDate);
    setWorkingExpires(expiryDate || null);
  }, [id]);
  return (
    <Wrapper isActive={isActive} nameIsMissing={nameIsMissing}>
      <form onSubmit={(e) => e.preventDefault()}>
        <CloseButton click={close} />
        <h2>
          <span style={{ textTransform: 'capitalize' }}>
            {!id ? 'add' : 'edit'}
          </span>{' '}
          an item
        </h2>
        <div className="top-section">
          {img && (
            <button
              className="rotate"
              type="button"
              // onClick={rotatePhoto}
            >
              <IconRotate />
            </button>
          )}
          <div className="photo-input">
            <label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                placeholder=""
                // onChange={this.takePhoto}
              />
              <Image
                unoptimized
                src={img || blank}
                alt={name}
                width={150}
                height={150}
              />
            </label>
          </div>
          <div style={{ padding: '10px' }}>
            {['fridge', 'freezer'].map((item) => (
              <Fragment key={item}>
                <input
                  className="sectionChange"
                  type="radio"
                  id={item}
                  name="sectionSelector"
                  value={item}
                  checked={workingCategory === item}
                  onChange={changeSection}
                />
                <label className="sectionChange" htmlFor={item}>
                  <span className="circle" />
                  {item}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="fields">
          <TextField
            id="name"
            labelText="Item name"
            editField={handleUpdate}
            value={workingName}
            isRequired
            nameIsMissing={nameIsMissing}
          />
          <TextField
            id="quantity"
            labelText="Quantity"
            editField={handleUpdate}
            value={workingQuantity}
          />
          <DateField
            id="added"
            labelText="Added on"
            value={workingAdded}
            editField={changeAddedDate}
            isRequired
            isMissing={addedDateIsMissing}
          />
          <DateField
            id="expires"
            labelText="Expires on"
            value={workingExpires}
            editField={setWorkingExpires}
          />
        </div>
        <ButtonBlock isRemoving={isRemoving}>
          <SaveButton
            click={validateForm}
            isRemoving={isRemoving}
            isEditing={!!id}
          />
          <CancelButton isRemoving={isRemoving} click={close} />
          {id && (
            <>
              <RemoveButton
                isRemoving={isRemoving}
                click={removeItem}
                isEditing={!!id}
              />
              <CancelRemovalButton
                isRemoving={isRemoving}
                click={() => setIsRemoving(!isRemoving)}
                isEditing={!!id}
              />
              <RemovePromptButton
                isRemoving={isRemoving}
                click={() => setIsRemoving(!isRemoving)}
                isEditing={!!id}
              />
            </>
          )}
          <span
            className="errorMsg"
            style={{ display: formIsInvalid ? 'block' : 'none' }}
          >
            Please provide {nameIsMissing ? 'a name or a photo' : 'added date'}.
          </span>
        </ButtonBlock>
      </form>
    </Wrapper>
  );
};

export default EditorModal;
