import { useEffect } from 'react';
import ProductCard from '../../_components/products/ProductCard';
import Tittle from '../../_components/Tittle';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getAllCategory,
} from '../../redux/products/ProductsActions';
import ProductFilter from '../../_components/products/Filter';
import { resetQuery } from '../../redux/products/ProductSlice';
import axios from 'axios';
import NewArrivial from '../../_components/products/NewArrivial';
import FilterProduct from '@/_components/products/NewFilter';
import Search from '@/_components/products/Search';

export default function List() {
  const dispatch = useDispatch();
  const { loading, products, query } = useSelector((state) => state.products);

  useEffect(() => {
    const controller= new AbortController();
    dispatch(getAllProducts(query));
    dispatch(getAllCategory());
    return () => {
      controller.abort();

    }
  }, [dispatch, query]);



  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-slate- min-h-svh mt-2 max-w-[1500px] mx-auto bg-teal-100/30">
      
        {/* <div>
          <Tittle label="New Arrivial" className="text-2xl" />
          <NewArrivial />
        </div> */}
        <div className='flex justify-between'>
        <Tittle label="All Products" className="text-2xl" />
          <Search/>
        </div>
      
      <div className='grid grid-cols-5 '>
      <div className='col-span-1  bg-teal-100/30 h-[90vh]'>
        {/* <ProductFilter /> */}
        <FilterProduct/>
      </div>
      <div className='col-span-4 h-[90vh] overflow-y-scroll'>
      {products.length === 0 ? (
        <h2 className="text-center text-teal-800 font-bold ">
          Product does not found
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <ProductCard key={product.id} id={product._id} {...product} />
          ))}
        </div>
      )}
      </div>
      </div>
    </div>
  );
}
