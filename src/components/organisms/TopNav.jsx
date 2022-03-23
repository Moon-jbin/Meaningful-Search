import styled from "styled-components";
import { navData } from "../../datas";
import { Link, useLocation } from "react-router-dom";

const TopNav = () => {
  const {pathname} = useLocation();
  if(pathname==="/"){
    return <></>;
  }


  const navList = navData.map((item)=>{
    return(
      <Link to={item.root} key={item.root} >
        <Button isActive={ item.root=== pathname} >{item.name}</Button>
      </Link>
    )
  })

  return (
    <>
      <Container>
        <Nav>{navList}</Nav>
      </Container>
    </>
  );
};


const Container = styled.header`
  text-align: center;
  width: 100%;
`;
const Nav = styled.nav`
  width: 100%;
`;
const Button = styled.button`
padding: 10px 10px;
background: ${({isActive})=> isActive? "#000" : "#fff"};
color: ${({isActive})=>isActive && "#fff"};
cursor: pointer;
border-bottom: 1px solid #ccc;
margin: 0 5px 0 0;
`;

export default TopNav;