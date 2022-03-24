import styled from "styled-components";

const KnowledgeListComponent = ({data}) => {

  const kinItems = data.map((item, idx)=>{
    return(
      <Item key={idx}>
        <Title dangerouslySetInnerHTML={{__html:item.title}}/>
        <SubTitle dangerouslySetInnerHTML={{__html:item.description}} />
      </Item>
    )
  })
  
  return (
    <>
      <List>{kinItems}</List>
    </>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Item = styled.div`
  margin: 10px;
`;
const Title = styled.span`
  display: block;
  
`;
const SubTitle = styled.span``;



export default KnowledgeListComponent;