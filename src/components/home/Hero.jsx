import { Carousel } from "react-responsive-carousel";
import man from "../../images/coat.avif";
import woman from "../../images/Arnakali.jpeg"
import kids from "../../images/kids.jpg"
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
            className="bg-[#1a202c]"
        >
            <CarpuselItem label="Vouge Man Shirt" imageSrc={man} 
            
            />
            <CarpuselItem label="Woman formal Dress" imageSrc={woman}/>
            <CarpuselItem label="Children Princess Dress" imageSrc={kids}/>

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
