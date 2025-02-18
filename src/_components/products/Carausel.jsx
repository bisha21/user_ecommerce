import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = ({ content=[], renderItem }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log("content: ", content)

  return (
    <Carousel
      className="w-full max-w-6xl mx-auto bg-teal-100"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
      value={currentSlide}
      onValueChange={setCurrentSlide}
    >
      <CarouselContent>
        {content.map((item, index) => (
          <CarouselItem key={index} className="px-2 basis-1/2 md:basis-1/3 lg:basis-1/5 overflow-hidden">
            <div className="p-2">{renderItem(item)}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
