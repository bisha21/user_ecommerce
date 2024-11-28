import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { addProduct, deleteProduct} from "../../api/products";
import { toast } from "react-toastify";
import Modal from "../Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/products/ProductsActions"

export default function ProductCard({ id, url, name, brand, price, category }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function removeProduct() {
    setIsOpen(true);
  }
  
  async function confirmDelete() {
    try {
      await deleteProduct(id);
      dispatch(getAllProducts({}));
      setIsOpen(false);
      toast.success(`Product ${name} deleted successfully`);
    } catch (error) {
      if (error.response) {
        // Error with response from server
        toast(error.response.data, {
          type: "error",
          autoclose: 1500,
        });
      } else if (error.request) {
        // Error with the request, no response received
        toast("Network error: No response from server.", {
          type: "error",
          autoclose: 1500,
        });
      } else {
        // Other types of errors (e.g., configuration or setup issues)
        toast("An unexpected error occurred.", {
          type: "error",
          autoclose: 1500,
        });
      }
    }
  }
  
  
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
            className="max-h-48 w-48 mx-auto mt-2"
          />
        </Link>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{brand}</p>
        <p className="my-3">
          <span className="text-xl mr-1">${Math.floor(0.8 * price)}</span>
          <span className="line-through text-slate-400 text-sm">${price}</span>
        </p>
        <div className="flex justify-between">
          <Link
            to={id}
            className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900"
          >
            Buy Now
          </Link>
          <div className="flex gap-3">
            <Link
              to={`edit/${id}`}
              className="bg-blue-800 px-3 py-1 text-white rounded hover:bg-teal-900 flex items-center"
            >
              <FaPencil />
            </Link>

            <button
              className="bg-red-800 px-3 py-1 text-white rounded hover:bg-teal-900 flex items-center"
              onClick={removeProduct}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        label="Delete Products"
        body={<p>Are sure to delete this products</p>}
        actions={
          <button
            className="bg-red-500 px-3 py-1 text-white
        "
            onClick={confirmDelete}
          >
            Confirm
          </button>
        }
      />
    </div>
  );
}
