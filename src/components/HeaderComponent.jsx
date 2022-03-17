import styled from "styled-components";

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Title>Meaningful Search</Title>
      </Header>
    </>
  );
};

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
  margin: 350px auto 0 auto;
  transform:  translateY(-50%);

`

export default HeaderComponent;