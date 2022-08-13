import React from 'react';
import styled from "styled-components";
//ICON 
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color:#fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({ fontSize: "60px" })}
`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
    width: 50%;
    display: flex;
    background-color: white;
    justify-content: space-between;
    border: 1px solid lightgray;
    background-color: red;
    height: 40px;
    ${mobile({width: "80%", margin: "auto 0"})}
`;

const Input = styled.input`
    borde: none;
    flex: 8;
    padding-left: 10px;
    font-size: 17px;
`;

const Button = styled.div`
    flex: 1;
    justify-content: center;
    border: none;
    background-color: teal;
    text-align: center;
    padding-top: 5px;
    ${mobile({flex: "1.5"})}
`;


const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorites products.</Desc>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <SendIcon style={{color:"white", verticalAlign: "middle"}}/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter