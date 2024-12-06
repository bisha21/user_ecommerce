import { Carousel } from "react-responsive-carousel";
import cetaphil from "../../images/cetaphil.avif";
import jacket from "../../images/jacket.png";
import tv from "../../images/samsung-tv.png";
import CarpuselItem from "./CarpuselItem";
import { useSelector } from "react-redux";
import Feature from "./Features";
import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { BiCreditCard } from "react-icons/bi";

function Hero() {
    const {products}=useSelector((state)=>state.products);


    return (
        <div className="-z-50">
            <Carousel
            autoPlay
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            infiniteLoop={true}
            className="bg-teal-600"
        >
            <CarpuselItem label="SAMSUNG QLED" imageSrc={tv}/>
            <CarpuselItem label="LEVIS JACKET" imageSrc={jacket}/>
            <CarpuselItem label="CETAPHIL MOISTURIZER" imageSrc={cetaphil}/>

        </Carousel>
        
        <div className="absolute -bottom-10 left-[15%] z-10 xl:flex justify-center hidden">
        <Feature label="Free Shipping" icon={<FaShippingFast />} />
        <Feature label="Easy Return" icon={<TbTruckReturn />} />
        <Feature label="Card Payment" icon={<BiCreditCard />} />
      </div>
        
        </div>
    );
}

export default Hero;
