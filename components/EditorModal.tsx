import { SyntheticEvent, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Category } from '@/types/types';
import { CloseButton } from './Buttons/Buttons';
import { IconRotate } from '@/components/Icons';
import { useFoodInEditor } from '@/contexts/index';
import blank from './Icons/_.png';

type EditorProps = {
  isActive: boolean;
  closeModal?: () => void;
  currentSection?: Category;
};

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
    /* border-color: ${(props) =>
      props.missing ? 'var(--missingField)' : '#c8c8c8'};
    background-image: url(${photoPrompt}); */
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
const EditorModal: React.FC<EditorProps> = ({
  isActive = false,
  closeModal = () => {},
  currentSection = 'fridge',
}) => {
  const { foodInEditor, setFoodInEditor } = useFoodInEditor();
  const { id, name, img, quantity, category, added, expires } = foodInEditor;
  const [workingName, setWorkingName] = useState(name);
  const [workingImg, setWorkingImg] = useState(img);
  const [workingQuantity, setWorkingQuantity] = useState(quantity);
  const [workingCategory, setWorkingCategory] = useState(
    category || currentSection
  );
  const [workingAdded, setWorkingAdded] = useState(added);
  const [workingExpires, setWorkingExpires] = useState(expires);

  const changeSection = (e: SyntheticEvent & { target: HTMLInputElement }) => {
    const targetSection = e.target.value as Category;
    setWorkingCategory(targetSection);
  };
  return (
    <Wrapper isActive={isActive}>
      <form onSubmit={(e) => e.preventDefault()}>
        <CloseButton click={closeModal} />
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
            <input
              className="sectionChange"
              type="radio"
              id="fridge"
              name="sectionSelector"
              value="fridge"
              checked={workingCategory === 'fridge'}
              onChange={changeSection}
            />
            <label className="sectionChange" htmlFor="fridge">
              <span className="circle" />
              Fridge
            </label>

            <input
              className="sectionChange"
              type="radio"
              id="freezer"
              name="sectionSelector"
              value="freezer"
              checked={workingCategory === 'freezer'}
              onChange={changeSection}
            />
            <label className="sectionChange" htmlFor="freezer">
              <span className="circle" />
              Freezer
            </label>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default EditorModal;
