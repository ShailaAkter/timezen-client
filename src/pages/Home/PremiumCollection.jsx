import { useEffect, useState } from "react";
import { useCart } from "../../hooks/cart";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const PremiumCollection = () => 
{
    const [products, setProducts] = useState([]);
  const [cart, setCart, { quantities, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }] = useCart();

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-products`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching all products!");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Sort products by price in descending order and get the top 3 most expensive
  const topProducts = products
    .sort((a, b) => b.price - a.price)
    .slice(0, 3);

  return (
    <div className="container mx-auto my-8 py-20">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Exclusive Premium Collection</h1>
        <p className="text-xl text-gray-700 mb-4">Elevate your style with our most luxurious timepieces</p>
        <p className="text-md text-gray-600">Discover the epitome of elegance and craftsmanship in our latest premium collection.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topProducts.map(product => (
          <div key={product._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 border border-gray-300">
            <img
              className="w-full h-48 object-cover"
              src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
              alt={product.name}
            />
            <div className="p-6">
              <div className="font-bold text-2xl text-gray-900 mb-2">{product.name}</div>
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
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Add to Cart
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
  )
}

export default PremiumCollection