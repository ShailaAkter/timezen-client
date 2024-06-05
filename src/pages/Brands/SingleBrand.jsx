import { useState } from "react"
import ContainerBox from "../../components/containers/ContainerBox"
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../../hooks/cart";


const SingleBrand = () => 
{
    const [products, setProducts] = useState([]);
    const [brand, setBrand] = useState([]);
    const [cart, setCart, { quantities, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }] = useCart();

    const params = useParams();

    //get product by brand
    const getProductByBrand = async() =>
    {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/product-brand/${params.slug}`);

        setProducts(data?.products);
        setBrand(data?.brand)
    }

    useEffect(() =>
    {
        if(params.slug) getProductByBrand();
    },[params?.slug])

  return (
    <ContainerBox title= "TIMEZEN - Watch Brand">
        <h1>{products?.length}</h1>
        <div className="flex flex-wrap">
            products
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.map(product => (
          <div key={product._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full h-48 object-cover"
              src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
              alt={product.name}
            />
            <div className="p-6">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base mb-4">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  Quantity: {product.quantity}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  ${product.price}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded"
                >
                  <Link to="/shop">Add to Cart</Link>
                </button>
                <Link to={`/product-details/${product.slug}`} className="text-gray-700 font-bold hover:text-gray-900">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
          </div>
          </div>
    </ContainerBox>
  )
}

export default SingleBrand