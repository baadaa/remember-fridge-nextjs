import { useState } from 'react';
import {
  FoodCard,
  CardFront,
  CardBack,
  EditButtons,
  DeleteConfirmModal,
  DeleteConfirmBtns,
} from './styledForFoodItem';
import { Food } from '@/types/types';

const FoodItem: React.FC<Food> = (props) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { id, img, name, quantity, added, expires, category } = props;
  const editThis = () => console.log('editing');
  return (
    <FoodCard cancelModal={() => setDeleteModal(false)}>
      <CardFront
        id={id}
        img={img}
        name={name}
        added={added}
        quantity={quantity}
        category={category}
      />
      <CardBack
        id={id}
        name={name}
        quantity={quantity}
        added={added}
        expires={expires}
        category={category}
      >
        <EditButtons>
          <button type="button" className="edit" onClick={() => editThis()}>
            Edit
          </button>
          <button
            type="button"
            className="delete"
            onClick={() => setDeleteModal(!deleteModal)}
          >
            Delete
          </button>
        </EditButtons>
        <DeleteConfirmModal deleting={deleteModal}>
          <h4>Delete this item?</h4>
          <h6>{name}</h6>
          <DeleteConfirmBtns>
            <button
              type="button"
              className="deleteYes"
              // onClick={() => props.deleteThis(props.id)}
            >
              Yes<span>delete it</span>
            </button>
            <button
              type="button"
              className="deleteNo"
              onClick={() => setDeleteModal(!deleteModal)}
            >
              No<span>keep it</span>
            </button>
          </DeleteConfirmBtns>
        </DeleteConfirmModal>
      </CardBack>
    </FoodCard>
  );
};

export default FoodItem;