import { useState } from 'react';
import './style.css';

function Card(data) {
  const [isActive, setIsActive] = useState(false);

  const handleClickOnCard = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`card ${isActive ? 'card_active' : ''}`} onClick={handleClickOnCard}>
      <h3 className='card__title' title={`${data.index} Lorem Ipsum dolor sit`}>{`${data.index} Lorem Ipsum dolor sit`}</h3>
      <p className='card__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

export default Card;
