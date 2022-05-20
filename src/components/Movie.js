import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieCover = styled.div``;

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
  }
  &:hover {
    color: #F4330E;
  }
`;

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

function Movie({ id, bg, isLiked }) {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: +id, isLiked },
  });

  return (
    <MovieCover id={id}>
      <MovieBox>
        <Link to={`/${id}`}>
          <Poster bg={bg} />
        </Link>
      </MovieBox>
      <LikeBtn onClick={toggleLikeMovie}>
        {isLiked ? "Unlike" : "Like"}
        <span style={{ backgroundColor: isLiked ? "#222" : "#F4330E" }} />
      </LikeBtn>
    </MovieCover>
  );
}

export default Movie;