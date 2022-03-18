import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const InputComponent = ({search}) => {
  const [text, setText] = useState(search);


  return (
    <>
       <Input onChange={(e)=> setText(e.target.value)} value={text || ""}/>
       <Link to={`/SearchResult/${text}`}><Button>검색</Button></Link>
    </>
  );
};


const Input = styled.input`
  border: 1px solid #ccc;
  border-right: none;
  outline: none;
  height: 50px;
  flex: 1;
  max-width: 500px;
  min-width: 100px;
  padding: 15px;
  font-size: 17px;
`
const Button = styled.button`
border: 1px solid #ccc;
border-left: 0;
background: #fff;
padding: 15px;
`;



export default InputComponent;