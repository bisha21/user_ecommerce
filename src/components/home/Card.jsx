import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../constants/routes";

export default function Card({ id, url, name, brand, price, category }) {
  const user=useSelector(state=>state.auth.user)
  
    return (
      <div className=" inline-block shadow-md py-5 px-8 rounded-md  relative bg-white hover:shadow-2xl  duration-300 ">
        <span className="bg-green-300 text-sm px-4 py-1 rounded-sm text-black absolute right-0 top-0">
          {category}
        </span>
        <div>
          <Link to={id}>
            <img
              src={url}
              alt="iphone"
              className="h-48 w-48 mx-auto mt-2"
            />
          </Link>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p>{brand}</p>
          <p className="my-3">
            <span className="text-xl mr-1">${Math.floor(0.8 * price)}</span>
            <span className="line-through text-slate-400 text-sm">${price}</span>
          </p>
          <div className="flex justify-between items-center">
            <Link
              to={user ? `products/${id}`:LOGIN_ROUTE}
              className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900"
            >
              Buy Now
            </Link>

          </div>
        </div>
       
      </div>
    );
  }
  