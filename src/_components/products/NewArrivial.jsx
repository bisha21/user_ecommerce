import { useEffect, useState } from 'react';
import { getProducts } from '../../api/products';
import ArrivalCard from './ArrivalCard';
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await getProducts({
          limit: 12,
          sort: JSON.stringify({ createdAt: -1 }),
        });
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Carousel
      className="w-full max-w-6xl mx-auto bg-teal-100"
      opts={{ loop: true }}
    plugins={[
        Autoplay({ delay: 3000, stopOnInteraction: false })
      ]}
      value={currentSlide}
      onValueChange={setCurrentSlide}
      
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index} className="px-2 basis-1/2 md:basis-1/3 lg:basis-1/5 overflow-hidden">
            <div className="p-2">
              <ArrivalCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default NewArrival;
