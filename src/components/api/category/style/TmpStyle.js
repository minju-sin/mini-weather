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
export const CurrentLocation = styled.p`
  color: #757575;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
  text-transform: capitalize; 
`;

// 현재 온도 
export const Degree = styled.p`
  color: var(--systemGrey-900, #212121);
  text-align: center;
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.2px;
  text-transform: capitalize;
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
  text-align: left;
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