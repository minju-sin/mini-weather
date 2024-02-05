import React from 'react';
import { filterDataByCategory } from '../DataUtils';
import {FlexContainer, StyledDiv, StyledTitie} from '../style/TmpStyle.js';

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
          return '☀️';
        case '3':
          return '⛅';
        case '4':
          return '☁️';
        default:
          return '알 수 없음';
      }
    };

    return (
      <FlexContainer>
        <StyledTitie>하늘상태</StyledTitie>
          {skyData.map((item, index) => (
              <StyledDiv key={index}>{`${getSkyConditionText(item.fcstValue)}`}</StyledDiv>
          ))}
      </FlexContainer>
      
  )
}

export default SKYComponent;