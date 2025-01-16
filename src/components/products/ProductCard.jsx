import { FaPencil } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StarRating from '../startRating';

export default function ProductCard({
  id,
  url,
  name,
  brand,
  price,
  category,
  ratingsAverage,
}) {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="w-full h-128 max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl duration-300">
      {/* <div className='text-right text-sm font-semibold text-gray-600 px-5 py-2'>
        {category}
      </div> */}
      <Link to={`/products/${id}`}>
        <div className="overflow-hidden bg-gray-100 rounded-lg">
          <img
            className="object-contain mx-auto  h-48" // Fixed height and object-fit to cover
            src={url}
            alt={name}
          />
        </div>
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/products/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {name}
          </h5>
        </Link>
        <p className="text-sm text-gray-600">{brand}</p>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1">
           <StarRating rating={ratingsAverage} size={20} />
          </div>

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
            {ratingsAverage.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-gray-900">
              ${Math.floor(0.8 * price)}
            </span>
            <span className="text-xl font-semi-bold text-gray-600 line-through">
              ${Math.floor(price)}
            </span>
          </div>

          <Link
            to={user ? `/products/${id}` : '/login'}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
