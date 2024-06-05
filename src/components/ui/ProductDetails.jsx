import { useState, useEffect } from "react";
import ContainerBox from "../containers/ContainerBox";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../hooks/cart";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [cart, setCart, { quantities, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }] = useCart();

  // Get similar products
  const getSimilarProducts = async (productId, brandId) => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/similar-products/${productId}/${brandId}`);
      setSimilarProducts(data?.products);
    } catch (error) {
      console.error(error);
    }
  };

  // Get single product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-product/${params.slug}`);
      setProduct(data.product);
      getSimilarProducts(data?.product._id, data?.product.brand._id);
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while getting product");
    }
  };

  useEffect(() => {
    getProduct();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ContainerBox title="TIMEZEN - Product Details">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold text-slate-700 mb-10">Product Details</h2>

        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <img
              className="rounded-lg"
              src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
              alt="watch photo"
              width={200}
              height={200}
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {Object.entries({
              Brand: product.brand?.name,
              Name: product.name,
              Price: `$${product.price}`,
              Model: product.model,
              Description: product.description,
              "Case Size": product.caseSize,
              Dial: product.dial,
              "Dial Color": product.dialColor,
              "Glass Material": product.glassMaterial,
              Movement: product.movement,
              "Strap Color": product.strapColor,
              "Strap Material": product.strapMaterial,
              "Water Resistance": product.waterResistance,
              Quantity: product.quantity,
              "Shipping Address": product.shippingAddress ? "Yes" : "No",
            }).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b pb-2">
                <span className="font-semibold text-slate-700">{key}:</span>
                <span className="text-slate-600">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto my-8 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Similar Products</h1>
            <p className="text-lg text-gray-700 mb-4">Discover products that match your interests</p>
          </div>

          {similarProducts.length < 1 ? (
            <p className="text-center text-gray-600">No Similar product found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProducts.map(product => (
                <div key={product._id} className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
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
          )}
        </div>
      </div>
    </ContainerBox>
  );
};

export default ProductDetails;
