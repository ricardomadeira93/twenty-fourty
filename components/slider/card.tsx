import React from 'react';

interface Item {
  name: string;
}

interface CardProps {
  item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className='flex-shrink-0 w-64 h-48 bg-gray-200 m-2 p-4'>
      <p>{item.name}</p>
    </div>
  );
};

export default Card;
