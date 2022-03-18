import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";
import styled from "styled-components";
import SearchResultComponent from './SearchResultComponent';
import InputComponent from '../organisms/InputComponent';
const MainComponent = () => {
  

  return (
    <Wrapper>
      <HeaderComponent/>
      <Main>
        <Form>
          <InputComponent/>
        </Form>
      </Main>
      <FooterComponent/>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  width:100%;
`


const Main = styled.div`
  width: 100%;

` 
const Form = styled.form`
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
`;



export default MainComponent;