import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../constants/routes';

export default function Card({
  id,
  url,
  name,
  brand,
  price,
  category,
  ratingsAverage,
}) {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="w-[240px] h-[250px] bg-teal-100 rounded-lg shadow-md hover:shadow-xl duration-300">
      <Link to={`/products/${id}`}>
        <div className='flex items-center justify-center py-2 '>
        <img
          className=" mx-auto bg-gray-50 w-24 h-24 object-fit rounded-full"
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
        <div className="flex items-center mt-2.5 ">
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                className={`w-3 h-3 ${
                  index < ratingsAverage ? 'text-blue-700' : 'text-gray-200'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
            {ratingsAverage.toFixed(1)}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900">
            ${Math.floor(0.8 * price)}
          </span>
          <span className="text-md font-bold text-gray-600 line-through">
            ${Math.floor(0.8 * price)}
          </span>
        </div>
      </div>
    </div>
  );
}
