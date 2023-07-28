import React from 'react'
import {Card} from 'react-bootstrap'
import Ratting from './Ratting'
import { Link } from 'react-router-dom'
// import ts from "../../images/tshirt/ts_2.1.jpg"
function Product(product) {
  return (
    <>
       
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.product.id}`}>
        <Card.Img src={product.product.image} alt={product.product.image}/>
       
      </Link>
      <Card.Body>
      <Link className='link-dark' to={`/product/${product.product.id}`}>
        <Card.Title as='div'>
          <strong>{product.product.name}</strong>
        </Card.Title>
       
      </Link>
      <Card.Text as='div'>
          <div className="my-3">
          <Ratting value={product.product.rating}/>
            {product.product.rating} from {product.product.numberReviews} reviews
            
            
          </div>
      </Card.Text>
      <Card.Text>
      ₹{product.product.price}
      </Card.Text>

      </Card.Body>
      
    </Card>
    </>
  )
}

export default Product