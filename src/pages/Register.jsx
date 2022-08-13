import React from 'react';
// Styled-component
import styled from "styled-components";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
        center ;
    nackground-sze: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background: white
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    padding: 10px;
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0 0 ;
    p
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 14px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #009090
    }
`

const Register = () => {
  return (
    <Container style={{}}>
        <Wrapper>
            <Title>Crea una Cuenta</Title>
            <Form>
                <Input placeholder="Nombre"/>
                <Input placeholder="Apellido"/>
                <Input placeholder="Usuario"/>
                <Input placeholder="email"/>
                <Input placeholder="contraseña"/>
                <Input placeholder="confirmar contraseña"/>
                <Agreement>Al crear una cuenta, doy mi consentimiento para el procesamiento de mis datos personales de acuerdo con la <b>política de privacidad</b></Agreement>
                <Button>Crear Cuenta</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register