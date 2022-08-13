import React from 'react';
// Styled-component
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500
`

const Announcement =() => {
    return (
      <Container>
          Super Detail Free Shiping on Orders Ove %50
      </Container>
    );
  }
  
  export default Announcement;