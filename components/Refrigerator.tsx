import { useState } from 'react';
import { IconAdd, Nothingness } from './Icons';
import { AddButton } from '@/components/Buttons/Buttons';
import { FridgeArea } from '@/types/types';
import { useFoods } from '@/contexts/index';
import FoodItem from '@/components/FoodItem/FoodItem';
import EditorModal from '@/components/EditorModal';

const Refrigerator: React.FC<FridgeArea> = ({ space }) => {
  const { foodItems, setFoodItems } = useFoods();
  const [ editorIsActive, setEditorIsActive ] = useState(false);

  const foodInCategory = foodItems.filter(
    (food) => food && food.category === space.toLowerCase()
  );
  return (
    <>
      {editorIsActive && <EditorModal closeModal={() => setEditorIsActive(false)} />}
      <div style={{ width: '100%', margin: '0 auto' }}>
        <AddButton onClick={() => setEditorIsActive(true)}>
          <IconAdd />
          Add a new item
        </AddButton>
      </div>
      <div className="container">
        {foodInCategory.length === 0 ? (
          <Nothingness space={space} />
        ) : (
          foodInCategory.map(
            (food) =>
              food && (
                <FoodItem
                  key={food.id}
                  id={food.id}
                  img={food.img}
                  quantity={food.quantity}
                  name={food.name}
                  category={food.category}
                  added={food.added}
                  expires={food.expires}
                />
              )
          )
        )}
      </div>
    </>
  );
};

export default Refrigerator;
