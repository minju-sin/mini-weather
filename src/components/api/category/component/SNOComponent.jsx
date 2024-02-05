import React from 'react';
import { filterDataByCategory } from '../DataUtils';
import {FlexContainer, StyledDiv} from '../style/TmpStyle.js';


// 적설량
function SNOComponent({ responseData }) {
  const snoData = filterDataByCategory(responseData, 'SNO');

  const getSnoConditionText = (code) => {
    switch (true) {
      case code < 1.0:
        return '1.0cm 미만';
      case code >= 5.0:
        return '5.0cm 이상';
      default:
        return code;
    }
  };

  return (
    <FlexContainer>
        {snoData.map((item, index) => (
            <StyledDiv key={index}>{`${getSnoConditionText(item.fcstValue)}`}</StyledDiv>
        ))}
    </FlexContainer>
    
)
}

export default SNOComponent;
