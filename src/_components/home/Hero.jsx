import { Carousel } from 'react-responsive-carousel';
import woman from '../../images/banner1.jpg';
import kids from '../../images/banner4.jpg';
import CarpuselItem from './CarpuselItem';
import { useSelector } from 'react-redux';
import Feature from './Features';
import { FaShippingFast } from 'react-icons/fa';
import { TbTruckReturn } from 'react-icons/tb';
import { BiCreditCard } from 'react-icons/bi';
import man from '../../images/banner3.jpg';

function Hero() {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="w-[100vw] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] mx-auto">
      <Carousel
        autoPlay
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        className="bg-[#1a202c]"
      >
        <CarpuselItem imageSrc={man} />
        <CarpuselItem imageSrc={woman} />
        <CarpuselItem imageSrc={kids} />
      </Carousel>

      <div className="absolute bottom-20 left-[15%] z-10 xl:flex justify-center hidden md:mb-[30px]">
        <Feature label="Free Shipping" icon={<FaShippingFast />} />
        <Feature label="Easy Return" icon={<TbTruckReturn />} />
        <Feature label="Card Payment" icon={<BiCreditCard />} />
      </div>
    </div>
  );
}

export default Hero;
