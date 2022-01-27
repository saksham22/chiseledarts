import React, { useEffect } from 'react'
import './cardStyles.css'
import {Card,Button} from 'react-bootstrap'


export default function Product(props) { 
    return (
        <div className='card'> 
            <Card >
  <Card.Img variant="top" src={props.product.imageURL} />
  <Card.Body>
    <Card.Title>{props.product.Name}</Card.Title>
    <Button variant="primary">View Details</Button>
  </Card.Body>
</Card>
        </div>
    )
}
