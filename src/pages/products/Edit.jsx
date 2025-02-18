import { Link, useParams } from "react-router-dom";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import { FaArrowLeft } from "react-icons/fa";
import Tittle from "../../_components/Tittle";
import ProductsForm from "../../_components/products/ProductForm";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/products";
import { toast } from "react-toastify";

function EditProduct() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProductById(params.id)
      .then((response) => {
        setLoading(false);
        setProduct(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        toast.error(error.response.data || "Something went wrong");
      });
  }, [params.id]);
  return (
    <main className="felx flex-col h-[90vh]  justify-center pt-6  bg-slate-100">
      <div className="flex">
        <Link
          to={PRODUCTS_ROUTE}
          className="inline-flex h-10 ml-3  px-4  bg-teal-600 rounded-sm text-white gap-2 items-center"
        >
          <FaArrowLeft /> Back
        </Link>
        <div className=" mx-auto ">
          <Tittle label="Edit Product" />
        </div>
      </div>

      <section className="w-full md:w-1/2 mx-auto mt-5 shadow-sm flex flex-col bg-white text-start ">
        <div className="">
          <ProductsForm product={product} />
        </div>
        {/* <Navigate to={ PRODUCTS_ROUTE} > <FaBackward/> Back</Navigate> */}
      </section>
    </main>
  );
}

export default EditProduct;
