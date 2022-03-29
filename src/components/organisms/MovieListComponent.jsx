import styled from "styled-components";

const MovieListComponent = ({data}) => {

  const movieItems = data.map((item,idx)=>{
    return(
      <Item key={idx}>
        <Thumbnail src={item.image}/>
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
      <List>{movieItems}</List>
    </>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Item = styled.div`
`;
const Thumbnail = styled.img`
`;
const Title = styled.span`
`;

export default MovieListComponent;