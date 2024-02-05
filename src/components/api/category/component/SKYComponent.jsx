import React from 'react';
import { filterDataByCategory } from '../DataUtils';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledDiv = styled.div`
  flex: 1;
  min-width: 100px; /* Set your desired width here */
  text-align: center;
  border: 1px solid #ddd;
  padding: 8px;
`;

// 하늘상태 
/*
  맑음 : 1 
  구름많음 : 3
  흐림 : 4
*/ 

function SKYComponent({responseData}) {
    const skyData = filterDataByCategory(responseData, 'SKY');

    const getSkyConditionText = (code) => {
      switch (code) {
        case '1':
          return '맑음';
        case '3':
          return '구름많음';
        case '4':
          return '흐림';
        default:
          return '알 수 없음';
      }
    };

    return (
      <FlexContainer>
          {skyData.map((item, index) => (
              <StyledDiv key={index}>{`${getSkyConditionText(item.fcstValue)}`}</StyledDiv>
          ))}
      </FlexContainer>
      
  )
}

export default SKYComponent;