import { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props)=>{
    const [ cartItems , setCartItems ] = useState([])

    const addToCart =(itemId)=>{
        if(!cartItems?.find((item)=>itemId === item.id))
           return setCartItems([...cartItems, {id : itemId , count : 1}])
        else
        setCartItems(cartItems.map((item)=>{
          if(itemId === item.id)
          return {...item , count : item.count + 1}
          else
          return item 
    }))

    }

    const removeFromCart =(itemId)=>{
        setCartItems(cartItems.map((i)=>{
            if(i.id === itemId)
            return {...i , count : i.count === 0 ? 0 :i.count - 1}
            else return i
        }))

    }

    const contextValue = { cartItems, addToCart, removeFromCart}

    return <ShopContext.Provider value={contextValue}>{props.childran}</ShopContext.Provider>

}