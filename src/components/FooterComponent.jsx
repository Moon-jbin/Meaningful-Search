import styled from "styled-components";

const FooterComponent = () => {
  return (
    <>
      <Footer>
        <CopyRight>2021 Moon JongBin - All rights reserved</CopyRight>
        <Span>본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로 제작되었습니다.</Span>
      </Footer>
    </>
  );
};

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


export default FooterComponent;