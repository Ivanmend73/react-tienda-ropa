import React, { useState } from 'react';
// Styled-component
import styled from "styled-components";
// DATA
import { sliderItems } from '../Data';
import { mobile } from "../responsive";

import {Link} from "react-router-dom";
//Components stled

const Container = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100vh;
    dispay: flex;
    positin: relative;
    ${mobile({ display: "" })}
    
`
const Arrow = styled.div`
    width: 50px;
    background-color: #fff7f7;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw)
`

const Slide = styled.div`
    width: 7000px;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg}
`
const ImgContainer = styled.div`
    height: 100% ;
    flex:1 
`

const Image = styled.img`
    margin-top: 25px;
    height: 80%;
    margin-left: 117px
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    margin-left: 60px
`
const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    width: 600px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };

  return (
    <Container>
        <Arrow irection="left" onClick={() => handleClick("left")}>
            <i  class="fa-solid fa-caret-left"></i>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>

            {sliderItems.map((item)=> (   
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>
                            {item.desc}
                        </Desc>
                        <Button>
                            <Link className='link' to="/productlist">SHOW NOW</Link>
                        </Button>
                    </InfoContainer>
                </Slide>
                
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <i class="fa-solid fa-caret-right"></i>
        </Arrow>

    </Container>
  )
}

export default Slider