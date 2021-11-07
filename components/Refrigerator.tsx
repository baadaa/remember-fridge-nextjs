import styled from 'styled-components';
import { IconAdd, Nothingness } from './Icons';
import { AddButton } from './Buttons/Buttons';
import { FridgeArea } from '@/types/types';



const Refrigerator: React.FC<FridgeArea> = ({ space }) => (
  <>
    <div style={{ width: '100%', margin: '0 auto' }}>
      <AddButton>
        <IconAdd />
        Add a new item
      </AddButton>
    </div>
    <div className="container">
      {/* {totalItems !== 0 ? (
        itemsInTheCategory
      ) : ( */}
      <Nothingness space={space} />
      {/* )} */}
    </div>
  </>
);

export default Refrigerator;
