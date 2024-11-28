import { useEffect } from "react";
import ProductCard from "../../components/products/ProductCard";
import Tittle from "../../components/Tittle";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllCategory } from "../../redux/products/productsActions";
import ProductFilter from "../../components/products/Filter";
import { resetQuery } from "../../redux/products/ProductSlice";
export default function List() {
  const dispatch = useDispatch();
  const { loading, products, query} = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts(query));
    dispatch(getAllCategory());
  }, [dispatch, query]);

  if (loading) {
    return <Loader />;
  }
  function handleReset()
  {
    dispatch(resetQuery());
  }

  return (
    <div className="bg-slate-100 min-h-svh">
      <div className="flex justify-between pr-8 mb-6">
        <Tittle label="New Arrivial" />
        <div className="flex gap-5">
        <button className="px-4 mb-1  bg-blue-800 hover:bg-blue-500 rounded-xl text-white mt-12 " onClick={handleReset}>
            Reset Filter
          </button>
        <Link to={"add"}>
          {" "}
          <button className="px-4 py-2 bg-teal-900 hover:bg-teal-700 rounded-xl text-white mt-12 ">
            + Add products
          </button>
        </Link>
        </div>


      </div>
      <div>
        <ProductFilter />
      </div>
      {products.length===0 ?
      <h2 className="text-center text-teal-800 font-bold ">Product does not found</h2>
      :
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
      {products.map((product) => (
        <ProductCard key={product.id} id={product._id} {...product} />
      ))}
    </div>
    
    }
    </div>
  );
}
