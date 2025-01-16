import { useEffect } from 'react';
import ProductCard from '../../components/products/ProductCard';
import Tittle from '../../components/Tittle';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getAllCategory,
} from '../../redux/products/ProductsActions';
import ProductFilter from '../../components/products/Filter';
import { resetQuery } from '../../redux/products/ProductSlice';
import axios from 'axios';
import NewArrivial from '../../components/products/NewArrivial';

export default function List() {
  const dispatch = useDispatch();
  const { loading, products, query } = useSelector((state) => state.products);

  // useEffect(() => {
  //   const controller= new AbortController();
  //   dispatch(getAllProducts(query));
  //   dispatch(getAllCategory());
  //   return () => {
  //     controller.abort();

  //   }
  // }, [dispatch, query]);

  useEffect(() => {
    const source = axios.CancelToken.source(); // Create a cancel token

    dispatch(getAllProducts({ query, cancelToken: source.token }));
    dispatch(getAllCategory());

    return () => {
      source.cancel('Operation canceled by the user.'); // Cancel the request on cleanup
    };
  }, [dispatch, query]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-slate- min-h-svh mt-2">
      <div >
        <div>
          <Tittle label="New Arrivial" className="text-2xl" />
          <NewArrivial />
        </div>
      </div>
      <div>
        <Tittle label="All Products" className="text-2xl" />
        <ProductFilter />
      </div>
      {products.length === 0 ? (
        <h2 className="text-center text-teal-800 font-bold ">
          Product does not found
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-4">
          {products.map((product) => (
            <ProductCard key={product.id} id={product._id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}
