import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../startRating';
import { Card } from '@/components/ui/card';

const ArrivalCard = ({ product }) => {
  const { id, url, name, price } = product;

  return (
    <Card className="group w-[200px] h-[220px] flex flex-col items-center overflow-hidden rounded-xl border bg-teal-100 p-3">
      <Link to={`/product/${id}`}>
        <div className='flex items-center justify-center'>
        <img
          src={url}
          alt={name}
          className="w-24 h-24 rounded-full object-fit"
        />
        </div>
      </Link>
      <div className="mt-2 text-center">
        <Link to={`/products/${id}`}>
          <h5 className="text-sm font-bold text-gray-800">{name}</h5>
        </Link>
        <div className="mt-2">
          <p className="text-[16px] font-bold text-gray-900">
            ${(0.8 * price).toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 line-through">${price}</p>
        </div>
      </div>
    </Card>
  );
};

export default ArrivalCard;
