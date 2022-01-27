import React from 'react';
import { products } from '../../data';
import Product from '../productCard/Product';
import { Row,Col,Container } from 'react-bootstrap';
export default function ProductList(props) {
  return (
  <div>
      <h1>Products</h1>
      <Container >

             <Row >

                    {products.map((product,index) =>(
                        <Col key = {index} sm={12} md={6} lg={4} xl={3}>
                            {/* {((product.category===props.category) && <Product key = {index} product={product}/>)} */}
                        
                            <Product key = {index} product={product}/>
                        </Col>
                    ))}
                    
            </Row>

      </Container>
  </div>
  );
}


