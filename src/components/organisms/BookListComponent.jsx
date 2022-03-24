import styled from "styled-components";

const BookListComponent = ({data}) => {

  const bookItems = data.map((item, idx)=>{
    return(
      <Item key={idx}>
        <Thumbnail src={item.image}/>
        <Title
          dangerouslySetInnerHTML={{
            __html:item.title
          }}
        />
        <SubTitle>{item.subTitle}</SubTitle>
      </Item>
    )
  })


  return (
    <>
      <List>{bookItems}</List>
    </>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Item = styled.div``;
const Thumbnail = styled.img``;
const Title = styled.span``;
const SubTitle = styled.span``;

export default BookListComponent;