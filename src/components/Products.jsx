import React from 'react';
import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from './Product';


import {Link} from "react-router-dom"
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Link to="/product">
          <Product item={item} key={item.id} />
        </Link>
      ))}
    </Container>
  )
}

export default Products