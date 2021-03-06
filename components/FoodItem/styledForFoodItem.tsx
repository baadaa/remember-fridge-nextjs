import styled from 'styled-components';
import Image from 'next/image';
import { IconAdded, IconExpire, IconFood } from '@/components/Icon';
import { Food } from '@/types/types';

const FoodStyle = styled.article`
  position: relative;
  box-sizing: border-box;
  &:hover {
    transform: scale(1.05);
  }

  transition: transform 0.2s;
  perspective: 1000px;
  .flipper {
    width: var(--cardLarge);
    height: var(--cardLarge);
    transition: transform 0.3s, box-shadow 0.2s;
    transform-style: preserve-3d;
    position: relative;

    @media screen and (max-width: 375px) {
      width: var(--cardSmall);
      height: var(--cardSmall);
    }
  }
  &:hover {
    .flipper {
      transform: rotateY(180deg);
    }
  }
  .flipper > div {
    width: var(--cardLarge);
    box-sizing: border-box;
    height: var(--cardLarge);
    border-radius: 10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;

    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 375px) {
      width: var(--cardSmall);
      height: var(--cardSmall);
    }
  }
`;

type ModalProps = {
  cancelModal?: () => void;
  deleting?: boolean;
};
const FoodCard: React.FC<ModalProps> = ({ children, cancelModal }) => (
  <FoodStyle>
    <div className="flipper" onMouseLeave={cancelModal}>
      {children}
    </div>
  </FoodStyle>
);

const Front = styled.div`
  z-index: 2;
  color: var(--black);
  transform: rotateY(0deg);
  img {
    cursor: pointer;
    width: var(--cardLarge);
    height: var(--cardLarge);
    border-radius: 10px;
    object-fit: cover;

    @media screen and (max-width: 375px) {
      width: var(--cardSmall);
      height: var(--cardSmall);
    }
  }
  h2 {
    position: absolute;
    right: -5px;
    top: 5px;
    font-size: 12px;
    background: #fff;
    padding: 5px 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    max-width: 120px;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -5px;
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 5px 5px 0 0;
      border-color: #777 transparent transparent transparent;
    }
  }

  .quantity {
    font-weight: 700;
    font-size: 10px;
    position: absolute;
    left: 5px;
    line-height: 1;
    bottom: 5px;
    padding: 8px;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.75);
  }
`;

const CardFront: React.FC<Food> = ({ img, name, quantity }) => (
  <Front>
    {img ? (
      <Image unoptimized src={img} alt={name} width={150} height={150} />
    ) : (
      <IconFood />
    )}
    {name ? <h2>{name}</h2> : ''}
    {quantity ? <span className="quantity">{quantity}</span> : ''}
  </Front>
);

const Back = styled.div`
  padding: 10px;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  color: var(--black);
  h2 {
    margin: 0;
    font-size: 15px;
    line-height: 1.3;
    font-weight: 400;
    @media screen and (max-width: 375px) {
      // font-size: 12px;
    }
  }

  .quantity {
    position: static;
    font-size: 12px;
    line-height: 1.5;
    box-shadow: none;
    padding: 0;
    color: #000;
    font-weight: 400;

    &::before {
      content: '(';
    }

    &::after {
      content: ')';
    }
  }

  .dates {
    font-weight: 200;
    font-size: 12px;
    display: flex;
    align-items: center;

    &:first-of-type {
      margin-top: 8px;
    }
  }

  .closeItem {
    position: absolute;
    cursor: pointer;
    right: -5px;
    top: -5px;
    width: 25px;
    height: 25px;
    transition: transform 0.2s, opacity 0.2s;
    opacity: 1;
    z-index: 3;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
const EditButtons = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  button {
    width: 50%;
    position: absolute;
    bottom: 0;
    font-size: 13px;
    box-sizing: border-box;
    outline: none;
    border: none;
    color: #fff;
    padding: 5px;
    font-weight: 700;
    transition: background 0.2s;

    &.edit {
      left: 0;
      background: var(--green);
      border-radius: 0 0 0 10px;
    }

    &.delete {
      right: 0;
      background: var(--berry);
      border-radius: 0 0 10px 0;
    }
  }
`;

const CardBack: React.FC<Food> = ({
  name = '',
  quantity,
  added,
  expires,
  children,
}) => {
  const truncatedName =
    name.length >= 30 ? `${name.substring(0, 30)}...` : name;
  return (
    <Back>
      {name ? <h2>{truncatedName}</h2> : ''}
      {quantity ? <span className="quantity">{quantity}</span> : ''}
      {added ? (
        <div className="dates">
          <IconAdded className="added" />
          {added}
        </div>
      ) : (
        ''
      )}
      {expires ? (
        <div className="dates">
          <IconExpire className="expire" />
          {expires}
        </div>
      ) : (
        ''
      )}
      {children}
    </Back>
  );
};

const DeleteConfirmModal = styled.div<ModalProps>`
  transition: transform 0.2s, opacity 0.2s;

  opacity: ${(props) => (props.deleting ? 1 : 0)};
  pointer-events: ${(props) => (props.deleting ? 'all' : 'none')};
  transform: ${(props) =>
    props.deleting ? 'translateY(0)' : 'translateY(50px)'};
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  color: var(--black);
  border-radius: 10px;

  h4,
  h6 {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0 10px;
    text-align: center;
  }

  h4 {
    margin-top: 30px;
  }

  h6 {
    margin-top: 5px;
  }
`;
const DeleteConfirmBtns = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 10px;
  left: 10px;
  right: 10px;
  color: #fff;

  button {
    border: none;
    width: 48%;
    font-weight: 700;
    line-height: 1.2;
    padding: 10px 0;
    border-radius: 15px;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: scale(1.04);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    span {
      display: block;
      font-size: 0.6em;
    }
  }

  .deleteYes {
    background: var(--berry);
  }

  .deleteNo {
    background: var(--yellow);
  }
`;

export {
  FoodCard,
  CardFront,
  CardBack,
  EditButtons,
  DeleteConfirmModal,
  DeleteConfirmBtns,
};
