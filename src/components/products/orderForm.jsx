import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Spinner from '../Spinner';
import createOrder from '../../api/order';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/Cart/cartsSlice';
import { loadStripe } from '@stripe/stripe-js';
import { FaClosedCaptioning, FaCross } from 'react-icons/fa';

const OrderForm = ({ products, onClose }) => {
  const authToken = localStorage.getItem('authToken');
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function submitForm(data) {
    console.log(data);
    setLoading(true);
    try {
      await createOrder(data);
      toast.success('Order created successfully!');
      
      const response = await fetch(`http://localhost:3000/api/order/checkout-sessions/${products._id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: products.quantity }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }
  
      const { session } = await response.json();
      if (session?.id) {
        const stripe = await loadStripe('pk_test_51QfNZyKaOtF0Bun2pzEP5yXIgDKXINu5atezNFdQB1vZaygvK7Fcsf1lk59MrP9OUwaNYjQr6Zoj96x8uwFxKzLi00HlTtAMoO');
        await stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        throw new Error('Invalid session ID');
      }
    } catch (error) {
      toast.error(error.message || 'Error processing payment.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="w-full py-4 px-4 shadow"
      onSubmit={handleSubmit(submitForm)}
    >
      <button
        onClick={onClose}
        className="font-bold text-xl ml-[300px] mt-[-30px] "
      >
        X
      </button>
      <div>
        <h1 className="text-3xl font-bold text-center">Place your order</h1>
      </div>
      <div className="py-1">
        {/* <label htmlFor="userId">User ID</label> */}
        <input
          type="hidden"
          id="userId"
          className="w-full mt-1 py-1 px-2 rounded border"
          value={user.id}
          {...register('userId', { required: 'User ID is required.' })}
          readOnly
        />
      </div>
      <div className="py-1">
        {/* <label htmlFor="productId">Product ID</label> */}
        <input
          type="hidden"
          id="productId"
          className="w-full mt-1 py-1 px-2 rounded border"
          value={products._id}
          {...register('productId', { required: 'Product ID is required.' })}
          readOnly
        />
      </div>
      <div className="py-1">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productId"
          className="w-full mt-1 py-1 px-2 rounded border"
          value={products.name}
          {...register('productname', { required: 'Product ID is required.' })}
          readOnly
        />
      </div>
      <div className="py-1">
        <label htmlFor="paymentStatus">Payment Status</label>
        <select
          id="paymentStatus"
          className="w-full mt-1 py-1 px-2 rounded border"
          {...register('paymentStatus', {
            required: 'Payment status is required.',
          })}
        >
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.paymentStatus?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="items">Items</label>
        <input
          type="number"
          id="items"
          value={products.quantity}
          className="w-full mt-1 py-1 px-2 rounded border"
          {...register('items', {
            required: 'Items count is required.',
            min: { value: 1, message: 'Items must be at least 1.' },
          })}
          readOnly
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.items?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="items">Total Amount</label>
        <input
          type="text"
          id="amount"
          value={products.price * products.quantity}
          className="w-full mt-1 py-1 px-2 rounded border"
          {...register('amount', {
            required: 'Items count is required.',
            min: { value: 1, message: 'Items must be at least 1.' },
          })}
          readOnly
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.items?.message}
        </p>
      </div>
      <div className="mt-5 text-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-700 text-white rounded px-5 py-1 cursor-pointer flex items-center mx-auto disabled:opacity-75 disabled:cursor-not-allowed"
        >
          Create Order
          {loading ? <Spinner className="h-[1.2rem] w-[1.2rem] ml-1" /> : null}
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
