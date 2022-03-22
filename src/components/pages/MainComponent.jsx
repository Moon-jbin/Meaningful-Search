import styled from "styled-components";
import { buttonList } from "../../datas";
import { Link } from "react-router-dom";

const MainComponent = () => {

  const button = buttonList.map((item)=>{return(
    <Link to={item.id} key={item.id}>
      <Button>{item.name}</Button>
    </Link>
  )})

  return (
    <>
      <Wrapper>
        <Header>
          <Title>Meaningful Search</Title>
        </Header>
        <Main>
          <ButtonWrap>
            {button}
          </ButtonWrap>
        </Main>
        <Footer>
        <CopyRight>2021 Moon JongBin - All rights reserved</CopyRight>
        <Span>본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로 제작되었습니다.</Span>
      </Footer>
      </Wrapper> 
    </>
  );
};

const Wrapper = styled.div``;
// Header 시작
const Header = styled.header`
  width: 100%;
`
const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 50px;
  color: #ccc;
  font-family: "Poiret One";
  font-weight: 600;
  margin: 30px auto;

`
// Header 끝

// Main 시작
const Main = styled.main`
  width: 100%;
`;
const ButtonWrap = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 24px;
  box-shadow: 3px 3px 5px #ccc;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Button = styled.button`
  display: block;
  margin: 20px auto;
  width: 60%;
  height: 50px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-weight: 600;
  font-size: 12px;
  transition: all .3s;
  &:hover {
    background: #000;
    color: #fff;
  }
`;


// Main 끝

//Footer 시작
const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform:  translateX(-50%);
`;
const CopyRight = styled.p`
  font-size: 10px;
  text-align: center;
`;

const Span = styled.span`
  font-size: 10px;
`;

//Footer 끝






export default MainComponent;