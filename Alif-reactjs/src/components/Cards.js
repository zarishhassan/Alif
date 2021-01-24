import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Your Imagination</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/adventureCard.jpg'
              text='Live the Life of a Hero!'
              label='Adventure'
              path='/genres'
            />
            <CardItem
              src='images/fantasyCard.jpg'
              text='Live Out Your Gratest Fantasies!'
              label='Fantasy'
              path='/genres'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mysteryCard.jpg'
              text='Solve the Mystery of a Lifetime!'
              label='Mystery'
              path='/genres'
            />
            <CardItem
              src='images/romanceCard.jpg'
              text='Live in a Fairytale!'
              label='Romance'
              path='/genres'
            />
            <CardItem
              src='images/horrorCard.jpg'
              text='Face Your Darkest Fears.'
              label='Horror'
              path='/genres'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
