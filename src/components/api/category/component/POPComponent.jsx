import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';
import {FlexContainer, StyledDiv} from '../style/TmpStyle.js';

// 강수확률 %  

function POPComponent({responseData}) {
    const popData = filterDataByCategory(responseData, 'POP');

    return (
      <FlexContainer>
          {popData.map((item, index) => (
              <StyledDiv key={index}>{`${item.fcstValue}`}</StyledDiv>
          ))}
      </FlexContainer>
      
  )
}

export default POPComponent;