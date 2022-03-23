import { useState } from "react";
import styled from "styled-components";
import BookListComponent from "../organisms/BookListComponent";

const BookComponent = () => {
  const [text, setText] = useState("");
  const [bookList, SetBookList] = useState([]);


  const onSubmitFn = () => {

  }
  return (
    <>
      <Wrapper>
        <Header>
          <Title>Book</Title>
          <Form onSubmit={onSubmitFn}>
            {/* <Select onChange={(e)=>setCountry(e.target.value)} >
              <option value="ALL">전체</option>
              {countryData.map((item)=>{
                return (
                  <option key={item.id} value={item.id}>{item.name}</option>
                )
              })}
            </Select>
            <Select onChange={(e)=>setGenre(e.target.value)}>
              <option value="ALL">전체</option>
              {genreData.map((item)=>{
                return(
                  <option key={item.id} value={item.id}>{item.name}</option>
                )
              })}
            </Select> */}
             <InputText placeholder="Search" onChange={(e)=>setText(e.target.value)} value={text}/>
             <Button>검색</Button>
          </Form>
        </Header>
        <Main>
          <BookListComponent data={bookList}/>
        </Main>
        
      </Wrapper>
    </>
  );
};


const Wrapper = styled.div`
  width:100%;
`;
const Header = styled.header`
  width: 100%;
  border-bottom: 1px double #999;
`;
const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin: 20px auto;
  color: #000;
  font-family: "Poiret One";
  font-size: 30px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto 40px auto;
`;

const Select = styled.select`
  border: 1px solid #ccc;
  margin: 0 5px 0 0;
  height: 30px;
  color: #000;
`;

const InputText = styled.input`
  border: 1px solid #ccc;
  border-right: none;
  outline: none;
  height: 50px;
  min-width: 100px;
  max-width: 500px;
  padding: 15px;
  font-size: 17px;
  flex: 1;
  border-radius: 24px 0 0 24px;
`;
const Button = styled.button`
  border: 1px solid #ccc;
  border-left: 0;
  background: #fff;
  padding: 15px;
  border-radius: 0 24px 24px 0;
`;

const Main = styled.main`
  width: 100%;
`;


export default BookComponent;