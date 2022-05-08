import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  `;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Column = styled.div`
  width: 50%;
  padding: 40px;
  text-align: left;
  color: #222;
  line-height: 1.3;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: 600;
`;

const SubTitle = styled.h4`
  display: inline-block;
  margin: 14px 0;
  span {
    margin-left: 10px;
  }
`;

const BottomLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  margin-bottom: 30px;
  background-color: #222;
`;

const Description = styled.p`
  max-height: 250px;
  overflow-y: scroll;
`;

const HomeLink = styled.span`
  display: inline-block;
  margin-top: 50px;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    color: #F4330E;
  }
`;

const Poster = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      year
      language
      rating
      runtime
      description_full
      medium_cover_image
      isLiked @client
    }
  }
`;

function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });

  return (
    <>
      {loading ? <Loader>Loading...</Loader> :
        <Wrapper>
          <Column>
            <Title>
              {data?.movie?.title}
            </Title>
            <SubTitle>
              Year : {data?.movie?.year} |
              Rating : {data?.movie?.rating} |
              Runtime : {data?.movie?.runtime}
              <span>{data?.movie?.isLiked ? "💖" : "👎"}</span>
            </SubTitle>
            <BottomLine />
            <Description>
              {data?.movie?.description_full}
            </Description>
            <Link to="/">
              <HomeLink>&#8636; Home</HomeLink>
            </Link>
          </Column>
          <Poster bg={data?.movie?.medium_cover_image} />
        </Wrapper>
      }
    </>
  );
}

export default Detail;