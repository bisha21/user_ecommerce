import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { FaStar } from 'react-icons/fa';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const ReviewCards = ({ reviews }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-3xl mx-auto mt-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index}>
            <div className="p-4">
              <Card className="rounded-xl shadow-lg">
                <CardContent className="p-6">
                  {/* Name */}
                  <p className="text-xl font-semibold text-gray-800 mb-2">
                    {review?.user?.name || 'Anonymous'}
                  </p>

                  {/* Review */}
                  <p className="text-base text-gray-700 mb-4">
                    {review.review}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={20}
                        className={
                          i < review.rating
                            ? 'text-yellow-500'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ReviewCards;
