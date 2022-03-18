import { useParams } from "react-router-dom";
import styled from "styled-components";
import InputComponent from "../organisms/InputComponent";
const SearchResultComponent = () => {
  const {someInfo} = useParams();  // 검색한 데이터 값
  


  return (
    <>
    <Wrapper>
      <Header>
        <Content>
          <LogoWrap>
            <Logo></Logo> 
          </LogoWrap>
          <InputWrap>
            <InputComponent search={someInfo} />
          </InputWrap>
        </Content>
      </Header>
      <Main></Main>

      {/* 푸터는 페이지네이션으로 처리하기 */}
      <Footer></Footer>
      
    </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width:100%;
`;

//Header 시작
const Header = styled.header`
  width:100%;
`;
const Content = styled.div``;
const LogoWrap = styled.div``;
const Logo = styled.h1``;
const InputWrap = styled.div`
  display: flex;
`;
// header 끝
const Main = styled.main``;
const Footer = styled.footer``;

export default SearchResultComponent;