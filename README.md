# react-apollo-movie

## 소개
이전 시간에 GraphQL Yoga로 API를 간단하게 만들어보고, 연습했던 내용을 Apollo, React를 이용하여 영화 추천 웹 사이트를 만들어보았습니다.

<br/>

## 최종 결과물
### Home
<img width="600" alt="1" src="https://user-images.githubusercontent.com/93115007/167276466-52aacb1e-fe74-41b0-9d72-7c81bd0dfb42.png">

### Movie List - Liked
<img width="600" alt="2" src="https://user-images.githubusercontent.com/93115007/167276470-86fd89e1-ff5c-43df-97f6-282b196b4b64.png">

### Movie Detail - Liked
<img width="600" alt="5" src="https://user-images.githubusercontent.com/93115007/167276482-5f7d8666-268c-45e6-b1a2-01422bca9d48.png">

### Movie List - Unliked
<img width="600" alt="3" src="https://user-images.githubusercontent.com/93115007/167276472-1975b9a8-0164-42c2-9fa9-6f60e9eaab44.png">

### Movie Detail - Unliked
<img width="600" alt="4" src="https://user-images.githubusercontent.com/93115007/167276473-2089aacb-0d10-4435-91b1-4a0915dc99ad.png">

<br/>

## 사용기능
### React
### React Router Dom
  - useParams, link
  - 포스터를 클릭하면 detail 페이지로 넘어가 해당 포스터의 id 값을 정보를 받아서 포스터 이미지와 다양한 정보들을 가져와 화면에 보여줍니다.
  - detail 페이지에서 다시 Home으로 가기위해 link를 이용하였습니다.
### Apollo
  - useQuery
  - useQuery 훅으로 영화 정보가 담긴 API를 가져 왔습니다.
### styled-component
  - JSX와 스타일 코드를 분리하기 위해 styled-component를 사용하였습니다.

  <br>

## 개발 환경
  - 개발도구: VSCode, Github
  - 사용언어: ReactJS

  <br>

## 레퍼런스
  - [Nomadcoder](https://nomadcoders.co)