import React, { useState } from 'react'
import SingleProduct from './SingleProduct';
const { faker } = require('@faker-js/faker');


const Home = ({cart, setCart}) => {

    faker.seed(100)
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