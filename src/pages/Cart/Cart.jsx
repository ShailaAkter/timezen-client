import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart"
import { useEffect, useState } from "react";

const Cart = () => 
{
  const [cart, setCart, { quantities,  removeFromCart, increaseQuantity, decreaseQuantity, totalPrice }] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  


  return (
    <div className="flex flex-col">
      <h1>{`${auth?.token && auth?.user?.firstname? 
      `you have ${cart.length} item in your cart`
      :
      "login to checkout"
      
      }`}</h1>
      <div className="flex flex-col">
        <div className="flex-grow overflow-y-auto max-h-[500px]">
          {
            cart?.map(item => (
              <div key={item._id} className="flex justify-between items-center">
                <div className="flex justify-start items-center">
                  <img
                  className="w-20 h-20 m-2"
                  src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${item._id}`}
                  alt="Card"
                  />
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span>{item.model}</span>
                    <div className="">
                      <button onClick={() => increaseQuantity(item._id)}>+</button>
                      <span>{quantities[item._id]}</span>
                      <button onClick={() => decreaseQuantity(item._id)}>-</button>
                    </div>
                  </div>
                </div>

                <div>
                  <button onClick={() => removeFromCart(item._id)}>delete</button>
                  {quantities[item._id]*item.price}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex absolute bottom-0">
        <h1>prcoeed to payment | checkout {totalPrice}</h1>
      </div>

    </div>
  )
}

export default Cart