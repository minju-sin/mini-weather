// TmpStyle.js
import styled from 'styled-components';

// 결과값 가로 정렬 
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

// 기온 표 
export const StyledSpan = styled.span`
  flex: 1;
  min-width: 70px; 
  text-align: center;
  border-right: 1px solid #ddd; /* 세로선만 표시되도록 수정 */
  padding: 8px;
`;

export const StyledTitie = styled.div`
  flex: 1;
  min-width: 70px; 
  font-size: 12px;
  font-weight: bold;
  padding: 8px;
`;

export const Wrapper = styled.div`
  width: 800px;
  margin: -300px 100px auto;
  overflow: auto;  
`;

// 현재위치
export const CurrentLocation = styled.div`
  color: #757575;
  font-size: 30px;
  font-weight: 400;
  padding-left: 890px;
  margin-top: 50px;
`;

// 현재 온도 
export const Degree = styled.div`
  font-size: 56px;
  font-weight: bold;
  display:flex;
  flex-direction: row;
  padding-left: 880px;
`;

// 최저.최고기온 
export const TMNX = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 880px;
  padding-bottom: 30px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.2px;
  text-transform: capitalize;
`;

// 날씨 제목 
export const WeatherTitle = styled.div`
  width: 100px;
  height: 300px;
  text-align: right;
  font-size: 15px;
  padding: 1px;
`;

export const WeatherWrapper = styled.div`
  position: absolute;
  left: 500px;
`;

export const MinMaxTmp = styled.span`
  padding : 5px;
`;

export const Now = styled.p`
  padding : 2px;
`;