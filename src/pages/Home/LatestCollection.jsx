import { useEffect, useState } from "react";
import { useCart } from "../../hooks/cart";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const LatestCollection = () => {
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

  return (
    <div className="container mx-auto my-8 py-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Discover Our Latest Watches</h1>
        <p className="text-lg text-gray-600 mb-4">Timeless elegance and cutting-edge design await you</p>
        <p className="text-md text-gray-500">Explore our newest collection and find the perfect timepiece to suit your style.</p>
      </div>

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
                  Color: {product.strapColor}
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
                  Add to Cart
                </button>
                <Link to={`/product-details/${product.slug}`} className="text-gray-500 font-bold hover:text-gray-800">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
