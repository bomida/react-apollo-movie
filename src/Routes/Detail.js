import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #222;
  text-align: center;
`;

const Column = styled.div``;

const Title = styled.div`
  display: inline-block;
  margin-bottom: 30px;
  h2{
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 7px;
  }
  h4 {
    text-align: left;
    margin-bottom: 10px;
  }
  span{
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #222;
  }
`;

const Poster = styled.div`
  position: relative;
  right: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  aspect-ratio: 3.5 / 5;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

const GET_MOVIE = gql`
  query getMovie($id: Int!){
    Movie(id: $id) {
      id
      title
      language
      rating
      medium_cover_image
      description_intro
    }
  }
`;

function Detail() {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      id: +id,
    },
  });
  console.log(data)

  return (
    <Wrapper>
      <Column>
        <Title>
          <h2>{loading ? "loading..." : data?.Movie?.title}</h2>
          <h4>
            Language : {data?.Movie?.language} |
            Rating : {data?.Movie?.rating}
          </h4>
          <span></span>
        </Title>
        <Poster bg={data?.Movie?.medium_cover_image} />
      </Column>
    </Wrapper>
  );
}

export default Detail;