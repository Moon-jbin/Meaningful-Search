import styled from "styled-components";

const BlogListComponent = ({data}) => {


  const blogItems = data.map((item,idx)=>{
    return(
      <Item  key={idx}>
        <Title dangerouslySetInnerHTML={{__html:item.title}}/>
        <BloggerName>{item.BloggerName}</BloggerName>
        <Content dangerouslySetInnerHTML={{__html:item.description}} />
      </Item>
    )
  })

  return (
    <>
      <List>{blogItems}</List>    
    </>
  );
};

const List = styled.ul`
  
`;
const Item = styled.li``;
const Title = styled.h3`
  color: blue;
`;
const BloggerName = styled.span``;
const Content = styled.p``;

export default BlogListComponent;