import React from 'react';
import { useState, useEffect } from "react";
import JsonData from "../../data/data.json";
import { products } from '../../data';
import Product from '../productCard/Product';
import { Row,Col,Container } from 'react-bootstrap';
import { Navigation } from "../navigation";
import { Header } from "../header";
export default function ProductList(props) {
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
  <div>
       <Navigation />
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


