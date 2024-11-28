import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteProduct, updateProduct } from "../redux/Cart/cartsSlice";
import { useState } from "react";
import OrderForm from "../components/products/orderForm";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.carts);

  const handleRemove = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateProduct({ id, quantity: newQuantity }));
    }
  };

  const handleToggle = (product) => {
    setSelectedProduct(product); // Set the product to pass to the form
    setIsOpen(true); // Open the modal
  };

  const handleClose = () => {
    setIsOpen(false); // Close the modal
    setSelectedProduct(null); // Reset the selected product
  };

  if (products.length === 0) return <div>0 Products</div>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center">
      <table className="w-4/5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="text-2xl text-black font-bold py-3">Your Cart</caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">Product</th>
            <th scope="col" className="px-6 py-3">Qty</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr
              key={item._id}
              className="odd:bg-slate-100 even:bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <img
                  src={item.url}
                  className="w-16 md:w-16 max-w-full max-h-full"
                  alt={item.name}
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {item.name}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity || 1}
                    className="bg-gray-50 border text-center text-gray-900 rounded-lg focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white w-1/3"
                    onChange={(e) =>
                      handleQuantityChange(item._id, parseInt(e.target.value))
                    }
                  />
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                ${item.price * (item.quantity || 1)}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => handleToggle(item)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-sm cursor-pointer font-semibold hover:bg-blue-700"
                  >
                    Order Now
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render OrderForm */}
      {isOpen && selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded shadow-md">
            <OrderForm products={selectedProduct} onClose={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
