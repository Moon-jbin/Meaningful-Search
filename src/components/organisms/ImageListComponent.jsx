import styled from "styled-components";


const ImageListComponent = ({data}) => {
  const ImageItems = data.map((item,idx)=>{
    return(
      <Item key={idx}>
        <Thumbnail src={item.thumbnail}/>
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
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const Item = styled.div`
  height: auto;
  margin: 0 0 10px;
`;
const Thumbnail = styled.img`
  display: block;
  border: 1px solid #333;
  /* width: 218px; */
`;

export default ImageListComponent;