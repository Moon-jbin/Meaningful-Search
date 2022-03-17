import React from 'react';
import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";
import styled from "styled-components";

const MainComponent = () => {
  return (
    <>
      <HeaderComponent/>
      <Main>
        <Form>
         <Input/>
         <Button>검색</Button>
        </Form>
      </Main>
      <FooterComponent/>
    </>
  );
};


const Main = styled.div`
  width: 100%;

` 
const Form = styled.form`
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  border: 1px solid #ccc;
  border-right: none;
  outline: none;
  height: 50px;
  flex: 1;
  max-width: 500px;
  padding: 15px;
  font-size: 17px;
`
const Button = styled.button`
border: 1px solid #ccc;
border-left: 0;
background: #fff;
padding: 15px;
`;


export default MainComponent;