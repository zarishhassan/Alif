import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Exciting Books for Everyone!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/thehost.jpg'
              text='Live amongst the souls'
              label='Sci-Fi'
              path='/pdfViewer'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
