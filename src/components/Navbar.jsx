import React from 'react';
// Styled-component
import styled from "styled-components";
// MAterial IU Component
import { Badge } from "@mui/material";
// Icon Material UI
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


// react-router-dom
import {Link} from "react-router-dom"

import {mobile} from "../responsive";

import "../App.css";


const Navbar = () => {

    const Container = styled.div`
    height: 60px;
    overflow-Y: hidden;
   
    ${mobile({ backgroundColor: "", backgroundColor: "red" })}
    }
    `
    const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding: "10px 0"})}
    `

    const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    `

    const Lenguaje = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
    `

    const SearchCointer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    `
    
    const Input = styled.input`
    border:none;
    ${mobile({ width: "50px" })}
    `


    const Center = styled.div`
    flex: 1;
    text-align: center;
    `

    const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
    `

    const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
    `
    const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    `


  return (
    <Container>
        <Wrapper>
            <Left>
                <Lenguaje>En</Lenguaje>
                <SearchCointer>
                    <Input placeholder="Buscar" />
                    <i class="fa-solid fa-magnifying-glass" id="search"></i>
                </SearchCointer>
            </Left>
            <Center>
                <Logo>
                    <Link className='link' to="/">IVAN</Link>
                </Logo>
            </Center>
            <Right>
            <MenuItem>
                <Link className='link' to="/register">REGISTER</Link>
            </MenuItem>
            <MenuItem>
                <Link className='link' to="/login">LOG-IN</Link>
            </MenuItem>
            <Badge badgeContent={4} color="secondary" style={{marginLeft: "12px"}}>
                <Link to="/cart">
                    <ShoppingCartOutlinedIcon color="action" style={{color: "black"}}/>
                </Link>
            </Badge>
           

            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar