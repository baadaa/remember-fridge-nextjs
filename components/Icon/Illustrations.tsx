import styled from 'styled-components';
import { FridgeArea } from '../../types/types';

const Nothing = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  text-align: center;
  width: 100%;
  .illo {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    overflow: hidden;
    margin: 0 auto;
    animation: shake 6s ease infinite;
    background-repeat: no-repeat;
    @media screen and (max-width: 335px) {
      width: 150px;
      height: 150px;
    }
  }
  h3 {
    font-weight: 700;
    margin: 20px 0 0;
    opacity: 0.7;
    font-size: 17px;
  }
  p {
    font-size: 15px;
    margin: 6px 0 0;
    opacity: 0.7;
  }
  @keyframes shake {
    0% {
      transform: rotate(5deg);
    }
    2% {
      transform: rotate(-5deg);
    }
    4% {
      transform: rotate(5deg);
    }
    6% {
      transform: rotate(0deg);
    }
    98% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(5deg);
    }
  }
`;

export const EmptyFridge: React.FC<React.SVGAttributes<SVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <title>empty-fridge</title>
    <rect width="500" height="500" fill="#d6b5cf" />
    <polygon
      points="500 227.5 500 500 240.4 500 107.2 366.7 382.7 107.2 500 227.5"
      fill="#b290ab"
      fillRule="evenodd"
    />
    <rect x="107.2" y="108.5" width="196.1" height="258.17" fill="#d7d8d8" />
    <rect x="127.6" y="128.9" width="155.3" height="217.41" fill="#cbcccd" />
    <path
      d="M133.9,187.7h143V235h-143V187.7h0Zm0,52.5h143v47.4h-143V240.2h0Zm0,52.5h143v47.6h-143V292.7Zm0-157.5h143v47.4h-143V135.1Z"
      fill="#b6b7b7"
      fillRule="evenodd"
    />
    <polygon
      points="369.6 104.8 294 108.5 294 366.7 369.6 395.2 369.6 104.8"
      fill="#c2c3c3"
      fillRule="evenodd"
    />
    <polygon
      points="352.2 123 311.2 125 311.2 354.8 352.2 370.2 352.2 123"
      fill="#aeaeaf"
      fillRule="evenodd"
    />
    <path
      d="M311.2,134.4v49.8l24.6,1.3,16.3,0.7V133.7l-16.3.4Zm0,55.3v49.8l24.6,2.9,16.3,2V191.9l-16.3-.9Zm0,55.1v49.8l24.6,4.8,16.3,3.3V250.1l-16.3-2.2Zm0,55.1v49.8l24.6,6.6,16.3,4.6V308.3L335.8,305Z"
      fill="#979797"
      fillRule="evenodd"
    />
    <path
      d="M296.2,161.2h-2.6a1.8,1.8,0,0,0-1.8,1.8v28.8a1.7,1.7,0,0,0,1.8,1.8h2.6V161.2Zm0,120.3h-2.6a1.8,1.8,0,0,0-1.8,1.8v28.8a1.8,1.8,0,0,0,1.8,1.8h2.6V281.5Z"
      fill="#eaebeb"
      fillRule="evenodd"
    />
    <path
      d="M369.6,104.8h10.6a2.4,2.4,0,0,1,2.4,2.4V392.6a2.5,2.5,0,0,1-2.4,2.6H369.6V104.8Z"
      fill="#d7d8d8"
      fillRule="evenodd"
    />
    <path
      d="M382.7,162.5h5.1v7.3h-5.1v-7.3Zm0,79.7h5.1v7.5h-5.1v-7.5Z"
      fill="#aeaeaf"
      fillRule="evenodd"
    />
    <path
      d="M387.8,154.8h3.1a2,2,0,0,1,1.8,1.8v98.8a2,2,0,0,1-1.8,2h-3.1V154.8Z"
      fill="#d7d8d8"
      fillRule="evenodd"
    />
    <rect x="133.9" y="175.9" width="143" height="6.61" fill="#aeaeaf" />
    <rect x="133.9" y="228.4" width="143" height="6.61" fill="#aeaeaf" />
    <rect x="133.9" y="280.9" width="143" height="6.61" fill="#aeaeaf" />
    <rect x="133.9" y="333.5" width="143" height="6.79" fill="#aeaeaf" />
    <polygon
      points="311.2 184.2 326.3 182.9 352.2 182.9 352.2 186.2 311.2 184.2"
      fill="gray"
      fillRule="evenodd"
    />
    <polygon
      points="311.2 239.4 326.3 238 352.2 238 352.2 244.4 311.2 239.4"
      fill="gray"
      fillRule="evenodd"
    />
    <polygon
      points="311.2 294.5 326.3 293.1 352.2 294 352.2 302.6 311.2 294.5"
      fill="gray"
      fillRule="evenodd"
    />
    <polygon
      points="311.2 349.6 326.3 348.1 352.2 350.3 352.2 360.8 311.2 349.6"
      fill="gray"
      fillRule="evenodd"
    />
  </svg>
);

export const Nothingness: React.FC<FridgeArea> = ({ space = 'Fridge' }) => (
  <Nothing>
    <div className="illo">
      <EmptyFridge />
    </div>
    <h3>Your {space} is empty.</h3>
    <p>Why don???t you stock up?</p>
  </Nothing>
);
