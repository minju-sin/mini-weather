import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';
import {FlexContainer, StyledSpan} from '../style/TmpStyle.js';

// 강수확률 %  

function POPComponent({responseData}) {
    const popData = filterDataByCategory(responseData, 'POP');

    return (
        <FlexContainer style={{color: "skyblue"}}>
          {popData.map((item, index) => (
              <StyledSpan key={index}>{`${item.fcstValue}`}</StyledSpan>
          ))}
      </FlexContainer>
      
  )
}

export default POPComponent;