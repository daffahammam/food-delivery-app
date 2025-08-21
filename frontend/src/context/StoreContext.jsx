import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
   

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
           setCartItems((prev)=> ({
                ...prev,
                [itemId]: 1, // Initialize with quantity 1
           }));
        } else {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] + 1, // Increment quantity
            }));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }));
    }

    // Initialize cartItems with food_list items
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };
        

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
