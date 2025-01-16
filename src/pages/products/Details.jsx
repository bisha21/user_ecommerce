import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../api/products';
import { PRODUCTS_ROUTE } from '../../constants/routes';
import { Link, useParams } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Tittle from '../../components/Tittle';
import Spinner from '../../components/Spinner';
import { addProduct } from '../../redux/Cart/cartsSlice';
import { toast } from 'react-toastify';
import StarRating from '../../components/startRating';
import ReviewForm from '../../components/review/reviewForm';
import ReviewCard from '../../components/review/reviewCard';
import ReviewCards from '../../components/review/reviewCards';

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.carts.products);

  function addToCart() {
    if (cartProducts.some((item) => item._id === product._id)) {
      toast.success(`${product.name} is already in your cart.`);
    } else {
      dispatch(addProduct(product));
      toast.success(`${product.name} has been added to your cart!`);
    }
  }

  useEffect(() => {
    getProductById(params.id)
      .then((response) => {
        setProduct(response.data);
        console.log('Oich dami', response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [params.id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-[90vh]">
        <Spinner className="h-16 w-16" />
      </div>
    );

  return (
    <section className="p-5 m-4 max-w-7xl mx-auto bg-green-100">
      <Link to={PRODUCTS_ROUTE} className="px-5 py-2 flex items-center">
        <BiLeftArrowAlt className="mr-1" />
        Back
      </Link>
      <div className="">
        <div className="grid md:grid-cols-2 justify-around items-center ">
          <div className='w-2/3 relative   ' >
            <img
              src={product?.url}
              alt={product?.name}
              className="ml-48 max-h-[60vh] "
            />
          </div>
          <div className="w-full">
            {/* Replace with StarRating component */}
            <StarRating rating={product.ratingsAverage} size={40} />
            <Tittle label={product.name} />
            <p className="py-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              molestias eum dolores maxime? Exercitationem, dignissimos
              voluptas. Quis fugit distinctio dolores rem temporibus quibusdam
              voluptas magnam quisquam suscipit? Quisquam, libero! Minus.
            </p>
            <p className="font-semibold uppercase">{product.brand}</p>
            <p className="my-2">
              <span className="text-2xl mr-1">
                ${Math.floor(product.price * 0.8)}
              </span>
              <span className="line-through text-slate-400 text-md">
                ${product.price}
              </span>
            </p>

            <button
              className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900 mt-4 flex items-center"
              onClick={addToCart}
              disabled={cartProducts.some((item) => item._id === product._id)}
            >
              {cartProducts.some((item) => item._id === product._id)
                ? 'Already in Cart'
                : 'Add to Cart'}
              <FaCartPlus className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex  flex-col justify-center items-center gap-8 mt-8 p-7">
        <ReviewCards review={product.reviews} />
        <ReviewForm product={product} />
      </div>
    </section>
  );
};

export default ProductDetails;
