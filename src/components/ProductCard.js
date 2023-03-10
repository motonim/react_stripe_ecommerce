import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'

const ProductCard = (props) => {
  // props.product is the product we are selling

  //   console.log(props)
  const product = props.product

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant='primary'>Add To Card</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
