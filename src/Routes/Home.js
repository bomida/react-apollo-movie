import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const Wrapper = styled.div``;

const Loader = styled.div`
  margin-top: 100px;
  font-size: 18px;
  text-align: center;
`;

const Header = styled.div`
  padding: 60px 0;
  border-bottom: 1px solid #222;
`;

const Title = styled.h1`
  margin-bottom: 50px;
  color: #F4330E;
  font-size: 45px;
  font-weight: 600;
  text-align: center;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

const MoviesContainer = styled.div`
  display: grid;
  gap: 40px 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px;
`;

const GET_MOVIES = gql`
  {
    Movies {
      id
      medium_cover_image
    }
  }
`;

function Home() {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(data)

  return (
    <Wrapper>
      <Header>
        <Title>Apollo Movie App</Title>
        <SubTitle>Movie app built with React, Apollo and GraphQL</SubTitle>
      </Header>
      {loading && <Loader>Loading...</Loader>}
      <MoviesContainer>
        {data?.Movies?.map(movie => <Movie key={movie.id} id={movie.id} bg={movie.medium_cover_image} />)}
      </MoviesContainer>
    </Wrapper>
  );
}

export default Home;