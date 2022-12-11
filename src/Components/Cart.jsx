import React, { useContext, useEffect } from 'react'
import SingleProduct from './SingleProduct'
import { CartApi } from '../Context'
import { useState } from 'react'

const Cart = () => {
  const {cart, setCart} = useContext(CartApi)

  let [totalPrice,setTotalPrice] = useState(0)

    useEffect(() => {
      setTotalPrice(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [cart]);
 
  return (

    <div>
        <h1>cart</h1>
        <span style={{fontSize: 30}}>My Cart</span>
        <br />
        <span style={{ fontSize: 30 }}>Total:{totalPrice}</span>
        <div className='productContainer'>
          {
            cart.map((product) => (
              <SingleProduct product={product} key={product.id} cart={cart} setCart={setCart}  />
            ))
          }
        </div>
    </div>
  )
}

export default Cart