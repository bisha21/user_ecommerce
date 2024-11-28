import { useEffect, useState } from 'react';
import { getProducts } from '../../api/products';
import Tittle from '../Tittle'; 
import Card from './Card';

export default function CategorizedProduct({ category, className }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts({ limit: 5, filters: { category } })
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]);

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="m-4">
                <Tittle
                    label={category}
                    className={`border-l-4 border-l-teal-950 px-2 capitalize ${className}`}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-3">
                {products.map((product) => (
                    <Card key={product._id} id={product._id} {...product} />
                ))}
            </div>
        </div>
    );
}
