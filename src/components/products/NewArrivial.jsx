import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api/products';
import ArrivalCard from './ArrivalCard';
import { Carousel } from 'react-responsive-carousel';

const NewArrival = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await getProducts({ limit: 12, sort: JSON.stringify({ createdAt: -1 }) });
                setProducts(response.data);
                console.log("Fetched products:", response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Carousel
            autoPlay
            showThumbs={false}
            infiniteLoop={true}
            swipeable={true}
            // dynamicHeight={true}
            interval={5000}
            centerMode={false}
            // width={"40%"}
            className='flex justify-start items-center mt-[-50px] ml-32 w-[70vw]'
        >
            {/* Wrap each row of products in a div */}
            {Array.from({ length: Math.ceil(products.length / 4) }).map((_, index) => (
                <div key={index} className="flex gap-4  justify-center">
                    {products.slice(index * 4, index * 4 + 4).map((product) => (
                        <ArrivalCard key={product.id} product={product} />
                    ))}
                </div>
            ))}
        </Carousel>
    );
}

export default NewArrival;
