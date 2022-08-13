import React from 'react';
// Styled-component
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px
`;

const Logo = styled.h1`
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer
`;




const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px
`



const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 15px
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>IVAN.</Logo>
            <Desc>
                There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.</Desc>
          <SocialContainer>
            <SocialIcon color="385999" >
                <i class="fa-brands fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon color="e4405f">
                <i class="fa-brands fa-instagram"></i>
            </SocialIcon>
            <SocialIcon color="55acee">
                <i class="fa-brands fa-twitter"></i>
            </SocialIcon>
            <SocialIcon color="e60023">
                <i class="fa-brands fa-pinterest-p"></i>
            </SocialIcon>
          </SocialContainer>
        </Left>


        <Center>
            <Title>Components</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishtlist</ListItem>
                <ListItem>Terms</ListItem>
                </List>
        </Center>


        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <i style={{marginRight:"10px"}} class="fa-solid fa-location-dot"></i>
                622 Dixies Path , South Tobincheseter 98336
            </ContactItem>
            <ContactItem>
                <i style={{marginRight:"10px"}}  class="fa-solid fa-phone"></i>
                +51 987 654 983
            </ContactItem>
            <ContactItem>
                <i style={{marginRight:"10px"}}  class="fa-solid fa-envelope"></i>
                Contact@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co//Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer