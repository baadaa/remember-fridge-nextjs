import { useState, useEffect } from 'react';
import { IconAdd, Nothingness } from './Icons';
import { AddButton } from '@/components/Buttons/Buttons';
import { FridgeArea } from '@/types/types';
import { useFoods, useFoodInEditor } from '@/contexts/index';
import FoodItem from '@/components/FoodItem/FoodItem';
import EditorModal from '@/components/EditorModal';
import { emptyFoodItem } from './foodTemplate';

const Refrigerator: React.FC<FridgeArea> = ({ space }) => {
  const { foodItems, setFoodItems } = useFoods();
  const [editorIsActive, setEditorIsActive] = useState(false);
  const { setFoodInEditor } = useFoodInEditor();

  const foodInCategory = foodItems.filter(
    (food) => food && food.category === space.toLowerCase()
  );

  useEffect(() => {
    if (!editorIsActive) {
      setFoodInEditor(emptyFoodItem);
    }
  }, [editorIsActive, setFoodInEditor]);
  return (
    <>
      <EditorModal
        isActive={editorIsActive}
        closeModal={() => setEditorIsActive(false)}
        currentSection={space}
      />
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
                  edit={() => setEditorIsActive(true)}
                />
              )
          )
        )}
      </div>
    </>
  );
};

export default Refrigerator;
