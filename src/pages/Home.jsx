import React from 'react'
import Navbar from '../features/navbar/navbar'
import { ProductList } from '../features/product-list/counter/ProductList'

const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    </div>
  )
}

export default Home