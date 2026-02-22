import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PaymentPage = () => {
  const { id } = useParams(); // order/product ID
  const [quantity, setQuantity] = useState(1);
  const [loadingKhalti, setLoadingKhalti] = useState(false);
  const [loadingStripe, setLoadingStripe] = useState(false);

  const token = localStorage.getItem('authToken');

  const handleViaKhalti = async () => {
    setLoadingKhalti(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/payment/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { payment_url } = response.data;
      if (payment_url) {
        window.location.href = payment_url;
      } else {
        console.error('Payment URL not received');
      }
    } catch (error) {
      console.error('Error initializing Khalti payment:', error.message);
    } finally {
      setLoadingKhalti(false);
    }
  };

  const handleViaStripe = async () => {
    setLoadingStripe(true);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/order/checkout-sessions/${id}`,
        { quantity }, // ✅ Send quantity in body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { url } = response.data.session;
      if (url) {
        window.location.href = url;
      } else {
        console.error('Stripe session URL not received');
      }
    } catch (error) {
      console.error('Error initializing Stripe checkout:', error.message);
    } finally {
      setLoadingStripe(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen bg-[#F0FFF4]">
    

      <button
        onClick={handleViaKhalti}
        disabled={loadingKhalti}
        className="px-6 py-3 rounded-lg text-white bg-[#2F855A] hover:bg-[#276749] active:scale-95"
      >
        {loadingKhalti ? 'Processing...' : 'Pay with Khalti'}
      </button>

      <button
        onClick={handleViaStripe}
        disabled={loadingStripe}
        className="px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95"
      >
        {loadingStripe ? 'Redirecting to Stripe...' : 'Pay with Stripe'}
      </button>
    </div>
  );
};

export default PaymentPage;
