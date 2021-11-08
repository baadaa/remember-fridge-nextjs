import { useEffect } from 'react';
import styled from 'styled-components';
import { IconAdd, Nothingness } from './Icons';
import { AddButton } from '@/components/Buttons/Buttons';
import { FridgeArea } from '@/types/types';
import { useFoods } from '@/contexts/index';
import FoodItem from '@/components/FoodItem/FoodItem';

const Refrigerator: React.FC<FridgeArea> = ({ space }) => {
  const { foodItems, setFoodItems } = useFoods();
  useEffect(() => {
    console.log(foodItems);
  });
  return (
    <>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <AddButton>
          <IconAdd />
          Add a new item
        </AddButton>
      </div>
      <div className="container">
        {foodItems.length === 0 ? (
          <Nothingness space={space} />
        ) : (
          foodItems.map(
            (food) =>
              food &&
              food.category === space.toLowerCase() && (
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
