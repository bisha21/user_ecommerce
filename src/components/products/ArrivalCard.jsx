import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../startRating';

const ArrivalCard = ({ product }) => {
  const { id, url, name, brand, price, category, ratingsAverage } = product;

  return (
    <div className="group my-10 flex w-1/2 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link to={`/product/${id}`}>
        <img src={url} alt="product image" className='object-contain h-32 '/>
      </Link>
      <div className="mt-2 px-2 pb-4">
        <Link to={`/products/${id}`}>
          <h5 className="text-sm font-bold text-gray-800">{name}</h5>
        </Link>
        <p className="text-sm text-gray-500">{brand}</p>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-xl font-bold text-gray-900">${price}</p>
          <p className="text-sm text-gray-500">
          <StarRating rating={ratingsAverage} size={10} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArrivalCard;
