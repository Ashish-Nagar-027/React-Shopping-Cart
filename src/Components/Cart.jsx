import React from 'react'
import SingleProduct from './SingleProduct'
const Cart = ({cart, setCart}) => {
  return (
    <div>
        <h1>cart</h1>
        <span style={{fontSize: 30}}>My Cart</span>
        <br />
        <span style={{ fontSize: 30 }}>Total: Rs.100</span>
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