import React from 'react'

const SingleProduct = ({product, cart, setCart}) => {
  return (
    <div className='products'>
        <img src={product.image} alt={product.name} className="product-image" />
        <div className='productDetails'>
            <span>{product.name}</span>
            <span>{product.price.substring(0, 3)}</span>
        </div>
        {
            cart.includes(product) ? 
            <button className='add' style={{margin:5}} onClick={()=> setCart(cart.filter(c => c.id !== product.id))}>Remove from Cart</button>
            : <button className='add' style={{margin:5}} onClick={()=> setCart([...cart,product])}>Add To Cart</button>
        }
        
    </div>
  )
}

export default SingleProduct