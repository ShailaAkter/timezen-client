import { Link } from "react-router-dom";
import ContainerBox from "../../components/containers/ContainerBox"
import { useSearch } from "../../hooks/searchAuth"
import {useCart} from "../../hooks/cart"


const Search = () => 
{
    const [values, setValues] = useSearch();
    const [cart, setCart, { quantities, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }] = useCart();
    
  return (
    <ContainerBox title= "TIMEZEN - Searched Results">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div>
              <h1>Search Results</h1>
              <h6>{values?.searchedProducts.length <1? "No products found" : `Found ${values.searchedProducts.length}` }</h6>
          </div>
        </div>
        <div className="col-span-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.searchedProducts?.map(product => (
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
      </div>
    </ContainerBox>
  )
}

export default Search