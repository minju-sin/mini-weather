import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';
import {FlexContainer, StyledDiv} from '../style/TmpStyle.js';


// 적설량
function WSDComponent({ responseData }) {
  const wsdData = filterDataByCategory(responseData, 'WSD');


  return (
    <FlexContainer>
        {wsdData.map((item, index) => (
            <StyledDiv key={index}>{`${item.fcstValue}`}</StyledDiv>
        ))}
    </FlexContainer>
    
)
}

export default WSDComponent;
