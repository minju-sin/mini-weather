import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';
import {FlexContainer, StyledSpan} from '../style/TmpStyle.js';


// 적설량
function WSDComponent({ responseData }) {
  const wsdData = filterDataByCategory(responseData, 'WSD');


  return (
    <FlexContainer style={{color: "skyblue"}}>
        {wsdData.map((item, index) => (
            <StyledSpan key={index}>{`${item.fcstValue}`}</StyledSpan>
        ))}
    </FlexContainer>
    
)
}

export default WSDComponent;
