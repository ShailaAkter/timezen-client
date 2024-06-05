import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({children}) =>
{
    const [cart, setCart] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);


     // Load cart and quantities from local storage on mount
    useEffect(() => 
    {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const savedTotalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;

        setCart(savedCart);
        setTotalPrice(savedTotalPrice);


        const initialQuantities = savedCart.reduce((quantity, item) => 
        {
            quantity[item._id] = 1;
            return quantity;
        }, {});
        setQuantities(initialQuantities);
    }, []);

  // Save cart to local storage whenever it changes
    useEffect(() => 
    {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    }, [cart, totalPrice]);

    const addToCart = (item) => 
    {
        setCart((prevCart) => 
        {
            const itemInCart = prevCart.find((cartItem) => cartItem._id === item._id);
            if (itemInCart) 
            {
              // If item is already in cart, increase its quantity
                setQuantities((prevQuantities) => ({
                    ...prevQuantities,
                    [item._id]: (prevQuantities[item._id] || 1) + 1,
                }));
                setTotalPrice((prevTotal) => prevTotal + item.price);
                toast.success(`${item.name} quantity increased in cart`);
                return prevCart;
            } 
            else 
            {
                // If item is not in cart, add it to cart and set its quantity to 1
                setQuantities((prevQuantities) => ({
                    ...prevQuantities,
                    [item._id]: 1,
                }));
                setTotalPrice((prevTotal) => prevTotal + item.price);
                toast.success(`${item.name} added to cart`);
                return [...prevCart, item];
            }
          });
    };

    const removeFromCart = (itemId) => 
    {
        setCart((prevCart) => 
        {
            const itemToRemove = prevCart.find((item) => item._id === itemId);
            const updatedCart = prevCart.filter((item) => item._id !== itemId);
            if (itemToRemove) 
            {
                setTotalPrice((prevTotal) => prevTotal - itemToRemove.price * quantities[itemId]);
            }
            return updatedCart;
        });
            setQuantities((prevQuantities) => 
            {
                const { [itemId]: _, ...rest } = prevQuantities;
                return rest;
            });
    };

    const increaseQuantity = (itemId) => 
    {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: (prevQuantities[itemId] || 1) + 1,
        }));

        const item = cart.find((item) => item._id === itemId);
        if (item) 
        {
            setTotalPrice((prevTotal) => prevTotal + item.price);
        }
    };

    const decreaseQuantity = (itemId) => 
    {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: prevQuantities[itemId] > 1 ? prevQuantities[itemId] - 1 : 1,
        }));

        const item = cart.find((item) => item._id === itemId);
        if (item && quantities[itemId] > 1) 
        {
            setTotalPrice((prevTotal) => prevTotal - item.price);
        }
    };

    return (
        <CartContext.Provider value={[
            cart,
            setCart,
            {
              quantities,
              addToCart,
              totalPrice,
              removeFromCart,
              increaseQuantity,
              decreaseQuantity,
            },
          ]}>
            {children}
        </CartContext.Provider>
    )
}

//custom hook
export {CartProvider}