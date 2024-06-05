import { useState } from "react";
import ContainerBox from "../../components/containers/ContainerBox"
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../components/FilterData/Prices";
import {useCart} from "../../hooks/cart"

const Shop = () => 
{
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [checkedPrices, setCheckedPrices] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const [cart, setCart, { quantities, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }] = useCart();

  //get all brands
  const getAllBrands = async () =>
  {
    try
    {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/brand/all-brands`);
      if(data?.success)
      {
          setBrands(data.brands);
      }
    }
    catch(error)
    {
      console.log(error);
      toast.error("Something went wrong while getting Brand")
    }
  }

    //get all products
  const getAllProducts = async() =>
  {
    try
    {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-products`);
      setProducts(data.products);
    }
    catch(error)
    {
      console.log(error);
      toast.error("Something went wrong while fetching all products!");
    }
  } 

  //filter by brands
  const handleFilter = (value, id) =>
  {
    let checkedProducts = [...checkedBrands];
    if(value)
    {
      checkedProducts.push(id);
    }
    else
    {
      checkedProducts = checkedProducts.filter((item) => item !== id);
    }
    setCheckedBrands(checkedProducts);
  }


  //get filtered product
  const getFilteredProducts = async() =>
  {
    try
    {
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/product/filter-products`, {checkedBrands, checkedPrices});
      setProducts(data?.products);
      console.log(checkedBrands, data)
    }
    catch(error)
    {
      console.log(error);
      toast.error("Something went wrong while fetching filtered products!");
    }
  }

  //get total prductsCount 
  const totalProductsCount = async () =>
  {
    try
    {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/total-products`);
      setTotalProducts(data?.total);

    }
    catch(error)
    {
      console.log(error)
    }
  }

  useEffect(() =>
  {
    getAllBrands();
    totalProductsCount();
  }, [])
  

  useEffect(()=>
  {
    if(!checkedBrands.length && !checkedPrices.length)
    {
      getAllProducts();
    }
  },[checkedBrands.length, checkedPrices.length])

  
  useEffect(()=>
  {
    if(checkedBrands.length || checkedPrices.length)
    {
      getFilteredProducts();
    }
  },[checkedBrands, checkedPrices])


  return (
    <ContainerBox title= "TIMEZEN - Shop Your Desired Watch">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <h6>Filter</h6>
          <h1>Brand</h1>
          <div className="flex flex-col">
            {brands?.map(brand => 
              (<Checkbox 
                key={brand._id} 
                onChange={(e) => handleFilter(e.target.checked, brand._id)}>
                {brand.name}
              </Checkbox>)
            )}
          </div>

          <h1>Price</h1>
          <div className="flex flex-col">
            <Radio.Group onChange={(e) => setCheckedPrices(e.target.value)}>
              {Prices?.map(item => 
                (<div key={item._id}>
                  <Radio value={item.array}>
                    {item.starRange} to {item.endRange}
                  </Radio>
                </div>)
              )}
            </Radio.Group>
          </div>

          <div className="flex flex-col">
            <button 
            onClick={() => window.location.reload()}
            className="text-left">Reset button</button>
          </div>

        </div>
        <div className="col-span-9">

          <div className="flex flex-wrap">
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

        </div>
      </div>
    </ContainerBox>
  )
}

export default Shop