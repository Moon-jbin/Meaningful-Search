import styled from "styled-components";


const ImageListComponent = ({data}) => {
  const ImageItems = data.map((item,idx)=>{
    return(
      <Item key={idx}>
        <Thumbnail src={item.link}/>
        <Title
          dangerouslySetInnerHTML={{
            __html:item.title
          }}
        />
      </Item>
    )
  })

  return (
    <>
        <List>{ImageItems}</List>
    </>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Item = styled.div``;
const Thumbnail = styled.img`
  display: block;
`;
const Title = styled.span``;

export default ImageListComponent;