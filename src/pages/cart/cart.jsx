import React, { useContext } from 'react';
import { PRODUCTS } from '../../data/products';
import { ShopContext } from '../../context/shopContext';
import Product from "../shop/product";

const Cart = () =>{
    const {cartItem} = useContext(ShopContext)
    return (
        <React.Fragment>
        <h1>Your Cart Items </h1>
        <div className='row'>
            {PRODUCTS.map((p)=>{
                if(cartItem.some((item)=> item.id === p.id && item.count >0))
                return <Product data={p}/>
            })}
        </div>
        </React.Fragment>
    )
}
export default Cart;