import React, { useState } from 'react'
import { CartApi } from '../Context' 
import { useContext } from 'react';
import SingleProduct from './SingleProduct';
const { faker } = require('@faker-js/faker');


const Home = () => {

  faker.seed(100)
  
  const {cart, setCart} = useContext(CartApi)

  const productsArray = [...Array(21)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image()
  }))

  const [products] = useState(productsArray)

  return (
    <div className='productContainer'>
        {products.map(product => (
          <SingleProduct product={product} cart={cart} setCart={setCart} key={product.id} />
        ))}
    </div>
  )
}

export default Home