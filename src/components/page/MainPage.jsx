import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 428px;
  height: 700px;
  border: 5px solid black;
  border-radius: 30px;

  /* desktop 정 중앙 배열  */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainWeather = styled.div`
  background-color: grey;
  width:300px;
  height:300px;
`;

function MainPage() {
  return (
    <Wrapper>
      <h1>오늘의 날씨</h1>
      <MainWeather>온도</MainWeather>
    </Wrapper>
  );
}

export default MainPage;
