import { Link, Navigate } from "react-router-dom";
import ProductForm from "../../components/products/ProductForm";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import { FaArrowLeft, FaBackward } from "react-icons/fa";
import Tittle from "../../components/Tittle";
import { FaArrowDown } from "react-icons/fa6";

export default function Add() {
  return (
    <main className="felx flex-col items-center justify-center   bg-slate-100">
      <Link
        to={PRODUCTS_ROUTE}
        className="inline-flex m-4 px-4 py-2 bg-teal-600 rounded-sm text-white gap-2 items-center"
      >
        <FaArrowLeft /> Back
      </Link>
      <div className="flex justify-center">
        <Tittle label="Add Product" />

      </div>

      <section className="w-full md:w-1/2 mx-auto mt-5 shadow-sm flex flex-col bg-white text-start ">

        <div className="">
          <ProductForm />
        </div>
        {/* <Navigate to={ PRODUCTS_ROUTE} > <FaBackward/> Back</Navigate> */}
      </section>
    </main>
  )
}
