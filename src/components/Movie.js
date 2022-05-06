import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieBox = styled.div`
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
  width: 100%;
  aspect-ratio: 3.5 / 5;
  filter: grayscale(100%);
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
  transition: 0.2s ease-in;
  &:hover {
    filter: grayscale(0%);
  }
`;

const LikeBtn = styled.p`
  cursor: pointer;
  margin-top: 10px;
  text-align: right;
  transition: 0.2s ease-in;
  span {
    float: right;
    width: 8px;
    height: 8px;
    margin-left: 5px;
    border-radius: 50%;
    background-color: #F4330E;
  }
  &:hover {
    color: #F4330E;
  }
`;

function Movie({ id, bg }) {
  return (
    <div>
      <MovieBox>
        <Link to={`/${id}`}>
          <Poster bg={bg} />
        </Link>
      </MovieBox>
      <LikeBtn>Like<span /></LikeBtn>
    </div>
  );
}

export default Movie;